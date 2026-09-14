"use client";

import { useEffect, useState } from "react";
import {
  Search,
  SlidersHorizontal,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Car,
  CalendarDays,
  Check,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Sample data — placeholder only, real data will come from the backend
// ---------------------------------------------------------------------------

const STEPS = [
  { id: "make", label: "Make & model" },
  { id: "body", label: "Body type" },
  { id: "price", label: "Vehicle price" },
  { id: "year", label: "Year" },
  { id: "mileage", label: "Mileage" },
  { id: "country", label: "Country" },
] as const;

const MAKES = ["Toyota", "Nissan", "Mazda", "Honda", "Audi", "BMW", "Mercedes", "Volkswagen", "Volvo"];

const MODELS_BY_MAKE: Record<string, string[]> = {
  Toyota: ["Corolla", "Camry", "Hilux", "Land Cruiser", "Yaris", "RAV4", "Prius", "Vitz"],
  Nissan: ["Note", "Juke", "X-Trail", "Qashqai", "Navara", "Skyline", "Leaf"],
  Mazda: ["Demio", "Axela", "CX-5", "CX-3", "MX-5", "Atenza"],
  Honda: ["Civic", "Fit", "CR-V", "Vezel", "Accord", "Freed"],
  Audi: ["A3", "A4", "A6", "Q5", "Q7", "TT"],
  BMW: ["3 Series", "5 Series", "X1", "X3", "X5", "M4"],
  Mercedes: ["A-Class", "C-Class", "E-Class", "GLA", "GLC", "S-Class"],
  Volkswagen: ["Golf", "Polo", "Passat", "Tiguan", "Touareg"],
  Volvo: ["850", "850 Series", "850 Estate", "C-30", "S60", "S70", "S80", "S90"],
};

const BODY_TYPES: { name: string; count?: number; onRequest?: boolean }[] = [
  { name: "Hatchback", count: 233 },
  { name: "SUV", count: 45 },
  { name: "MPV", count: 42 },
  { name: "Sedan", count: 11 },
  { name: "Station Wagon", count: 25 },
  { name: "Van", onRequest: true },
  { name: "Coupe", count: 2 },
  { name: "Jeep", onRequest: true },
  { name: "Convertible", onRequest: true },
  { name: "Pick Up", count: 1 },
];

const COUNTRIES = [
  { name: "United Kingdom", flag: "🇬🇧", note: "Right-hand drive" },
  { name: "Ireland", flag: "🇮🇪", note: "Right-hand drive" },
  { name: "Cyprus", flag: "🇨🇾", note: "Right-hand drive" },
  { name: "Pakistan", flag: "🇵🇰", note: "Left-hand drive" },
];

const PRICE_BOUNDS = { min: 0, max: 11_314_000 };
const YEAR_BOUNDS = { min: 1980, max: 2022 };
const MILEAGE_BOUNDS = { min: 0, max: 236_000 };

// ---------------------------------------------------------------------------
// Small reusable dual-range slider
// ---------------------------------------------------------------------------

function DualRangeSlider({
  min,
  max,
  value,
  onChange,
  formatValue,
}: {
  min: number;
  max: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
  formatValue: (n: number) => string;
}) {
  const [start, end] = value;
  const startPct = ((start - min) / (max - min)) * 100;
  const endPct = ((end - min) / (max - min)) * 100;

  const thumbClasses =
    "pointer-events-none absolute inset-0 w-full appearance-none bg-transparent " +
    "[&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 " +
    "[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 " +
    "[&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:h-6 " +
    "[&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2";

  return (
    <div
      className="rounded-2xl px-6 py-6"
      style={{ backgroundColor: "color-mix(in srgb, var(--color-secondary) 8%, var(--color-main))" }}
    >
      <div className="relative h-8">
        <div
          className="absolute left-0 right-0 top-1/2 h-2 -translate-y-1/2 rounded-full"
          style={{
            backgroundColor: "color-mix(in srgb, var(--color-secondary) 35%, transparent)",
            backgroundImage:
              "repeating-linear-gradient(to right, transparent 0 8px, color-mix(in srgb, var(--color-main) 90%, transparent) 8px 16px)",
          }}
        />
        <div
          className="absolute top-1/2 h-2 -translate-y-1/2 rounded-full"
          style={{ left: `${startPct}%`, right: `${100 - endPct}%`, backgroundColor: "var(--color-accent)" }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={start}
          onChange={(e) => onChange([Math.min(Number(e.target.value), end - 1), end])}
          className={thumbClasses}
          style={{ accentColor: "var(--color-accent)" }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={end}
          onChange={(e) => onChange([start, Math.max(Number(e.target.value), start + 1)])}
          className={thumbClasses}
          style={{ accentColor: "var(--color-accent)" }}
        />
      </div>

      <div className="mt-4 flex items-center justify-between font-heading text-sm font-medium text-alt">
        <span>{formatValue(start)}</span>
        <span>{formatValue(end)}</span>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Year stepper field
// ---------------------------------------------------------------------------

function YearField({
  label,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="flex flex-1 flex-col items-center gap-2">
      <button
        type="button"
        aria-label={`Increase ${label.toLowerCase()} year`}
        onClick={() => onChange(Math.min(max, value + 1))}
        className="text-secondary transition-opacity hover:opacity-70"
      >
        <ChevronUp className="h-4 w-4" strokeWidth={2} />
      </button>

      <div className="flex items-center gap-2">
        <span className="font-heading text-4xl font-bold text-alt ">{value}</span>
        <CalendarDays className="h-5 w-5 text-accent" strokeWidth={1.75} />
      </div>

      <button
        type="button"
        aria-label={`Decrease ${label.toLowerCase()} year`}
        onClick={() => onChange(Math.max(min, value - 1))}
        className="text-secondary transition-opacity hover:opacity-70"
      >
        <ChevronDown className="h-4 w-4" strokeWidth={2} />
      </button>

      <span className="font-heading text-xs font-medium uppercase tracking-wide text-secondary">{label}</span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Filter flow (stepper + step content + bottom nav)
// ---------------------------------------------------------------------------

function FilterFlow({ onClose }: { onClose: () => void }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [visited, setVisited] = useState<Set<number>>(new Set([0]));

  const [selectedMake, setSelectedMake] = useState<string | null>(null);
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [isModelPanelOpen, setIsModelPanelOpen] = useState(false);
  const [draftModels, setDraftModels] = useState<string[]>([]);
  const [modelSearchQuery, setModelSearchQuery] = useState("");
  const [selectedBody, setSelectedBody] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([PRICE_BOUNDS.min, PRICE_BOUNDS.max]);
  const [yearFrom, setYearFrom] = useState(YEAR_BOUNDS.min);
  const [yearTo, setYearTo] = useState(YEAR_BOUNDS.max);
  const [mileageRange, setMileageRange] = useState<[number, number]>([MILEAGE_BOUNDS.min, MILEAGE_BOUNDS.max]);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const currentStep = STEPS[stepIndex];

  const goToStep = (index: number) => {
    setStepIndex(index);
    setVisited((prev) => new Set(prev).add(index));
  };

  const handleChooseMake = (make: string) => {
    if (make !== selectedMake) {
      // models are make-specific, so switching makes clears any prior model picks
      setSelectedModels([]);
    }
    setSelectedMake(make);
  };

  const openModelPanel = () => {
    setDraftModels(selectedModels);
    setModelSearchQuery("");
    setIsModelPanelOpen(true);
  };

  const toggleDraftModel = (model: string) => {
    setDraftModels((prev) => (prev.includes(model) ? prev.filter((m) => m !== model) : [...prev, model]));
  };

  const confirmModelPanel = () => {
    setSelectedModels(draftModels);
    setIsModelPanelOpen(false);
  };

  const cancelModelPanel = () => {
    setIsModelPanelOpen(false);
  };

  const handleSearch = () => {
    // Placeholder only — wire this up to the real search endpoint later.
    console.log("Search my vehicle", {
      make: selectedMake,
      models: selectedModels,
      body: selectedBody,
      priceRange,
      year: [yearFrom, yearTo],
      mileageRange,
      country: selectedCountry,
    });
    onClose();
  };

  return (
    <div
      className="relative w-full max-w-3xl rounded-[2rem] p-5 shadow-2xl sm:p-8"
      style={{ backgroundColor: "var(--color-main)" }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close filters"
        className="absolute -top-3 -right-3 flex h-9 w-9 items-center justify-center rounded-full text-main shadow-md transition-opacity hover:opacity-90 cursor-pointer"
        style={{ backgroundColor: "var(--color-accent)" }}
      >
        <X className="h-4 w-4" strokeWidth={2} />
      </button>

      {/* stepper */}
      <div
        className="stepper-scroll flex items-center gap-1 overflow-x-auto rounded-full px-3 py-2.5 "
        style={{ backgroundColor: "color-mix(in srgb, var(--color-secondary) 8%, var(--color-main))" }}
      >
        {STEPS.map((step, index) => {
          const isActive = index === stepIndex;
          const isVisited = visited.has(index);
          return (
            <div key={step.id} className="flex shrink-0 items-center">
              <button
                type="button"
                onClick={() => goToStep(index)}
                className="whitespace-nowrap rounded-full px-4 py-2 font-heading text-xs font-medium transition-colors sm:text-sm cursor-pointer"
                style={{
                  backgroundColor: isVisited ? "var(--color-accent)" : "transparent",
                  color: isVisited ? "var(--color-main)" : "var(--color-secondary)",
                  boxShadow: isActive ? "0 0 0 2px var(--color-accent)" : "none",
                }}
              >
                {step.label}
              </button>
              {index < STEPS.length - 1 && (
                <span
                  className="mx-1 h-[2px] w-6 shrink-0 sm:w-8"
                  style={{
                    backgroundColor:
                      isVisited && visited.has(index + 1)
                        ? "var(--color-accent)"
                        : "color-mix(in srgb, var(--color-secondary) 30%, transparent)",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .stepper-scroll {
          scrollbar-width: thin;
          scrollbar-color: var(--color-accent) transparent;
        }
        .stepper-scroll::-webkit-scrollbar {
          height: 4px;
        }
        .stepper-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .stepper-scroll::-webkit-scrollbar-thumb {
          background-color: var(--color-accent);
          border-radius: 9999px;
        }
      `}</style>

      {/* step content */}
      <div className="mt-7 min-h-[280px] max-h-[52vh] overflow-y-auto pr-1">
        {currentStep.id === "make" && !isModelPanelOpen && (
          <div>
            <h3 className="font-heading text-lg font-semibold text-alt">Select make</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {MAKES.map((make) => {
                const isSelected = selectedMake === make;
                return (
                  <button
                    key={make}
                    type="button"
                    onClick={() => handleChooseMake(make)}
                    className="flex flex-col items-center gap-2 rounded-2xl border px-4 py-5 transition-colors"
                    style={{
                      borderColor: isSelected ? "var(--color-accent)" : "color-mix(in srgb, var(--color-secondary) 25%, transparent)",
                      backgroundColor: isSelected
                        ? "color-mix(in srgb, var(--color-accent) 12%, var(--color-main))"
                        : "var(--color-main)",
                    }}
                  >
                    <Car className="h-7 w-7 text-secondary" strokeWidth={1.5} />
                    <span className="font-heading text-xs  text-alt sm:text-sm">{make}</span>
                  </button>
                );
              })}
            </div>

            {selectedMake && (
              <div className="mt-5 flex flex-col items-center gap-2">
                <button
                  type="button"
                  onClick={openModelPanel}
                  className="inline-flex items-center justify-center rounded-full bg-alt px-6 py-3 font-heading text-sm  text-main transition-opacity hover:opacity-90"
                >
                  Explore {selectedMake} models
                </button>
                {selectedModels.length > 0 && (
                  <span className="text-xs text-secondary">{selectedModels.length} model(s) selected</span>
                )}
              </div>
            )}
          </div>
        )}

        {currentStep.id === "make" && isModelPanelOpen && selectedMake && (
          <div>
            <h3 className="font-heading text-lg  text-alt">
              Select models &mdash; <span className="text-accent uppercase">{selectedMake}</span>
            </h3>

            <div
              className="mt-4 flex items-center gap-3 rounded-full px-5 py-3"
              style={{ backgroundColor: "color-mix(in srgb, var(--color-secondary) 8%, var(--color-main))" }}
            >
              <Search className="h-4 w-4 shrink-0 text-secondary" strokeWidth={1.75} />
              <input
                type="text"
                value={modelSearchQuery}
                onChange={(e) => setModelSearchQuery(e.target.value)}
                placeholder="Search models..."
                className="w-full bg-transparent font-heading text-sm text-alt placeholder:text-secondary focus:outline-none"
              />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {(MODELS_BY_MAKE[selectedMake] ?? [])
                .filter((model) => model.toLowerCase().includes(modelSearchQuery.toLowerCase()))
                .map((model) => {
                  const isSelected = draftModels.includes(model);
                  return (
                    <button
                      key={model}
                      type="button"
                      onClick={() => toggleDraftModel(model)}
                      aria-pressed={isSelected}
                      className="flex items-center justify-center gap-1.5 rounded-2xl border px-3 py-5 text-center transition-colors"
                      style={{
                        borderColor: isSelected ? "var(--color-accent)" : "color-mix(in srgb, var(--color-secondary) 25%, transparent)",
                        backgroundColor: isSelected
                          ? "color-mix(in srgb, var(--color-accent) 12%, var(--color-main))"
                          : "var(--color-main)",
                      }}
                    >
                      {isSelected && <Check className="h-3.5 w-3.5 text-accent" strokeWidth={2.5} />}
                      <span className="font-heading text-xs  text-alt sm:text-sm">{model}</span>
                    </button>
                  );
                })}
            </div>
          </div>
        )}

        {currentStep.id === "body" && (
          <div>
            <h3 className="font-heading text-lg font-semibold text-alt">Select body</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {BODY_TYPES.map((body) => {
                const isSelected = selectedBody === body.name;
                return (
                  <button
                    key={body.name}
                    type="button"
                    onClick={() => setSelectedBody(body.name)}
                    className="flex flex-col items-center gap-2 rounded-2xl border px-4 py-5 transition-colors"
                    style={{
                      borderColor: isSelected ? "var(--color-accent)" : "color-mix(in srgb, var(--color-secondary) 25%, transparent)",
                      borderStyle: body.onRequest ? "dashed" : "solid",
                      backgroundColor: isSelected
                        ? "color-mix(in srgb, var(--color-accent) 12%, var(--color-main))"
                        : "var(--color-main)",
                    }}
                  >
                    <Car className="h-7 w-7 text-secondary" strokeWidth={1.5} />
                    <span className="font-heading text-xs  text-alt sm:text-sm">{body.name}</span>
                    {body.onRequest ? (
                      <span className="font-heading text-[11px] font-medium text-accent">Available on request</span>
                    ) : (
                      <span className="text-xs text-secondary">({body.count})</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {currentStep.id === "price" && (
          <div>
            <h3 className="font-heading text-lg font-semibold text-alt">Select price range</h3>
            <div className="mt-4">
              <div className="mb-2 flex justify-between font-heading text-xs font-medium uppercase tracking-wide text-secondary">
                <span>Start price</span>
                <span>End price</span>
              </div>
              <DualRangeSlider
                min={PRICE_BOUNDS.min}
                max={PRICE_BOUNDS.max}
                value={priceRange}
                onChange={setPriceRange}
                formatValue={(n) => n.toLocaleString()}
              />
            </div>
          </div>
        )}

        {currentStep.id === "year" && (
          <div>
            <h3 className="font-heading text-lg font-semibold text-alt">Select year</h3>
            <div
              className="mt-4 flex items-center justify-around rounded-2xl px-6 py-8"
              style={{ backgroundColor: "color-mix(in srgb, var(--color-secondary) 8%, var(--color-main))" }}
            >
              <YearField label="From" value={yearFrom} min={YEAR_BOUNDS.min} max={yearTo - 1} onChange={setYearFrom} />
              <div
                className="h-16 w-px shrink-0"
                style={{ backgroundColor: "color-mix(in srgb, var(--color-secondary) 25%, transparent)" }}
              />
              <YearField label="To" value={yearTo} min={yearFrom + 1} max={YEAR_BOUNDS.max} onChange={setYearTo} />
            </div>
          </div>
        )}

        {currentStep.id === "mileage" && (
          <div>
            <h3 className="font-heading text-lg font-semibold text-alt">Select mileage</h3>
            <div className="mt-4">
              {/* <p className="mb-2 text-center font-heading text-xs font-medium uppercase tracking-wide text-secondary">
                Select mileage range
              </p> */}
              <DualRangeSlider
                min={MILEAGE_BOUNDS.min}
                max={MILEAGE_BOUNDS.max}
                value={mileageRange}
                onChange={setMileageRange}
                formatValue={(n) => `${n.toLocaleString()} KM`}
              />
            </div>
          </div>
        )}

        {currentStep.id === "country" && (
          <div>
            <h3 className="font-heading text-lg font-semibold text-alt">Select country</h3>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {COUNTRIES.map((country) => {
                const isSelected = selectedCountry === country.name;
                return (
                  <button
                    key={country.name}
                    type="button"
                    onClick={() => setSelectedCountry(country.name)}
                    className="flex items-center gap-3 rounded-2xl border px-5 py-4 text-left transition-colors"
                    style={{
                      borderColor: isSelected ? "var(--color-accent)" : "color-mix(in srgb, var(--color-secondary) 25%, transparent)",
                      backgroundColor: isSelected
                        ? "color-mix(in srgb, var(--color-accent) 12%, var(--color-main))"
                        : "var(--color-main)",
                    }}
                  >
                    <span className="text-2xl">{country.flag}</span>
                    <div>
                      <p className="font-heading text-sm font-semibold text-alt">{country.name}</p>
                      <p className="text-xs text-secondary">{country.note}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* bottom nav */}
      {currentStep.id === "make" && isModelPanelOpen ? (
        <div
          className="mt-7 flex items-center justify-between border-t pt-5"
          style={{ borderColor: "color-mix(in srgb, var(--color-secondary) 18%, transparent)" }}
        >
          <button
            type="button"
            onClick={cancelModelPanel}
            className="inline-flex items-center gap-1 font-heading text-sm font-medium text-alt transition-opacity hover:opacity-70"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={2} />
            Cancel
          </button>

          <button
            type="button"
            onClick={confirmModelPanel}
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-alt px-7 py-3 font-heading text-sm font-medium text-main shadow-sm transition-opacity hover:opacity-90"
          >
            <Check className="h-4 w-4" strokeWidth={2.5} />
            Done
          </button>

          <span />
        </div>
      ) : (
        <div
          className="mt-7 flex items-center justify-between border-t pt-5"
          style={{ borderColor: "color-mix(in srgb, var(--color-secondary) 18%, transparent)" }}
        >
          {stepIndex > 0 ? (
            <button
              type="button"
              onClick={() => goToStep(stepIndex - 1)}
              className="inline-flex items-center gap-1 font-heading text-sm font-medium text-alt transition-opacity hover:opacity-70"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={2} />
              {STEPS[stepIndex - 1].label}
            </button>
          ) : (
            <span />
          )}

          <button
            type="button"
            onClick={handleSearch}
            className="inline-flex items-center justify-center rounded-full bg-alt px-7 py-3 font-heading text-sm font-medium text-main shadow-sm transition-opacity hover:opacity-90"
          >
            Search my vehicle
          </button>

          {stepIndex < STEPS.length - 1 ? (
            <button
              type="button"
              onClick={() => goToStep(stepIndex + 1)}
              className="inline-flex items-center gap-1 font-heading text-sm font-medium text-alt transition-opacity hover:opacity-70"
            >
              {STEPS[stepIndex + 1].label}
              <ChevronRight className="h-4 w-4" strokeWidth={2} />
            </button>
          ) : (
            <span />
          )}
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Search bar + popup trigger
// ---------------------------------------------------------------------------

export function CarSearchFilterBar() {
  const [query, setQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    if (!isFilterOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsFilterOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isFilterOpen]);

  return (
    <div className="mx-auto w-full mt-10">
      <div
        className="flex items-center gap-3 rounded-[1.75rem]  px-5 py-3 shadow-sm"
        style={{ backgroundColor: "color-mix(in srgb, var(--color-alt) 14%, var(--color-main))" }}
      >
        <Search className="h-5 w-5 shrink-0 text-secondary" strokeWidth={1.75} />

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for cars, brands or models..."
          className="w-full bg-transparent font-heading text-sm text-alt placeholder:text-secondary focus:outline-none sm:text-base"
        />

        {query.trim().length > 0 && (
          <button
            type="button"
            onClick={() => {
              // Placeholder only — wire this up to the real search endpoint later.
              console.log("Search input query:", query);
            }}
            aria-label="Search"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-opacity hover:opacity-80 cursor-pointer"
            style={{ backgroundColor: "color-mix(in srgb, var(--color-accent) 15%, transparent)" }}
          >
            <Search className="h-4 w-4 text-accent" strokeWidth={2} />
          </button>
        )}

        <button
          type="button"
          onClick={() => setIsFilterOpen(true)}
          aria-label="Open filters"
          aria-haspopup="dialog"
          aria-expanded={isFilterOpen}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-alt transition-opacity hover:opacity-90 cursor-pointer"
        >
          <SlidersHorizontal className="h-4.5 w-4.5 text-main" strokeWidth={1.75} />
        </button>
      </div>

      {isFilterOpen && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
          <button
            type="button"
            aria-label="Close filters"
            onClick={() => setIsFilterOpen(false)}
            className="absolute inset-0 bg-black/50"
          />
          <FilterFlow onClose={() => setIsFilterOpen(false)} />
        </div>
      )}
    </div>
  );
}
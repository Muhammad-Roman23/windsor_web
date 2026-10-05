"use client";

import { useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { X } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";

// --- Maker Model Data ---
const makersData: Record<string, string[]> = {
    Toyota: ["Corolla", "Camry", "Hilux", "Land Cruiser", "Yaris", "Prius"],
    Honda: ["Civic", "Accord", "City", "CR-V", "HR-V", "BR-V"],
    Suzuki: ["Alto", "Swift", "Cultus", "Wagon R", "Jimny", "Baleno"],
    Nissan: ["Sunny", "Patrol", "X-Trail", "Navara", "Note"],
    BMW: ["3 Series", "5 Series", "X5", "X3", "7 Series"],
    Mercedes: ["C-Class", "E-Class", "S-Class", "GLA", "GLC"],
};

const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.2 } },
};

// --- Validation Schema ---
const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name required hai"),
    businessEmail: Yup.string().email("Valid email dalein").required("Business Email required hai"),
    contactNumber: Yup.string().required("Contact Number required hai"),
    completeAddress: Yup.string().required("Complete Address required hai"),
    maker: Yup.string().required("Maker select karein"),
    model: Yup.string().required("Model select karein"),
    year: Yup.string().required("Year select karein"),
    month: Yup.string().required("Month select karein"),
    color: Yup.string().required("Color select karein"),
    steering: Yup.string().required("Steering select karein"),
    drive: Yup.string().required("Drive select karein"),
    fuel: Yup.string().required("Fuel select karein"),
    shift: Yup.string().required("Shift select karein"),
    bidAmount: Yup.string().required("Bid Amount required hai"),
    bidValidity: Yup.string().required("Bid Validity required hai"),
    paymentTerms: Yup.array().min(1, "Payment Terms select karein"),
    paymentMethod: Yup.array().min(1, "Payment Method select karein"),
    confirmAccuracy: Yup.boolean().oneOf([true], "Confirm karna zaruri hai"),
    agreeTerms: Yup.boolean().oneOf([true], "Terms agree karna zaruri hai"),
});

export function VehicleBidModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const formik = useFormik({
        initialValues: {
            fullName: "",
            businessEmail: "",
            contactNumber: "",
            completeAddress: "",
            maker: "",
            model: "",
            year: "",
            month: "",
            color: "",
            steering: "",
            drive: "",
            fuel: "",
            shift: "",
            ccRange: 0,
            mileageRange: 100000,
            bidAmount: "",
            bidValidity: "",
            paymentTerms: [] as string[],
            paymentMethod: [] as string[],
            notes: "",
            confirmAccuracy: false,
            agreeTerms: false,
        },
        validationSchema,
        onSubmit: (values) => {
            console.log("Form Submitted Data:", values);
            alert("Form Submitted! Console check karo");
            onClose();
        },
    });

    // Jab maker change ho to model reset kardo
    useEffect(() => {
        formik.setFieldValue("model", "");
    }, [formik.values.maker]);

    const handleCheckboxArray = (field: "paymentTerms" | "paymentMethod", value: string) => {
        const arr = formik.values[field];
        if (arr.includes(value)) {
            formik.setFieldValue(field, arr.filter((v) => v !== value));
        } else {
            formik.setFieldValue(field, [...arr, value]);
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)" }}
                onClick={onClose}
            >
                <motion.div
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={(e) => e.stopPropagation()}
                    className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border"
                    style={{
                        backgroundColor: "var(--color-main)",
                        borderColor: "color-mix(in srgb, var(--color-secondary) 15%, transparent)",
                        boxShadow: "0 0 30px color-mix(in srgb, var(--color-accent) 20%, transparent)",
                    }}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between border-b px-6 py-4" style={{ borderColor: "color-mix(in srgb, var(--color-secondary) 15%, transparent)" }}>
                        <h3 className="text-lg font-semibold" style={{ color: "var(--color-accent)" }}>Vehicle Bid Form</h3>
                        <button onClick={onClose} className="cursor-pointer rounded-full p-1 hover:opacity-70"><X size={24} /></button>
                    </div>

                    {/* Form Body */}
                    <form onSubmit={formik.handleSubmit} className="overflow-y-auto p-6">
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                            {/* LEFT */}
                            <div className="space-y-5">
                                <div>
                                    <h4 className="mb-3 text-sm font-semibold">Personal Details</h4>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div><Input name="fullName" placeholder="Full Name" formik={formik} /><Error msg={formik.touched.fullName && formik.errors.fullName} /></div>
                                        <div><Input name="businessEmail" placeholder="Business Email" formik={formik} /><Error msg={formik.touched.businessEmail && formik.errors.businessEmail} /></div>
                                        <div><Input name="contactNumber" placeholder="Contact Number" formik={formik} /><Error msg={formik.touched.contactNumber && formik.errors.contactNumber} /></div>
                                        <div><Input name="completeAddress" placeholder="Complete Address" formik={formik} /><Error msg={formik.touched.completeAddress && formik.errors.completeAddress} /></div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="mb-3 text-sm font-semibold">Vehicle Details</h4>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <Select name="maker" formik={formik} placeholder="Select Maker" options={Object.keys(makersData)} />
                                            <Error msg={formik.touched.maker && formik.errors.maker} />
                                        </div>
                                        <div>
                                            <Select name="model" formik={formik} placeholder="Select Model" options={formik.values.maker ? makersData[formik.values.maker] : []} disabled={!formik.values.maker} />
                                            <Error msg={formik.touched.model && formik.errors.model} />
                                        </div>
                                        <div><Select name="year" formik={formik} placeholder="Select Year" options={["2024", "2023", "2022", "2021", "2020", "2019"]} /><Error msg={formik.touched.year && formik.errors.year} /></div>
                                        <div><Select name="month" formik={formik} placeholder="Select month" options={["January", "February", "March", "April"]} /><Error msg={formik.touched.month && formik.errors.month} /></div>
                                        <div><Select name="color" formik={formik} placeholder="Select Color" options={["White", "Black", "Silver", "Red", "Blue"]} /><Error msg={formik.touched.color && formik.errors.color} /></div>
                                        <div><Select name="steering" formik={formik} placeholder="Select Steering" options={["Left", "Right"]} /><Error msg={formik.touched.steering && formik.errors.steering} /></div>
                                        <div><Select name="drive" formik={formik} placeholder="Select Drive" options={["2WD", "4WD", "AWD"]} /><Error msg={formik.touched.drive && formik.errors.drive} /></div>
                                        <div><Select name="fuel" formik={formik} placeholder="Select Fuel" options={["Petrol", "Diesel", "Hybrid", "Electric"]} /><Error msg={formik.touched.fuel && formik.errors.fuel} /></div>
                                        <div><Select name="shift" formik={formik} placeholder="Select Shift" options={["Automatic", "Manual", "CVT"]} /><Error msg={formik.touched.shift && formik.errors.shift} /></div>

                                        <div className="col-span-2 grid grid-cols-2 gap-3 pt-2">
                                            <div><label className="text-sm font-medium">Select CC Range: 0 - {formik.values.ccRange}</label><input type="range" min={0} max={5000} step={100} value={formik.values.ccRange} onChange={(e) => formik.setFieldValue("ccRange", Number(e.target.value))} className="mt-2 w-full accent-[var(--color-accent)]" /></div>
                                            <div><label className="text-sm font-medium">Select Mileage Range: 0 - {formik.values.mileageRange}</label><input type="range" min={0} max={2020000} step={10000} value={formik.values.mileageRange} onChange={(e) => formik.setFieldValue("mileageRange", Number(e.target.value))} className="mt-2 w-full accent-[var(--color-accent)]" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT */}
                            <div className="space-y-5">
                                <div>
                                    <h4 className="mb-3 text-sm font-semibold">Bid Details</h4>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div><label className="mb-1 block text-sm">Proposed Bid Amount</label><Input name="bidAmount" placeholder="" formik={formik} /><Error msg={formik.touched.bidAmount && formik.errors.bidAmount} /></div>
                                        <div><label className="mb-1 block text-sm">Bid Validity</label><Input name="bidValidity" placeholder="" formik={formik} /><Error msg={formik.touched.bidValidity && formik.errors.bidValidity} /></div>
                                        <div>
                                            <label className="mb-1 block text-sm">Payment Terms</label>
                                            <div className="flex flex-wrap gap-2 pt-1 text-sm">
                                                {["Full Payment", "Installment"].map(opt => (<label key={opt} className="flex items-center gap-1"><input type="checkbox" checked={formik.values.paymentTerms.includes(opt)} onChange={() => handleCheckboxArray("paymentTerms", opt)} className="accent-[var(--color-accent)]" /> {opt}</label>))}
                                            </div><Error msg={formik.errors.paymentTerms as string} />
                                        </div>
                                        <div>
                                            <label className="mb-1 block text-sm">Preferred Payment Method</label>
                                            <div className="flex flex-wrap gap-2 pt-1 text-sm">
                                                {["Bank Transfer", "Cash", "Other"].map(opt => (<label key={opt} className="flex items-center gap-1"><input type="checkbox" checked={formik.values.paymentMethod.includes(opt)} onChange={() => handleCheckboxArray("paymentMethod", opt)} className="accent-[var(--color-accent)]" /> {opt}</label>))}
                                            </div><Error msg={formik.errors.paymentMethod as string} />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="mb-1 text-sm font-semibold">Additional Information</h4>
                                    <label className="mb-1 block text-sm">Special Requirements or Notes</label>
                                    <textarea name="notes" value={formik.values.notes} onChange={formik.handleChange} rows={5} className="w-full rounded-lg border p-3 text-sm outline-none focus:border-[var(--color-accent)]" style={{ backgroundColor: "color-mix(in srgb, var(--color-secondary) 6%, transparent)", borderColor: "color-mix(in srgb, var(--color-secondary) 15%, transparent)" }} />
                                </div>

                                <div className="space-y-2 text-sm">
                                    <label className="flex items-start gap-2"><input type="checkbox" name="confirmAccuracy" checked={formik.values.confirmAccuracy} onChange={formik.handleChange} className="mt-1 accent-[var(--color-accent)]" /><span>I confirm that the information provided is accurate.</span></label><Error msg={formik.touched.confirmAccuracy && formik.errors.confirmAccuracy} />
                                    <label className="flex items-start gap-2"><input type="checkbox" name="agreeTerms" checked={formik.values.agreeTerms} onChange={formik.handleChange} className="mt-1 accent-[var(--color-accent)]" /><span>I agree to the <span style={{ color: "var(--color-accent)" }}>terms and conditions</span> of this bid.</span></label><Error msg={formik.touched.agreeTerms && formik.errors.agreeTerms} />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="mt-6 cursor-pointer w-full rounded-lg py-3 text-sm font-semibold transition-opacity hover:opacity-90" style={{ backgroundColor: "var(--color-accent)", color: "var(--color-main)" }}>Confirm & Submit</button>
                    </form>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

function Input({ name, placeholder, formik }: any) {
    return <input name={name} placeholder={placeholder} value={formik.values[name]} onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-full rounded-lg border px-3 py-2.5 text-sm outline-none focus:border-[var(--color-accent)]" style={{ backgroundColor: "color-mix(in srgb, var(--color-secondary) 6%, transparent)", borderColor: "color-mix(in srgb, var(--color-secondary) 15%, transparent)" }} />;
}
function Select({ name, placeholder, options, formik, disabled }: any) {
    return <select name={name} value={formik.values[name]} onChange={formik.handleChange} onBlur={formik.handleBlur} disabled={disabled} className="w-full rounded-lg border px-3 py-2.5 text-sm outline-none focus:border-[var(--color-accent)] disabled:opacity-50" style={{ backgroundColor: "color-mix(in srgb, var(--color-secondary) 6%, transparent)", borderColor: "color-mix(in srgb, var(--color-secondary) 15%, transparent)" }}><option value="">{placeholder}</option>{options.map((opt: string) => (<option key={opt} value={opt}>{opt}</option>))}</select>;
}
function Error({ msg }: { msg: any }) { if (!msg) return null; return <p className="mt-1 text-xs text-red-500">{msg}</p>; }
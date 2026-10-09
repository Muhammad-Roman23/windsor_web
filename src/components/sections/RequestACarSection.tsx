"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion, type Variants } from "framer-motion";
import { ThankYouPopup } from "./ThankYouPopup";

// 55+ Makers List
const allMakers = [
  { name: "Audi" },
  { name: "BMW" },
  { name: "Honda" },
  { name: "Mazda" },
  { name: "Mercedes" },
  { name: "Nissan" },
  { name: "Toyota" },
  { name: "VW" },
  { name: "Volvo" },
  { name: "Abarth" },
  { name: "Suzuki" },
  { name: "Subaru" },
  { name: "Mitsubishi" },
  { name: "Lexus" },
  { name: "Daihatsu" },
  { name: "Isuzu" },
  { name: "Hino" },
  { name: "Dodge" },
  { name: "Jeep" },
  { name: "Ford" },
  { name: "Chevrolet" },
  { name: "Porsche" },
  { name: "Ferrari" },
  { name: "Lamborghini" },
  { name: "Bentley" },
  { name: "Jaguar" },
  { name: "Land Rover" },
  { name: "Peugeot" },
  { name: "Renault" },
  { name: "Citroen" },
  { name: "Fiat" },
  { name: "Alfa Romeo" },
  { name: "Hyundai" },
  { name: "Kia" },
  { name: "Genesis" },
  { name: "Tesla" },
  { name: "BYD" },
  { name: "MG" },
  { name: "Mini" },
  { name: "Skoda" },
  { name: "Seat" },
  { name: "Opel" },
  { name: "Acura" },
  { name: "Infiniti" },
  { name: "Acura" },
  { name: "Datsun" },
  { name: "Scion" },
  { name: "Holden" },
  { name: "Chrysler" },
  { name: "Cadillac" },
  { name: "Buick" },
  { name: "GMC" },
  { name: "Lincoln" },
  { name: "Rover" },
  { name: "Saab" },
];

const budgetOptions = [
  "Under 1M",
  "1M - 2M",
  "2M - 4M",
  "4M - 6M",
  "6M - 8M",
  "6M - 7M",
];

const years = [
  "Any year",
  "2024",
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
];

const countries = [
  "Select Country",
  "UK",
  "Kenya",
  "Tanzania",
  "Zambia",
  "Uganda",
  "Pakistan",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const validationSchema = Yup.object({
  maker: Yup.string().required("Maker select karein"),
  model: Yup.string().required("Model required hai"),
  year: Yup.string().required("Year select karein"),
  country: Yup.string()
    .notOneOf(["Select Country"], "Country select karein")
    .required("Country required"),
  budget: Yup.string().required("Budget select karein"),
  name: Yup.string()
    .required("Name required hai")
    .min(2, "Kam se kam 2 character"),
  phone: Yup.string()
    .required("Phone required hai")
    .min(8, "Valid phone likhein"),
  email: Yup.string()
    .email("Valid email likhein")
    .required("Email required hai"),
  message: Yup.string(),
});

export function RequestACarSection() {
  const [showMore, setShowMore] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Pehle 10 show, More par 55 show with scroll
  const visibleMakers = showMore ? allMakers : allMakers.slice(0, 10);

  return (
    <section className="section">
      <div className="section-inner">
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent"
          >
            Request a Car
          </motion.p>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl leading-tight text-alt sm:text-4xl md:text-[2.75rem]"
          >
            Find Your{" "}
            <span className="text-accent">Dream Car</span>
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-3 text-sm leading-6 text-secondary"
          >
            Tell us what you want. We source it from Japan&apos;s top auctions
            and ship it straight to you.
          </motion.p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-8"
          >
            <Formik
              initialValues={{
                maker: "",
                model: "",
                year: "Any year",
                country: "Select Country",
                budget: "2M - 4M",
                name: "",
                phone: "",
                email: "",
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                console.log("Form Data:", values);
                setShowPopup(true);
                setSubmitting(false);
              }}
            >
              {({ values, setFieldValue }) => (
                <Form className="rounded-3xl border border-secondary/14 bg-secondary/3 p-6 sm:p-8">
                  {/* Step 1: Choose a Maker */}
                  <div>
                    <h3 className="text-sm font-bold text-alt">
                      Step 1: Choose a Maker
                    </h3>

                    {/* Height FIXED - 2 rows only */}
                    <div
                      className="mt-4 grid grid-cols-5 gap-3 overflow-y-auto pr-2 sm:grid-cols-5"
                      style={{
                        height: "148px",
                        scrollbarWidth: "thin",
                      }}
                    >
                      {visibleMakers.map((m) => (
                        <button
                          key={m.name}
                          type="button"
                          onClick={() => setFieldValue("maker", m.name)}
                          className={`flex h-16 shrink-0 items-center justify-center rounded-2xl border p-2 text-alt transition-all ${
                            values.maker === m.name
                              ? "border-accent bg-accent/10 shadow-[0_0_0_2px_var(--color-accent)]"
                              : "border-secondary/12 bg-card"
                          }`}
                        >
                          <span className="text-center text-[11px] font-bold leading-tight">
                            {m.name}
                          </span>
                        </button>
                      ))}
                    </div>

                    <ErrorMessage
                      name="maker"
                      component="p"
                      className="mt-2 text-xs text-red-500"
                    />

                    <button
                      type="button"
                      onClick={() => setShowMore(!showMore)}
                      className="mt-3 text-xs font-medium text-accent underline transition-colors hover:text-accent"
                    >
                      {showMore ? "Less Maker ∧" : "More Maker ∨"}
                    </button>
                  </div>

                  {/* Step 2 */}
                  <div className="mt-8">
                    <h3 className="text-sm font-bold text-alt">
                      Step 2: Model & Year
                    </h3>

                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-secondary">
                          Model / Variant{" "}
                          <span className="text-red-500">*</span>
                        </label>

                        <Field
                          name="model"
                          placeholder="eg. Land cruiser, Golf..."
                          className="w-full rounded-xl border border-secondary/14 bg-card px-4 py-3 text-sm text-alt outline-none focus:border-accent"
                        />

                        <ErrorMessage
                          name="model"
                          component="p"
                          className="mt-1 text-xs text-red-500"
                        />
                      </div>

                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-secondary">
                          Year (approx)
                        </label>

                        <Field
                          as="select"
                          name="year"
                          className="w-full rounded-xl border border-secondary/14 bg-card px-4 py-3 text-sm text-alt outline-none focus:border-accent"
                        >
                          {years.map((y) => (
                            <option key={y} value={y}>
                              {y}
                            </option>
                          ))}
                        </Field>
                      </div>

                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-secondary">
                          Shipping Destination
                        </label>

                        <Field
                          as="select"
                          name="country"
                          className="w-full rounded-xl border border-secondary/14 bg-card px-4 py-3 text-sm text-alt outline-none focus:border-accent"
                        >
                          {countries.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </Field>

                        <ErrorMessage
                          name="country"
                          component="p"
                          className="mt-1 text-xs text-red-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="mt-8">
                    <h3 className="text-sm font-bold text-alt">
                      Step 3: Max Budget
                    </h3>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {budgetOptions.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFieldValue("budget", b)}
                          className={`rounded-full border px-4 py-2 text-xs font-bold transition-colors ${
                            values.budget === b
                              ? "border-accent bg-accent text-white"
                              : "border-secondary/14 bg-card text-alt"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="mt-8">
                    <h3 className="text-sm font-bold text-alt">
                      Step 4: Your Details
                    </h3>

                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-secondary">
                          Your Name{" "}
                          <span className="text-red-500">*</span>
                        </label>

                        <Field
                          name="name"
                          placeholder="Full Name"
                          className="w-full rounded-xl border border-secondary/14 bg-card px-4 py-3 text-sm text-alt outline-none focus:border-accent"
                        />

                        <ErrorMessage
                          name="name"
                          component="p"
                          className="mt-1 text-xs text-red-500"
                        />
                      </div>

                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-secondary">
                          Phone
                        </label>

                        <Field
                          name="phone"
                          placeholder="+44 xxxx xxxxxx"
                          className="w-full rounded-xl border border-secondary/14 bg-card px-4 py-3 text-sm text-alt outline-none focus:border-accent"
                        />

                        <ErrorMessage
                          name="phone"
                          component="p"
                          className="mt-1 text-xs text-red-500"
                        />
                      </div>

                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-secondary">
                          Email <span className="text-red-500">*</span>
                        </label>

                        <Field
                          name="email"
                          placeholder="abc@gmail.com"
                          className="w-full rounded-xl border border-secondary/14 bg-card px-4 py-3 text-sm text-alt outline-none focus:border-accent"
                        />

                        <ErrorMessage
                          name="email"
                          component="p"
                          className="mt-1 text-xs text-red-500"
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="mb-1.5 block text-xs font-medium text-secondary">
                        Additional Message / Requirements
                      </label>

                      <Field
                        as="textarea"
                        name="message"
                        rows={3}
                        placeholder="Your message..."
                        className="w-full rounded-xl border border-secondary/14 bg-card px-4 py-3 text-sm text-alt outline-none focus:border-accent"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-accent py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90 cursor-pointer"
                  >
                    ✈ Send Request to Windsor Autos
                  </button>
                </Form>
              )}
            </Formik>
          </motion.div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-3xl border border-secondary/14 bg-secondary/3 p-6">
                <h3 className="text-center text-sm font-bold text-alt">
                  Windsor By Numbers
                </h3>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-secondary/10 bg-card p-4 text-center">
                    <p className="text-lg font-extrabold text-accent">
                      500+
                    </p>
                    <p className="text-[11px] text-secondary">
                      Active Customer
                    </p>
                  </div>

                  <div className="rounded-2xl border border-secondary/10 bg-card p-4 text-center">
                    <p className="text-lg font-extrabold text-accent">
                      2014
                    </p>
                    <p className="text-[11px] text-secondary">Est. Since</p>
                  </div>

                  <div className="rounded-2xl border border-secondary/10 bg-card p-4 text-center">
                    <p className="text-lg font-extrabold text-accent">
                      4.8★
                    </p>
                    <p className="text-[11px] text-secondary">
                      Trustpilot Score
                    </p>
                  </div>

                  <div className="rounded-2xl border border-secondary/10 bg-card p-4 text-center">
                    <p className="text-lg font-extrabold text-accent">
                      05
                    </p>
                    <p className="text-[11px] text-secondary">
                      Countries Served
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-secondary/14 bg-secondary/3 p-6 text-center">
                <h3 className="text-sm font-bold text-alt">Need Help?</h3>

                <p className="mt-3 text-sm font-medium text-alt">
                  +357 23 010084
                </p>

                <p className="text-sm font-medium text-alt">
                  +353 86 834 5604
                </p>

                <p className="mt-2 text-xs text-secondary">
                  info@WindsorAutos.com
                </p>
              </div>

              <div className="roundefvd-3xl border border-secondary/14 bg-secondary/3 p-6">
                <h3 className="text-center text-sm font-bold text-alt">
                  Japanese Auctions
                </h3>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  {["USS", "CAA", "HAA", "TAA"].map((a) => (
                    <div
                      key={a}
                      className="rounded-xl border border-secondary/10 bg-card py-3 text-center text-sm font-extrabold tracking-widest text-alt"
                    >
                      {a}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <ThankYouPopup
          isOpen={showPopup}
          onClose={() => setShowPopup(false)}
          title="Request Sent!"
          message="Thanks for contacting Windsor Autos. Hum jald hi aapse contact karenge."
        />
      </div>
    </section>
  );
}
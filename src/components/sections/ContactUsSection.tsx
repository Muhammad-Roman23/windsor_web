"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Mail, Phone, MapPin, Car } from "lucide-react";
import { ThankYouPopup } from "./ThankYouPopup";


// ---------------------------------------------------------------------------
// Validation - Formik + Yup
// ---------------------------------------------------------------------------
const ContactSchema = Yup.object().shape({
  name: Yup.string().min(2, "Name kam se kam 2 characters").required("Name required hai"),
  email: Yup.string().email("Valid email dalo").required("Email required hai"),
  phone: Yup.string()
    .matches(/^[0-9+\-\s()]+$/, "Valid phone number dalo")
    .min(10, "Phone kam se kam 10 digits")
    .required("Phone required hai"),
  message: Yup.string().min(10, "Message kam se kam 10 characters").required("Message required hai"),
});

// ---------------------------------------------------------------------------
// Motion - tumhara same flow
// ---------------------------------------------------------------------------
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function ContactUsSection() {
  const [showPopup, setShowPopup] = useState(false); // <-- 1. state

  return (
    <section id="contact-us" className="section">
      <div className="section-inner">
        
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-accent"
          >
            Contact Us
          </motion.p>
          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-[2.75rem] text-alt"
          >
            Get Your Dream Car from <span style={{ color: "var(--color-accent)" }}>Japan</span>
          </motion.h2>
          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            className="mt-3 text-sm leading-relaxed text-secondary sm:text-base"
          >
            Windsor Autos se contact karo, ham aapko best Japanese stock car dhoondhne me help karenge.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-5">
          
          {/* Left Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="lg:col-span-2 rounded-3xl border p-7 lg:p-8"
            style={{
              borderColor: "color-mix(in srgb, var(--color-secondary) 14%, transparent)",
              backgroundColor: "color-mix(in srgb, var(--color-secondary) 3%, transparent)",
            }}
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-2xl"
              style={{ backgroundColor: "color-mix(in srgb, var(--color-accent) 14%, transparent)" }}
            >
              <Car className="h-6 w-6 text-accent" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-alt">Windsor Autos Japan</h3>
            <p className="mt-2 text-sm leading-relaxed text-secondary">
              Japanese used cars direct import. Auction access, documentation aur export support sab kuch.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-sm text-secondary">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border" style={{ borderColor: "color-mix(in srgb, var(--color-secondary) 14%, transparent)" }}><Phone className="h-4 w-4 text-accent" /></span>
                +81-90-1234-5678
              </div>
              <div className="flex items-center gap-3 text-sm text-secondary">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border" style={{ borderColor: "color-mix(in srgb, var(--color-secondary) 14%, transparent)" }}><Mail className="h-4 w-4 text-accent" /></span>
                info@windsorautos.jp
              </div>
              <div className="flex items-center gap-3 text-sm text-secondary">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border" style={{ borderColor: "color-mix(in srgb, var(--color-secondary) 14%, transparent)" }}><MapPin className="h-4 w-4 text-accent" /></span>
                Tokyo, Japan - Worldwide Export
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="lg:col-span-3 rounded-3xl border p-7 lg:p-8"
            style={{
              borderColor: "color-mix(in srgb, var(--color-secondary) 14%, transparent)",
              backgroundColor: "color-mix(in srgb, var(--color-main) 100%, transparent)",
            }}
          >
            <Formik
              initialValues={{ name: "", email: "", phone: "", message: "" }}
              validationSchema={ContactSchema}
              onSubmit={(values, { resetForm, setSubmitting }) => {
                console.log("Contact Form Details:", values);
                setShowPopup(true); // <-- 2. popup show
                resetForm();
                setSubmitting(false);
              }}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form className="space-y-5">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-alt">Name</label>
                    <Field
                      name="name"
                      placeholder="Apka naam"
                      className="w-full rounded-xl border bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-secondary/60 focus:border-[var(--color-accent)]"
                      style={{ borderColor: errors.name && touched.name ? "var(--color-accent)" : "color-mix(in srgb, var(--color-secondary) 16%, transparent)", color: "var(--color-alt)" }}
                    />
                 <ErrorMessage
  name="name"
  component="p"
  className="mt-1 text-xs text-[var(--color-accent)]"
/>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-alt">Email</label>
                    <Field
                      name="email"
                      type="email"
                      placeholder="example@gmail.com"
                      className="w-full rounded-xl border bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-secondary/60 focus:border-[var(--color-accent)]"
                      style={{ borderColor: errors.email && touched.email ? "var(--color-accent)" : "color-mix(in srgb, var(--color-secondary) 16%, transparent)", color: "var(--color-alt)" }}
                    />
                    <ErrorMessage name="email" component="p" className="mt-1 text-xs text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-alt">Phone</label>
                    <Field
                      name="phone"
                      placeholder="+92 300 1234567"
                      className="w-full rounded-xl border bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-secondary/60 focus:border-[var(--color-accent)]"
                      style={{ borderColor: errors.phone && touched.phone ? "var(--color-accent)" : "color-mix(in srgb, var(--color-secondary) 16%, transparent)", color: "var(--color-alt)" }}
                    />
                    <ErrorMessage name="phone" component="p" className="mt-1 text-xs text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-alt">Message</label>
                    <Field
                      as="textarea"
                      name="message"
                      rows={4}
                      placeholder="Kaunsi car chahiye? Toyota, Nissan etc..."
                      className="w-full resize-none rounded-xl border bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-secondary/60 focus:border-[var(--color-accent)]"
                      style={{ borderColor: errors.message && touched.message ? "var(--color-accent)" : "color-mix(in srgb, var(--color-secondary) 16%, transparent)", color: "var(--color-alt)" }}
                    />
                    <ErrorMessage name="message" component="p" className="mt-1 text-xs text-[var(--color-accent)]" />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </Form>
              )}
            </Formik>
          </motion.div>
        </div>
      </div>

      {/* 3. Popup - Section ke end me, reusable same popup */}
      <ThankYouPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        title="Thank You!"
        message="Your message has been sent successfully. Windsor Autos team jald hi aapse contact karegi."
      />
    </section>
  );
}
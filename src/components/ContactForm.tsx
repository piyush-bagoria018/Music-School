"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  // Step 1: Define validation rules using Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  return (
    <>
       {/* Custom Toast Notifications */}
       <Toaster
        position="top-right"
        toastOptions={{
          duration: 5000, // ✅ Show toast for 5 seconds
          style: {
            background: "#1e293b", // ✅ Custom background (dark gray)
            color: "#ffffff", // ✅ White text
            padding: "12px",
            borderRadius: "8px",
            fontSize: "16px",
          },
          success: {
            icon: "✅", // ✅ Custom success icon
          },
          error: {
            icon: "❌", // ✅ Custom error icon
          },
        }}
      />

      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          toast.success("🎉 Message sent successfully!", {
            icon: "📩", // ✅ Custom icon
            style: {
              background: "#22c55e", // ✅ Green background
              color: "white",
              zIndex: 1000,
            },
          });
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4 mt-4">
            {/* Name Field */}
            <div className="mb-4">
              <Field
                type="text"
                name="name"
                placeholder="Your Name"
                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
              />
              <ErrorMessage
                name="name"
                component="p"
                className="text-red-500"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <Field
                type="email"
                name="email"
                placeholder="Your email address"
                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500"
              />
            </div>

            {/* Message Field */}
            <div>
              <Field
                as="textarea"
                name="message"
                placeholder="Your message"
                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                rows={5}
              />
              <ErrorMessage
                name="message"
                component="p"
                className="text-red-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="justify-center text-center items-center px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              disabled={isSubmitting}
            >
              Send Message
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;

"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
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

  const handleSubmit = async (values: { name: string; email: string; message: string }, { resetForm }: any) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast.success("🎉 Message sent successfully!");
        resetForm();
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An unexpected error occurred.");
    }
  };

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: "#1e293b",
            color: "#ffffff",
            padding: "12px",
            borderRadius: "8px",
            fontSize: "16px",
          },
        }}
      />

      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4 mt-4">
            <div className="mb-4">
              <Field
                type="text"
                name="name"
                placeholder="Your Name"
                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
              />
              <ErrorMessage name="name" component="p" className="text-red-500" />
            </div>

            <div className="mb-4">
              <Field
                type="email"
                name="email"
                placeholder="Your email address"
                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
              />
              <ErrorMessage name="email" component="p" className="text-red-500" />
            </div>

            <div>
              <Field
                as="textarea"
                name="message"
                placeholder="Your message"
                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                rows={5}
              />
              <ErrorMessage name="message" component="p" className="text-red-500" />
            </div>

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

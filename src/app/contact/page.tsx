"use client";

import ContactForm from "@/components/ContactForm";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
      {/* Background Animation */}
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full" />

      <div className="max-w-2xl mx-auto p-4 relative z-10 text-center">
        {/* Page Title */}
        <h1 className="text-lg md:text-7xl font-sans font-bold mb-8 text-white">
          Contact Us
        </h1>

        {/* Description */}
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm">
          We&apos;re here to help with any questions about our courses, programs,
          or events. Reach out and let us know how we can assist you in your
          musical journey.
        </p>

        {/* Contact Form (Using Formik & Yup) */}
        <ContactForm />
      </div>
    </div>
  );
}



// "use client";

// import React, { FormEvent, useState } from "react";
// import { BackgroundBeams } from "@/components/ui/background-beams";

// function MusicSchoolContactUs() {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log("Submitted:", { email, message });
//     setEmail("");
//     setMessage("");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
      
//       <BackgroundBeams className="absolute top-0 left-0 w-full h-full " />
    
//       <div className="max-w-2xl mx-auto p-4 relative z-10 justify-center text-center">
        
//         <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
//           Contact Us
//         </h1>
//         <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
//           We&apos;re here to help with any questions about our courses,
//           programs, or events. Reach out and let us know how we can assist you
//           in your musical journey.
//         </p>
//         <form onSubmit={handleSubmit} className="space-y-4 mt-4">
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Your email address"
//             className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
//             required
//           />

//           <textarea
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             placeholder="Your message"
//             className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
//             rows={5}
//             required
//           ></textarea>

//           <button
//             type="submit"
//             className="justify-center text-center items-center px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default MusicSchoolContactUs;

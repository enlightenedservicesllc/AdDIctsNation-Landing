import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import ContactImg from "../../assets/contact/ContactFormImg.webp";
import { Button } from "@components/ui/button";
import { contactSchema } from "@/lib/interfaces/contact.interface";
import { useMutation } from "@tanstack/react-query";
import { createContact } from "@/lib/services/contact.service";
import { toast } from "react-toastify";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.8, ease: "easeOut" },
  },
};

const formFields = [
  { label: "Full Name", name: "fullName" },
  { label: "Email Address", name: "email" },
  { label: "Phone Number", name: "phone" },
  { label: "Message", name: "message" },
];

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: createContact,
    onSuccess() {
      reset();
      toast.success("Form Submitted Successfully");
    },
    onError(error) {
      toast.error(error?.message || "Something went wrong.");
    },
  });

  const onSubmit = (data) => {
    mutate({
      email: data.email,
      phone: data.phone,
      fullName: data.fullName,
      message: data.message,
    });
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center p-6 gap-5 lg:gap-20 ">
      {/* Form Box */}
      <motion.form
        className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg"
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        onSubmit={handleSubmit(onSubmit)}
      >
        {formFields.map(({ label, name }, index) => (
          <motion.div
            key={index}
            className="mb-4"
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <label className="block font-medium text-gray-700">{label}</label>
            {label === "Message" ? (
              <textarea
                id={name}
                placeholder="Tell something ..."
                {...register(name)}
                aria-invalid={errors[name] ? "true" : "false"}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 h-24"
              ></textarea>
            ) : (
              <input
                id={name}
                type={
                  label === "Email Address"
                    ? "email"
                    : name === "phone"
                    ? "tel"
                    : "text"
                }
                placeholder={label}
                {...register(name)}
                aria-invalid={errors[name] ? "true" : "false"}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            )}

            {errors[name] && (
              <p className="text-red-500 text-sm">{errors[name].message}</p>
            )}
          </motion.div>
        ))}

        <Button
          className="md:px-8  py-2 rounded-full transition duration-300 w-full lg:w-auto"
          type="submit"
          disabled={isPending}
        >
          Send
        </Button>
      </motion.form>
      {/* Image Section (Mobile Below Form) */}
      <motion.div
        className="w-full max-w-xs sm:max-w-md md:max-w-lg mt-8 lg:mt-0 lg:ml-8 flex justify-center"
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <img
          src={ContactImg}
          alt="Faces"
          className="rounded-lg w-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default ContactForm;

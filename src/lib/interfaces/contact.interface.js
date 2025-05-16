import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string({ message: "Full name is required" }).min(2, {
    message: "Full name must be at least 2 characters",
  }),
  email: z
    .string({ message: "Email is required" })
    .email("Invalid email address"),
  phone: z.string({ message: "Phone is required" }),
  message: z.string({ message: "Message is required" }).min(2, {
    message: "Message must be at least 2 characters long",
  }),
});

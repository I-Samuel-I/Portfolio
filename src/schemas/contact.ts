import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters long").max(80, "Name must be at most 80 characters long"),
  email: z.string().trim().email("Please enter a valid email address").max(254, "Email must be at most 254 characters long"),
  subject: z.enum(["project", "freelance", "collaboration", "question"]),
  message: z.string().trim().min(10, "Message must be at least 10 characters long").max(2000, "Message must be at most 2000 characters long"),
  website: z.string().optional(), //honeypot
});

import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(254),
  subject: z.enum(["projeto", "freelance", "colaboracao", "duvida"]),
  message: z.string().trim().min(10).max(2000),
  website: z.string().optional(), //honeypot
});

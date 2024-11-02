import { z } from "zod";
import { FooterSchema } from "@/schemas/FooterSchema";

export type Footer = z.infer<typeof FooterSchema>;

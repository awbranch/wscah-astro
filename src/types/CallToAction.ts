import { z } from "zod";
import { CallToActionSchema } from "@/schemas/CallToActionSchema";

export type CallToAction = z.infer<typeof CallToActionSchema>;

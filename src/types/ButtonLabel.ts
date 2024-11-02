import { z } from "zod";
import { ButtonLabelSchema } from "@/schemas/ButtonLabelSchema";

export type ButtonLabel = z.infer<typeof ButtonLabelSchema>;


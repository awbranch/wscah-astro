import { z } from "zod";
import { ButtonRowSchema } from "@/schemas/ButtonRowSchema";

export type ButtonRow = z.infer<typeof ButtonRowSchema>;

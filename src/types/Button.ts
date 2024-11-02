import { z } from "zod";
import { ButtonIconSchema } from "@/schemas/ButtonSchema";
import { ButtonVariantSchema } from "@/schemas/ButtonSchema";
import { ButtonSchema } from "@/schemas/ButtonSchema";

export type ButtonVariant = z.infer<typeof ButtonVariantSchema>;
export type ButtonIcon = z.infer<typeof ButtonIconSchema>;
export type Button = z.infer<typeof ButtonSchema>;

import { z } from "zod";

export const ButtonIconSchema = z.enum([
  "none",
  "down",
  "right",
  "left",
  "search",
]);

export const ButtonVariantSchema = z.enum([
  "orange-solid",
  "blue-solid",
  "white-solid",
  "orange-outline",
  "blue-outline",
  "white-outline",
  "orange-text",
  "blue-text",
  "white-text",
]);

export const ButtonSchema = z.object({
  _type: z.literal("button"),
  _key: z.string(),
  variant: ButtonVariantSchema,
  icon: ButtonIconSchema,
  label: z.string(),
  href: z.string(),
});

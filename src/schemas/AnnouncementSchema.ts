import { z } from "zod";
import { ComponentContextSchema } from "@/schemas/ContextSchema";
import { PortableTextBlockArraySchema } from "@/schemas/PortableTextBlockArraySchema";
import { ButtonSchema } from "@/schemas/ButtonSchema";

export const AnnouncementStyleSchema = z.enum([
  "orange",
  "orange-solid",
  "green",
  "green-solid",
  "blue",
  "blue-solid",
]);

export const AnnouncementSchema = z.object({
  _type: z.literal("announcement"),
  _key: z.string(),
  context: ComponentContextSchema,
  style: AnnouncementStyleSchema,
  eyebrow: z.string().optional(),
  text: PortableTextBlockArraySchema.optional(),
  buttons: z.array(ButtonSchema).optional(),
});

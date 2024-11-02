import { z } from "zod";
import { ComponentContextSchema } from "@/schemas/ContextSchema";
import { PortableTextBlockArraySchema } from "@/schemas/PortableTextBlockArraySchema";
import { AlignmentSchema } from "@/schemas/AlignmentSchema";

export const TitleWidthSchema = z.enum(["xs", "sm", "md", "lg"]);

export const TitleSchema = z.object({
  _type: z.literal("title"),
  _key: z.string(),
  context: ComponentContextSchema,
  eyebrow: z.string().optional(),
  text: PortableTextBlockArraySchema.optional(),
  alignment: AlignmentSchema,
  maxWidth: TitleWidthSchema,
});

import { z } from "zod";
import { ButtonVariantSchema } from "@/schemas/ButtonSchema";
import { FileSchema } from "@/schemas/FileSchema";

export const FileButtonSchema = z.object({
  _type: z.literal("fileButton"),
  _key: z.string(),
  variant: ButtonVariantSchema,
  label: z.string(),
  file: FileSchema,
});


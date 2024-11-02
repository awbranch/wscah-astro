import { z } from "zod";
import { FileSchema } from "@/schemas/FileSchema";

export const ReportSchema = z.object({
  _type: z.literal("report"),
  _key: z.string(),
  name: z.string(),
  description: z.string(),
  file: FileSchema,
});

import { z } from "zod";
import { ReferenceSchema } from "@/schemas/ReferenceSchema";

export const FileSchema = z.object({
  _type: z.literal("file"),
  asset: ReferenceSchema,
});

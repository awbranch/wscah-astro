import { z } from "zod";
import { DataPointSchema } from "@/schemas/DataPointSchema";
import { ClickAreaSchema } from "@/schemas/ClickAreaSchema";
import { ButtonSchema } from "@/schemas/ButtonSchema";

export const DataUnitSchema = z.enum(["%", "N", "K", "M", "B"]);

export const DataCardSchema = z.object({
  _type: z.literal("dataCard"),
  _key: z.string(),
  title: z.string().optional(),
  text: z.string().optional(),
  units: DataUnitSchema,
  data: z.array(DataPointSchema),
  clickArea: ClickAreaSchema,
  button: ButtonSchema.omit({ _key: true }).optional(),
  href: z.string().optional(),
});

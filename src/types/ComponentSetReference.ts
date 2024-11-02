import { z } from "zod";
import { ComponentSetReferenceSchema } from "@/schemas/ComponentSetReferenceSchema";

export type ComponentSetReference = z.infer<
  typeof ComponentSetReferenceSchema
>;

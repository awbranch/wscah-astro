import { z } from "zod";
import { AddressSchema } from "@/schemas/AddressSchema";

export type Address = z.infer<typeof AddressSchema>;
  
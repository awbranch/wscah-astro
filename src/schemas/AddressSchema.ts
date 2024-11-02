import { z } from "zod";

export const AddressSchema = z.object({
  _type: z.literal("address"),
  _key: z.string(),
  street: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
});

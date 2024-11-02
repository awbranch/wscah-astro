import { z } from "zod";
import { NewsletterSchema } from "@/schemas/NewsletterSchema";
import { AddressSchema } from "@/schemas/AddressSchema";
import { SocialSchema } from "@/schemas/SocialSchema";
import { LinkSchema } from "@/schemas/LinkSchema";

export const FooterSchema = z.object({
  _type: z.literal("footer"),
  _id: z.string(),
  newsletter: NewsletterSchema.optional(),
  mission: z.string().optional(),
  organization: z.string(),
  addresses: z.array(AddressSchema).optional(),
  phone: z.string().optional(),
  fax: z.string().optional(),
  social: z.array(SocialSchema).optional(),
  siteMap: z.array(LinkSchema).optional(),
  legal: z.string().optional(),
});

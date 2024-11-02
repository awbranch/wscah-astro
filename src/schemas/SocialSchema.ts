import { z } from "zod";

export const SocialMediaServiceSchema = z.enum([
  "facebook",
  "instagram",
  "youtube",
  "x",
  "linkedin",
]);

export const SocialSchema = z.object({
  service: SocialMediaServiceSchema,
  url: z.string(),
});

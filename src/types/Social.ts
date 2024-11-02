import { z } from "zod";
import { SocialSchema, SocialMediaServiceSchema } from "@/schemas/SocialSchema";

export type SocialMediaService = z.infer<typeof SocialMediaServiceSchema>;
export type Social = z.infer<typeof SocialSchema>;

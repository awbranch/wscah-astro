import { z } from "zod";
import { ImageSchema } from "@/schemas/ImageSchema";

export const TeamMemberSchema = z.object({
  _type: z.literal("teamMember"),
  _key: z.string(),
  name: z.string(),
  role: z.string().optional(),
  email: z.string().optional(),
  image: ImageSchema.optional(),
  bio: z.string().optional(),
});

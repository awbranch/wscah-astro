import { z } from "zod";
import { TeamMemberSchema } from "@/schemas/TeamMemberSchema";

export const TeamSchema = z.object({
  _type: z.literal("team"),
  _id: z.string(),
  name: z.string(),
  members: z.array(TeamMemberSchema).optional(),
});
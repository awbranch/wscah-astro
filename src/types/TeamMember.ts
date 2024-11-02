import { z } from "zod";
import { TeamMemberSchema } from "@/schemas/TeamMemberSchema";

export type TeamMember = z.infer<typeof TeamMemberSchema>;

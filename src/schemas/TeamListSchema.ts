import { z } from "zod";
import { ComponentContextSchema } from "@/schemas/ContextSchema";
import { ReferenceSchema } from "@/schemas/ReferenceSchema";

export const TeamListStyleSchema = z.enum([
  "nameList",
  "multiColNameList",
  "imageGrid",
  "imageGridPopup",
]);

export const TeamListSchema = z.object({
  _type: z.literal("teamList"),
  _key: z.string(),
  context: ComponentContextSchema,
  style: TeamListStyleSchema,
  team: ReferenceSchema.optional(),
});

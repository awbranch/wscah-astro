import { z } from "zod";

import { ComponentContextSchema } from "@/schemas/ContextSchema";
import { ButtonSchema } from "@/schemas/ButtonSchema";
import { IconButtonSchema } from "@/schemas/IconButtonSchema";
import { FileButtonSchema } from "@/schemas/FileButtonSchema";
import { ButtonLabelSchema } from "@/schemas/ButtonLabelSchema";
import { AlignmentSchema } from "@/schemas/AlignmentSchema";

export const ButtonRowSchema = z.object({
  _type: z.literal("buttonRow"),
  _key: z.string(),
  context: ComponentContextSchema,
  alignment: AlignmentSchema,
  buttons: z.array(
    z.union([
      ButtonSchema,
      IconButtonSchema,
      ButtonLabelSchema,
      FileButtonSchema,
    ]),
  ),
});

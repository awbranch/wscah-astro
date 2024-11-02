import { z } from "zod";

export const AlignmentSchema = z.enum(["left", "center", "right"]);

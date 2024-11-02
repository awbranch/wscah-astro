import { z } from "zod";
import { BlockSchema } from "@/schemas/BlockSchema";

export type Block = z.infer<typeof BlockSchema>;

import { z } from "zod";
import { FileButtonSchema } from "@/schemas/FileButtonSchema";

export type FileButton = z.infer<typeof FileButtonSchema>;


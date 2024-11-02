import { z } from "zod";
import { SettingsSchema } from "@/schemas/SettingsSchema";

export type Settings = z.infer<typeof SettingsSchema>;

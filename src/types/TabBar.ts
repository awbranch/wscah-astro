import { z } from "zod";
import { TabBarSchema } from "@/schemas/TabBarSchema";

export type TabBar = z.infer<typeof TabBarSchema>;

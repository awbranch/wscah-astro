import { z } from "zod";
import { TabBarItemSchema } from "@/schemas/TabBarItemSchema";

export type TabBarItem = z.infer<typeof TabBarItemSchema>;

import { z } from "zod";

import { TitleCardSchema } from "@/schemas/TitleCardSchema";
import { ImageCardSchema } from "@/schemas/ImageCardSchema";
import { IconCardSchema } from "@/schemas/IconCardSchema";
import { ImpactCardSchema } from "@/schemas/ImpactCardSchema";
import { DataCardSchema } from "@/schemas/DataCardSchema";
import { EventCardSchema } from "@/schemas/EventCardSchema";

export const MediaCardSchema = z.union([
  TitleCardSchema,
  ImageCardSchema,
  IconCardSchema,
  ImpactCardSchema,
  DataCardSchema,
  EventCardSchema,
]);

import { z } from "zod";

import { AnnouncementSchema } from "@/schemas/AnnouncementSchema";
import { ArticleSchema } from "@/schemas/ArticleSchema";
import { ButtonRowSchema } from "@/schemas/ButtonRowSchema";
import { CallToActionSchema } from "@/schemas/CallToActionSchema";
import { ContactFormSchema } from "@/schemas/ContactFormSchema";
import { DocumentListSchema } from "@/schemas/DocumentListSchema";
import { EmbeddedHtmlSchema } from "@/schemas/EmbeddedHtmlSchema";
import { GridSchema } from "@/schemas/GridSchema";
import { HeroSchema } from "@/schemas/HeroSchema";
import { IconListSchema } from "@/schemas/IconListSchema";
import { ImageGridSchema } from "@/schemas/ImageGridSchema";
import { LatestNewsSchema } from "@/schemas/LatestNewsSchema";
import { LogoGridSchema } from "@/schemas/LogoGridSchema";
import { MediaCardSetSchema } from "@/schemas/MediaCardSetSchema";
import { MessageDraftSchema } from "@/schemas/MessageDraftSchema";
import { PhraseLoopSchema } from "@/schemas/PhraseLoopSchema";
import { TeamListSchema } from "@/schemas/TeamListSchema";
import { TimelineSchema } from "@/schemas/TimelineSchema";
import { TitleSchema } from "@/schemas/TitleSchema";

const ComponentSetComponentSchema = z.union([
  AnnouncementSchema,
  ArticleSchema,
  ButtonRowSchema,
  CallToActionSchema,
  ContactFormSchema,
  DocumentListSchema,
  EmbeddedHtmlSchema,
  GridSchema,
  HeroSchema,
  IconListSchema,
  ImageGridSchema,
  LatestNewsSchema,
  LogoGridSchema,
  MediaCardSetSchema,
  MessageDraftSchema,
  PhraseLoopSchema,
  TeamListSchema,
  TimelineSchema,
  TitleSchema,
]);

export const ComponentSetSchema = z.object({
  _id: z.string(),
  _type: z.literal('ComponentSet'),
  name: z.string(),
  components: z.array(ComponentSetComponentSchema),
});
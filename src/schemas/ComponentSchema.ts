import { z } from "zod";

import { AnnouncementSchema } from "@/schemas/AnnouncementSchema";
import { ArticleSchema } from "@/schemas/ArticleSchema";
import { ButtonRowSchema } from "@/schemas/ButtonRowSchema";
import { CallToActionSchema } from "@/schemas/CallToActionSchema";
import { ComponentSetReferenceSchema } from "@/schemas/ComponentSetReferenceSchema";
import { ContactFormSchema } from "@/schemas/ContactFormSchema";
import { DocumentListSchema } from "@/schemas/DocumentListSchema";
import { EmbeddedHtmlSchema } from "@/schemas/EmbeddedHtmlSchema";
import { EventListSchema } from "@/schemas/EventListSchema";
import { GridSchema } from "@/schemas/GridSchema";
import { HeroSchema } from "@/schemas/HeroSchema";
import { IconListSchema } from "@/schemas/IconListSchema";
import { ImageGridSchema } from "@/schemas/ImageGridSchema";
import { LatestNewsSchema } from "@/schemas/LatestNewsSchema";
import { LogoGridSchema } from "@/schemas/LogoGridSchema";
import { MediaCardSetSchema } from "@/schemas/MediaCardSetSchema";
import { MessageDraftSchema } from "@/schemas/MessageDraftSchema";
import { NewsListSchema } from "@/schemas/NewsListSchema";
import { PageHeaderSchema } from "@/schemas/PageHeaderSchema";
import { PhraseLoopSchema } from "@/schemas/PhraseLoopSchema";
import { PressListSchema } from "@/schemas/PressListSchema";
import { ResearchListSchema } from "@/schemas/ResearchListSchema";
import { TabBarSchema } from "@/schemas/TabBarSchema";
import { TeamListSchema } from "@/schemas/TeamListSchema";
import { TimelineSchema } from "@/schemas/TimelineSchema";
import { TitleSchema } from "@/schemas/TitleSchema";

export const ComponentSchema = z.union([
  AnnouncementSchema,
  ArticleSchema,
  ButtonRowSchema,
  CallToActionSchema,
  ComponentSetReferenceSchema,
  ContactFormSchema,
  DocumentListSchema,
  EmbeddedHtmlSchema,
  EventListSchema,
  GridSchema,
  HeroSchema,
  IconListSchema,
  ImageGridSchema,
  LatestNewsSchema,
  LogoGridSchema,
  MediaCardSetSchema,
  MessageDraftSchema,
  NewsListSchema,
  PageHeaderSchema,
  PhraseLoopSchema,
  PressListSchema,
  ResearchListSchema,
  TabBarSchema,
  TeamListSchema,
  TimelineSchema,
  TitleSchema,
]);

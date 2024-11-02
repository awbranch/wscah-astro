import type { PortableTextBlock, PortableTextChild } from "sanity";
import type { Page } from "@/types/Page";
import type { Component } from "@/types/Component";
import type { Block } from "@/types/Block";
import type { PageContext } from "@/types/Context";

export function splitText(text: string) {
  return text
    .split(/\n+/)
    .filter((t) => t.length > 0)
    .map((t) => t.trim());
}

export function isFullyQualifiedURL(url?: string) {
  if (!url) return false;
  const pattern = /^(https?:\/\/).*$/i;
  return pattern.test(url);
}

export async function sleep(ms: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function errorToString(error: any): string {
  if (error instanceof Error) {
    return error.message;
  } else if (typeof error === "string") {
    return error;
  } else {
    return "Unknown error";
  }
}

export function trim(
  strings: TemplateStringsArray,
  ...values: string[]
): string {
  let result = "";
  strings.forEach((str, i) => {
    result += str + (values[i] || "");
  });

  return result
    .split("\n")
    .map((s) => s.trim())
    .join("\n");
}

export function blocksToText(blocks: PortableTextBlock[]) {
  return (
    blocks
      // loop through each block
      .map((block) => {
        // if it's not a text block with children,
        // return nothing
        if (block._type !== "block" || !block.children) {
          return "";
        }
        // loop through the children spans, and join the
        // text strings
        return (block.children as PortableTextChild[])
          .map((child) => child.text)
          .join("");
      })
      // join the paragraphs leaving split by two linebreaks
      .join("\n\n")
  );
}

export function findPageComponents(
  page: Page,
  predicate: (component: Component) => boolean
) {
  return findComponents(page.blocks, predicate);
}

export function findComponents(
  blocks: Block[] | undefined,
  predicate: (c: Component) => boolean
) {
  const components: Component[] = [];
  if (blocks && Array.isArray(blocks)) {
    blocks.forEach((b) => {
      if (b.components) {
        if (Array.isArray(b.components)) {
          b.components.forEach((c) => {
            if (predicate(c)) {
              components.push(c);
            }
          });
        }
      }
    });
  }
  return components;
}

export function findDeepPageComponent(
  page: Page,
  predicate: (component: Component) => boolean
) {
  if (Array.isArray(page.blocks)) {
    for (let block of page.blocks) {
      if (Array.isArray(block.components)) {
        for (let component of block.components) {
          if (predicate(component)) {
            return component;
          }
          if (component._type === "tabBar") {
            let tabBar = component;
            if (Array.isArray(tabBar.tabs))
              for (let t of tabBar.tabs) {
                if (Array.isArray(t.components)) {
                  for (let c of t.components) {
                    if (predicate(c)) {
                      return c;
                    }
                  }
                }
              }
          }
          if (component._type === "grid") {
            let grid = component;
            if (Array.isArray(grid.cells)) {
              for (let c of grid.cells) {
                if (Array.isArray(c.components)) {
                  for (let cc of c.components) {
                    if (predicate(cc)) {
                      return cc;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  return null;
}

export function addContextToBlocks(blocks: Block[], pageContext: PageContext) {
  if (Array.isArray(blocks)) {
    blocks.forEach((b, bi) => {
      if (Array.isArray(b.components)) {
        b.components.forEach((c) => {
          const context = {
            page: pageContext,
            block: {
              id: b.id,
              palette: b.palette,
              index: bi,
              count: blocks.length,
              maxWidth: b.maxWidth,
            },
          };
          c.context = context;
          forEachDeepChildComponent(c, (cc) => {
            cc.context = context;
          });
        });
      }
    });
  }
}

export function forEachDeepChildComponent(
  comp: Component,
  callback: (c: Component) => void
) {
  if (comp._type === "tabBar") {
    if (Array.isArray(comp.tabs)) {
      comp.tabs.forEach((t) => {
        if (Array.isArray(t.components)) {
          t.components.forEach(callback);
        }
      });
    }
  } else if (comp._type === "grid") {
    if (Array.isArray(comp.cells)) {
      comp.cells.forEach((cell) => {
        if (Array.isArray(cell.components)) {
          cell.components.forEach(callback);
        }
      });
    }
  }
}

export function buildHref(routePrefix: string, href: string) {
  if (isFullyQualifiedURL(href)) {
    return href;
  } else {
    if (href.startsWith("#")) {
      return href;
    } else {
      return routePrefix + href;
    }
  }
}

export function processPortableText(
  text: PortableTextBlock[],
  callback: (text: string) => string
): PortableTextBlock[] {
  return text.map((block) => ({
    ...block,
    children: Array.isArray(block.children)
      ? block.children.map((child) => ({
          ...child,
          text:
            typeof child.text === "string" ? callback(child.text) : child.text,
        }))
      : block.children,
  }));
}

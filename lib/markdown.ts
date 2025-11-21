import { readFile } from "fs/promises";
import { join } from "path";
import { remark } from "remark";
import html from "remark-html";

export type PageId = "landing" | "info" | "comparison" | "faq" | "contact";

export interface PageContent {
  html: string;
}

export async function getPageContent(
  siteSlug: string,
  pageId: PageId
): Promise<PageContent> {
  try {
    const filePath = join(process.cwd(), "content", siteSlug, `${pageId}.md`);
    const fileContents = await readFile(filePath, "utf-8");
    
    const processedContent = await remark().use(html).process(fileContents);
    const htmlContent = processedContent.toString();
    
    return {
      html: htmlContent,
    };
  } catch (error) {
    throw new Error(
      `Page content not found for slug: ${siteSlug}, page: ${pageId}`
    );
  }
}


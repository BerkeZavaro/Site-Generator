import { readFile } from "fs/promises";
import { join } from "path";

export interface SiteConfig {
  slug: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  country: string;
  demographics: {
    ageRange: string;
    gender: string;
    householdIncome: string;
  };
  product: {
    name: string;
    mainUrl: string;
  };
  brand: {
    name: string;
    mainSite: string;
  };
  toneOfVoice: string;
}

export async function getSiteConfig(siteSlug: string): Promise<SiteConfig> {
  try {
    const configPath = join(process.cwd(), "content", siteSlug, "config.json");
    const fileContents = await readFile(configPath, "utf-8");
    const config: SiteConfig = JSON.parse(fileContents);
    return config;
  } catch (error) {
    throw new Error(`Site config not found for slug: ${siteSlug}`);
  }
}


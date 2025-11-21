import { getSiteConfig } from "@/lib/siteConfig";
import { getPageContent } from "@/lib/markdown";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ siteSlug: string }>;
}

export default async function SiteLandingPage({ params }: PageProps) {
  const { siteSlug } = await params;

  try {
    const config = await getSiteConfig(siteSlug);
    const content = await getPageContent(siteSlug, "landing");

    return (
      <div>
        <h1 className="text-4xl font-bold mb-6">
          {config.primaryKeyword}
        </h1>
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: content.html }}
        />
      </div>
    );
  } catch (error) {
    notFound();
  }
}


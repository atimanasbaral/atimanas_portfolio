import PageStub from "@/components/layout/PageStub";

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;

  return (
    <PageStub
      eyebrow="Article"
      title={slug.replace(/-/g, " ").toUpperCase()}
      description="Full blog article layout and MDX content will ship in a later phase."
      phase="Blog detail — future phase"
      backHref="/blog"
      backLabel="Back to Blog"
    />
  );
}

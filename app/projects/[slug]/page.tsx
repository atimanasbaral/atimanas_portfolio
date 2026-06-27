import PageStub from "@/components/layout/PageStub";
import { getProjectBySlug, projects } from "@/lib/data/projects";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <PageStub
        eyebrow="Quest Log"
        title="PROJECT NOT FOUND"
        description="This quest does not exist in the current log."
        phase="Phase 7"
        backHref="/projects"
        backLabel="Back to Projects"
      />
    );
  }

  return (
    <PageStub
      eyebrow={project.quest}
      title={project.title}
      description={`${project.subtitle} Interactive dashboard, architecture, metrics, and live demo land in Phase 7.`}
      phase="Coming in Phase 7"
      backHref="/projects"
      backLabel="Back to Projects"
    />
  );
}

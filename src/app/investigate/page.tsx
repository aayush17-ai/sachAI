import type { Metadata } from "next";
import { SiteHeader } from "@/components/sachai/site-header";
import { SiteFooter } from "@/components/sachai/site-footer";
import { InvestigationSession } from "@/components/sachai/investigation/investigation-session";

export const metadata: Metadata = {
  title: "Investigate a claim — SachAI",
  description: "Paste a claim and SachAI will organize the evidence, sources and verdict for you.",
};

export default async function InvestigatePage({ searchParams }: PageProps<"/investigate">) {
  const { q } = await searchParams;
  const claim = typeof q === "string" ? q.trim() : undefined;

  return (
    <>
      <SiteHeader />
      <main className="flex-1 border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:py-14">
          <InvestigationSession key={claim ?? "empty"} claim={claim || undefined} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

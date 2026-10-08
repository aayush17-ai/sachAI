import { SiteHeader } from "@/components/sachai/site-header";
import { Hero } from "@/components/sachai/hero";
import { HowItWorks } from "@/components/sachai/how-it-works";
import { RecentInvestigations } from "@/components/sachai/recent-investigations";
import { AboutSection } from "@/components/sachai/about-section";
import { SiteFooter } from "@/components/sachai/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <RecentInvestigations />
        <AboutSection />
      </main>
      <SiteFooter />
    </>
  );
}

import Link from "next/link";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="mt-auto">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <Logo />
          <p className="text-sm text-subtle">Know the claim. Follow the evidence.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-6 text-sm text-muted">
            <li>
              <Link href="/#how-it-works" className="hover:text-foreground">
                How it works
              </Link>
            </li>
            <li>
              <Link href="/#investigations" className="hover:text-foreground">
                Investigations
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-foreground">
                About
              </Link>
            </li>
            <li>
              <Link href="/investigate" className="hover:text-foreground">
                Investigate
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

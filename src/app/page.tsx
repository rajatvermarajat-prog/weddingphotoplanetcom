import type { Metadata } from "next";
import { Homepage } from "@/features/public-pages/home/Homepage";
import { getHomepageData, getHomepageMetadataFromData } from "@/features/public-pages/home/legacy-homepage-data";
import "./homepage-unavailable.css";
import "./hero-slider.css";
import "./about-intro.css";
import "./vision-story.css";
import "./services-slider.css";
import "./gallery-showcase.css";
import "./testimonials-carousel.css";
import "./why-choose.css";
import "./candid-moments.css";
import "./site-footer.css";

export const dynamic = "force-dynamic";

function siteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.weddingphotoplanet.com/";
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const data = await getHomepageData();

    return getHomepageMetadataFromData(data, siteUrl());
  } catch {
    return {
      title: "Wedding Photo Planet - Top Candid Photographer, Best Wedding Photography in Delhi, India",
      description:
        "Find out the best candid wedding photographers in Delhi NCR? Wedding Photo Planet is one of the top candid wedding photographer, provides top rated pre-wedding and cinematography in Delhi NCR, India. Fore further details, visit us!!",
      robots: {
        index: false,
        follow: false,
      },
    };
  }
}

export default async function HomePage() {
  try {
    const data = await getHomepageData();

    return <Homepage data={data} />;
  } catch {
    return (
      <main className="wpp-homepage-unavailable">
        <h1>Wedding Photo Planet homepage data is unavailable</h1>
        <p>
          The migrated homepage is read-only and requires a reachable local, staging, or read-only replica
          MySQL database configured by <code>MAIN_DATABASE_URL</code>.
        </p>
        <p>No database writes, migrations, PHP changes, or media changes were attempted.</p>
      </main>
    );
  }
}

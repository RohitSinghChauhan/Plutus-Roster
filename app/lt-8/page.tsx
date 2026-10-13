import type { Metadata } from "next";
import { LeadershipTeamView } from "@/components/leadership-team-view";

export const metadata: Metadata = {
  title: "LT-8",
};

export default function Lt8Page() {
  return <LeadershipTeamView />;
}

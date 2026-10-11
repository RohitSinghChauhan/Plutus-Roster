import type { Metadata } from "next";
import { LeadershipTeamView } from "@/components/leadership-team-view";

export const metadata: Metadata = {
  title: "LT-7",
};

export default function Lt7Page() {
  return <LeadershipTeamView />;
}

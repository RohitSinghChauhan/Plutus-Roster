import type { Metadata } from "next";
import { SupportTeamView } from "@/components/support-team-view";

export const metadata: Metadata = {
  title: "Support Team",
};

export default function SupportTeamPage() {
  return <SupportTeamView />;
}

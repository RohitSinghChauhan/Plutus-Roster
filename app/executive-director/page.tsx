import type { Metadata } from "next";
import { ExecutiveDirectorView } from "@/components/executive-director-view";

export const metadata: Metadata = {
  title: "Executive Director",
};

export default function ExecutiveDirectorPage() {
  return <ExecutiveDirectorView />;
}

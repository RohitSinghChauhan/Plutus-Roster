import type { Metadata } from "next";
import { AreaDirectorView } from "@/components/area-director-view";

export const metadata: Metadata = {
  title: "Area Director",
};

export default function AreaDirectorPage() {
  return <AreaDirectorView />;
}

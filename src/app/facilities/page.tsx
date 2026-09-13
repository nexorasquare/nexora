import { redirect } from "next/navigation";

/** Retired route - kept so the old URL, which is indexed, still resolves. */
export default function FacilitiesPage() {
  redirect("/workspaces");
}

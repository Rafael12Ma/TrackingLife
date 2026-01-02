import AddTrackHelper from "@/Helper-Components/add/AddTrackHelper";
import { auth } from "@/LIB/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function AddTrack() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <AddTrackHelper session={session} />
    </>
  );
}

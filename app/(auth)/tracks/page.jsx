import EmptyCalendar from "@/Helper-Components/tracks/Empty";
import FullCalendar from "@/Helper-Components/tracks/FullCalendar";

import { auth } from "@/LIB/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getTracks } from "@/actions/indx";

export default async function TracksPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }
  const tracks = await getTracks(session.user.email);

  return (
    <>
      {tracks.length === 0 ? (
        <EmptyCalendar />
      ) : (
        <FullCalendar tracks={tracks} />
      )}
    </>
  );
}

import LoginForm from "@/Helper-Components/login/LoginHelper";
import { auth } from "@/LIB/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect("/add");
  }
  return (
    <>
      <LoginForm />
    </>
  );
}

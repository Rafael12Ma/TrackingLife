"use client";

import { authClient } from "@/LIB/auth-client";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

export default function LoginForm() {
  async function handleGithubSignIn() {
    const data = await authClient.signIn.social({
      provider: "github",
      callbackURL: "/add",
    });
  }

  async function handleGoogleSignIn() {
    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/add",
    });
  }
  return (
    <>
      <div className="flex flex-col p-5 border-2 rounded-t-2xl sm:mx-20 md:mx-45 lg:mx-80 xl:mx-120 2xl:mx-145 3xl:mx-140 gap-4 my-20 mx-10 justify-center items-center">
        <h1 className="font-bold text-xl">Log in</h1>
        <hr className="bg-amber-500 w-full opacity-20" />
        <div className="gap-10 flex">
          <div className="flex flex-col justify-center items-center gap-5">
            <p>
              <FaGoogle size={30} />
            </p>
            <button
              className="bg-black text-white hover:opacity-50 cursor-pointer rounded-2xl p-2"
              onClick={handleGoogleSignIn}
            >
              Login with google
            </button>
          </div>

          <div className="flex flex-col justify-center items-center gap-5">
            <p>
              <FaGithub size={30} />
            </p>
            <button
              className="bg-black text-white hover:opacity-50 cursor-pointer rounded-2xl p-2"
              onClick={handleGithubSignIn}
            >
              Log in with github
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

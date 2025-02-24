import { LoginForm } from "@/components/auth/login-form";
import { ActionFunction } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import { useEffect } from "react";
import { auth, sessionStorage } from "~/auth/auth.server";
import { useToast } from "~/hooks/use-toast";

type LoginActionData = {
  success: boolean;
  redirectTo?: string;
  error?: string;
};
export const action: ActionFunction = async ({ request }) => {
  try {
    const session = await sessionStorage.getSession(
      request.headers.get("Cookie")
    );
    const user = await auth.authenticate("user-pass", request);
    session.set("user", user);
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/dashboard",
        "Set-Cookie": await sessionStorage.commitSession(session),
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      // here the error related to the authentication process
      return { success: false, error: error.message, status: 401 };
    }
  }
};
export default function LoginPage() {
  const actionData = useActionData<LoginActionData>();
  const { toast } = useToast();

  useEffect(() => {
    if (actionData?.error) {
      toast({
        title: "Authencation Error",
        description: actionData.error,
        color: "red",
      });
    }
  }, [actionData, toast]);
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-slate-500 p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl ">
        <LoginForm />
      </div>
    </div>
  );
}

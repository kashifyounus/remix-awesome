import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { sessionStorage } from "~/auth/auth.server";

export async function action({ request }: ActionFunctionArgs) {
  console.log("logout.tsx");
  const session = await sessionStorage.getSession(
    request.headers.get("cookie")
  );
  console.log('session', session);  
  // clear user session
  const userSession = session.get("user");
    console.log('userSession', userSession);
  session.unset("user");
  return redirect("/login", {
    headers: { "Set-Cookie": await sessionStorage.destroySession(session) },
  });
}

export async function loader() {
  return redirect("/login");
}

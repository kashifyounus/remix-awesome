import { LoaderFunction } from "@remix-run/node";
import { redirect, useLoaderData } from "@remix-run/react";
import { sessionStorage } from "~/auth/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );
  const user = session.get("user");
  if (!user) {
    return redirect("/login");
  }
  return { user };
};

const DashboardPage = () => {
  const data = useLoaderData();
  console.log(data, "data");
  return <div>DashboardPage</div>;
};

export default DashboardPage;

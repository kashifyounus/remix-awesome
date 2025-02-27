import type { MetaFunction } from "@remix-run/node";
import HomePage from "~/components/website/home";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="">
      <HomePage />
    </div>
  );
}

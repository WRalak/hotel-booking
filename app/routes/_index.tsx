import type { MetaFunction } from "@remix-run/node";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Offers from "../components/Offers";
import Sub from "../components/Sub";

export const meta: MetaFunction = () => {
  return [
    { title: "Prime" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="">
      <Hero />
      <Featured />
      <Offers />
      <Sub />
    </div>
  );
}



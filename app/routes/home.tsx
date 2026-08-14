import type { Route } from "./+types/home";
import Navbar from "~/components/navbar";
import AuthNavbar from "~/components/authNavbar";
import Signin from "./signin";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <h1>Hello</h1>
);
}

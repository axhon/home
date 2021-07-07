import type { MetaFunction, LinksFunction, LoaderFunction } from "remix";
import { useRouteData } from "remix";

import stylesUrl from "../styles/index.css";

export let meta: MetaFunction = () => {
  return {
    title: "Axhon Writes Code",
    description: "Homepage for Axhon"
  };
};

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export let loader: LoaderFunction = async () => {
  return { message: "this is awesome 😎. Chee!" };
};

export default function Index() {
  let data = useRouteData();

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>Welcome to Future Site of my Homepage!</h2>

      <p>Message from the loader: {data.message}</p>
      <p>Hello, Ashley. You're beautiful.</p>
      <p>Love, Axhon 😘</p>
    </div>
  );
}

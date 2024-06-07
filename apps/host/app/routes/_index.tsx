import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import React from "react";
import { loadRemoteModule } from "remix-federation/runtime";
import { ClientOnly } from "remix-utils/client-only";

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

const RemoteWidget = React.lazy(() => loadRemoteModule("remote1", "./widget1"));

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Remix Hosting Page</h1>
      <ul>
        <li>
          <Link to="/host">HOST</Link>
        </li>
        <li>
          <Link to="/remote/blog">Investigation</Link>
        </li>
      </ul>

      <ClientOnly fallback="Loading remote widget...">{() => <RemoteWidget />}</ClientOnly>
    </div>
  );
}

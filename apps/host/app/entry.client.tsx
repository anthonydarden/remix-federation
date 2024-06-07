import { initFederation } from "remix-federation/runtime";
import { remotes } from "./utils/remotes";

(async () => {
  await initFederation({
    remote1: `${remotes.investigation}/remoteEntry.json`,
  });

  await import("./entry.client.bootstrap");
})();

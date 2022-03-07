import { Filters, Results } from "@molecules";
import { useCurrentResults } from "hooks";
import React from "react";

export default function MainContent() {
  const results = useCurrentResults();

  return (
    <main>
      <Filters />
      <Results {...results} />
    </main>
  );
}

import { Router } from "wouter";
import { useState, useEffect } from "react";

function HashRouter({ children }: { children: React.ReactNode }) {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return <Router base={hash.replace(/^#/, "")}>{children}</Router>;
}

export default HashRouter;

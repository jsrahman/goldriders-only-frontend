"use client";

/**
 * WARNING:
 * Here is a client-side auth check.
 * Current client-side auth check is NOT secure.
 * Users could access protected routes via direct API calls.
 * Move auth check to server (middleware/layout redirect) with secure cookies/JWT.
 */

import { usePreferencesStore } from "@/store/preferences.store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useUiStore } from "@/store/ui.store";
let oldUrl = "";

const AuthLayout = ({ children }) => {
  const { preferences } = usePreferencesStore();
  const { setUi } = useUiStore();
  const router = useRouter();
  const isAuth = preferences?.isAuth;

  useEffect(() => {
    oldUrl = window.location.href;

    if (isAuth === undefined) return;

    if (!isAuth) {
      router.replace("/?request=login");
    } else {
      router.replace(oldUrl);
      oldUrl = "";
    }
  }, [isAuth, router, setUi]);

  if (!isAuth) return null;

  return children;
};

export default AuthLayout;

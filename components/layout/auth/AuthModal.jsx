"use client";
import CloseIcon from "@/components/svg/others/CloseIcon";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Register from "./reg/Register";
import Login from "./Login";
import ResetPass from "./ResetPass";
import { useUiStore } from "@/store/ui.store";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const AuthModal = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const { ui, setUi } = useUiStore();
  const [isClose, setIsClose] = useState(false);

  function handleClose() {
    if (ui.authType === "register") {
      return setIsClose(true);
    }
    setUi({ isAuthModalOpen: false });
  }

  useEffect(() => {
    const search = searchParams.get("request");
    setTimeout(() => {
      if (search === "login") {
        setUi({ authType: "login", isAuthModalOpen: true });
        router.replace(pathname, { scroll: false });
      }
    }, 1300);
  }, [searchParams, setUi, pathname, router]);

  function HandelAuthType() {
    if (ui.authType === "login") {
      return <Login setAuthType={(type) => setUi({ authType: type })} />;
    }
    if (ui.authType === "register") {
      return <Register isClose={isClose} setIsClose={setIsClose} />;
    }
    if (ui.authType === "reset") {
      return <ResetPass />;
    }
    return <Login />;
  }

  return (
    <Modal
      show={ui.isAuthModalOpen}
      className="auth-modal"
      centered
      onHide={handleClose}
    >
      <button className="modal-close" onClick={handleClose}>
        <CloseIcon />
      </button>
      <Modal.Body className="p-0">{HandelAuthType()}</Modal.Body>
    </Modal>
  );
};

export default AuthModal;

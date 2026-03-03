import Button from "@/components/templates/form/Button";
import { useUiStore } from "@/store/ui.store";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SidebarItem = ({ link, icon, text, type, ...props }) => {
  const { ui } = useUiStore();

  if (type === "button" || !link) {
    return (
      <Button className="sidebar-body__item" {...props}>
        <span className="icon">
          <Image
            width={ui?.isCollapsible ? 20 : 24}
            height={ui?.isCollapsible ? 20 : 24}
            unoptimized
            src={icon}
            alt={text}
            style={{ width: "auto", height: "auto" }}
          />
        </span>
        <span className="text">{text}</span>
      </Button>
    );
  }

  return (
    <Link href={link} className="sidebar-body__item">
      <span className="icon">
        <Image
          width={ui?.isCollapsible ? 20 : 24}
          height={ui?.isCollapsible ? 20 : 24}
          unoptimized
          src={icon}
          alt={text}
          style={{ width: "auto", height: "auto" }}
        />
      </span>
      <span className="text">{text}</span>
    </Link>
  );
};

export default SidebarItem;

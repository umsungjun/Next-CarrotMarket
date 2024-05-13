import { cls } from "@/libs/client/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface FloatingButton {
  children: React.ReactNode;
  href: string;
}

function FloatingButton({ children, href }: FloatingButton) {
  const [innerWidth, setInnerWidth] = useState<number>(0);

  const resizeListener = () => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    resizeListener();
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return (
    <Link
      href={href}
      className={cls(
        innerWidth <= 450 ? "fixed" : "absolute",
        "hover:bg-orange-500 border-0 aspect-square border-transparent transition-colors cursor-pointer bottom-24 right-4 shadow-xl bg-orange-400 rounded-full w-14 flex items-center justify-center text-white"
      )}
    >
      {children}
    </Link>
  );
}

export default FloatingButton;

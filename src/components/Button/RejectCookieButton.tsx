"use client";
import clsx from "clsx";
import { useState } from "react";

export default function RejectCookieButton() {
  const [isCookiesRejected, setIsCookiesRejected] = useState(false);
  const rejectCookie = () => {
    setIsCookiesRejected(true);
    window.dispatchEvent(new Event("cookieRejected"));
  };

  return (
    <>
      <button
        className="mx-auto bg-neutrals-black min-w-24 px-3 border-[0.5px] rounded-lg border-primary-yellow hover:scale-105 transition-all duration-200"
        onClick={rejectCookie}
      >
        <p className="text-sm uppercase">Avvisa cookies</p>
      </button>
      <p
        className={clsx(
          "mx-auto mt-2 mb-0 text-xs transition-all duration-200",
          {
            "opacity-0 invisible": !isCookiesRejected,
            "opacity-1 visible": isCookiesRejected,
          }
        )}
      >
        Cookies no more!
      </p>
    </>
  );
}

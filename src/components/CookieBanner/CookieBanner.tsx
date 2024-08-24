"use client";
import { getCookie, isCookieSet, setCookie } from "@/lib/utils/cookies";
import { GoogleTagManager } from "@next/third-parties/google";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface CookieBannerProps {
  gtmId: string;
}

export default function CookieBanner({ gtmId }: CookieBannerProps) {
  const [cookieExists, setCookieExists] = useState(true);
  const [cookieAccepted, setCookieAccepted] = useState(false);
  const [isCookiePage, setIsCookiePage] = useState(false);
  let pathname = usePathname();

  useEffect(() => {
    const handleCookieRejected = () => {
      setCookieExists(true);
      setCookie("cookiesAccepted", "false", 365);
    };
    window.addEventListener("cookieRejected", handleCookieRejected);

    return () => {
      window.removeEventListener("cookieRejected", handleCookieRejected);
    };
  });

  useEffect(() => {
    const cookieIs = isCookieSet("cookiesAccepted");
    setCookieExists(cookieIs);
    const cookieYes =
      (cookieIs && getCookie("cookiesAccepted") === "true") ?? false;
    setCookieAccepted(cookieYes);
  }, [getCookie("cookiesAccepted")]);

  useEffect(() => {
    setIsCookiePage(pathname === "/kakor");
  }, [usePathname()]);

  const setCookieValue = (value: "true" | "false") => {
    setCookie("cookiesAccepted", value, 365);
    setCookieExists(true);
    if (value === "true") {
      setCookieAccepted(true);
    } else setCookieAccepted(false);
  };

  return (
    <>
      {cookieExists && cookieAccepted && <GoogleTagManager gtmId={gtmId} />}
      <div
        className={clsx("absolute left-0 top-0 h-[100vh] z-[100]", {
          "flex no-scroll bg-neutrals-black/70 overflow-x-hidden w-[100vw]":
            !cookieExists && !isCookiePage,
          "flex ": !cookieExists && isCookiePage,
          "hidden ": cookieExists,
        })}
      >
        <div className="fixed bottom-0 w-full min-h-[200px]">
          <div className="px-12 md:px-40 pb-7 flex justify-center">
            <div className="flex flex-col md:flex-row gap-6 md:gap-20 max-w-[755px] p-6 justify-center min-h-[100px] rounded-xl items-center bg-neutrals-black border-[0.5px] border-primary-yellow w-full">
              <div className="max-w-[400px] text-center sm:text-left">
                <p className="text-sm">
                  Vi använder kakor, eller så kallade cookies, för att spara och
                  analysera antalet besökare av sidan. Du kan läsa mer
                  <Link href={"/kakor"}>
                    <span className="text-sm underline"> här.</span>
                  </Link>
                </p>
              </div>
              <div className="flex gap-4 lg:gap-8 justify-center items-center flex-row md:flex-col lg:flex-row">
                <button
                  className="bg-primary-dark-yellow min-w-24 px-3 border-[0.5px] rounded-lg border-primary-yellow hover:scale-105 transition-all duration-200"
                  onClick={() => {
                    setCookieValue("true");
                  }}
                >
                  <p className="text-sm uppercase">Godkänn</p>
                </button>
                <button
                  className="bg-neutrals-black min-w-24 px-3 border-[0.5px] rounded-lg border-primary-yellow hover:scale-105 transition-all duration-200"
                  onClick={() => {
                    setCookieValue("false");
                  }}
                >
                  <p className="text-sm uppercase">Neka</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

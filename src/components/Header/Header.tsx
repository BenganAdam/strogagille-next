"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { LiStyle } from "@/lib/models/Li";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const Header = () => {
  const [pathname, setPathname] = useState(usePathname());
  const [isHome, setIsHome] = useState(pathname === "/");
  const [isLargeHeader, setIsLargeHeader] = useState(isHome);
  const [isScrolled, setIsScrolled] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileScreen, setMobileScreen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      setPathname(path);
      setIsHome(path === "/");
      setIsLargeHeader(path === "/");
      const screen = window.innerWidth;
      setMobileScreen(screen < 1024);
    }
  }, [usePathname()]);

  useEffect(() => {
    const onscroll = () => {
      const scrolledPos = window.scrollY;
      const hasScrolled = scrolledPos > 0;
      if (hasScrolled) setIsScrolled(true);
      else setIsScrolled(false);
      setIsLargeHeader(!hasScrolled && isHome);
    };
    window.addEventListener("scroll", onscroll);
    return () => {
      window.removeEventListener("scroll", onscroll);
    };
  }, [pathname]);

  useEffect(() => {
    const onresize = () => {
      const screen = window.innerWidth;
      setMobileScreen(screen < 1024);
    };
    window.addEventListener("resize", onresize);
    return () => {
      window.removeEventListener("resize", onresize);
    };
  }, []);

  useEffect(() => {
    if (isHome) {
      !isScrolled && setAnimationKey((prevKey) => prevKey + 1);
    }
  }, [isScrolled, isHome]);

  return (
    <header
      className={clsx(
        "fixed w-full backdrop-blur-[10px] border-primary-yellow transition-height-width-colors duration-300 z-50",
        {
          "h-[335px] bg-neutrals-black/50": isLargeHeader && !mobileMenuOpen,
          "h-[125px] bg-neutrals-black/50 after:bg-primary-yellow after:absolute after:bottom-0 after:h-[1px] after:w-0 after:left-1/2 after:translate-x-[-50%] after:animate-revealBorder":
            !isLargeHeader && !mobileMenuOpen,
          "no-scroll h-[100vh]": mobileMenuOpen,
        }
      )}
    >
      <nav className="relative h-full max-h-[335px]">
        <div
          className={clsx(
            "flex flex-row gap-10 h-full items-center justify-center"
          )}
        >
          <Link
            href={"/"}
            className="z-50"
            onClick={() => {
              if (mobileScreen && mobileMenuOpen) {
                setMobileMenuOpen(!mobileMenuOpen);
              }
            }}
          >
            <span className="sr-only transition-all duration-500">Logo</span>
            <Image
              src="/images/logo.png"
              alt="Logo"
              key={animationKey}
              className={clsx("", {
                "h-[150px] lg:h-[300px] w-auto transition-all duration-500":
                  isLargeHeader || mobileMenuOpen,
                "h-[100px] w-auto animate-resetLogoSpin": !isLargeHeader,
              })}
              width={300}
              height={300}
              priority
            />
          </Link>
        </div>
        <div
          className={clsx("block absolute right-2 lg:right-6 top-0 w-20 z-50", {
            "h-[125px] lg:h-full": !isLargeHeader,
            "h-[125px] lg:h-0 lg:delay-300": isLargeHeader,
          })}
        >
          <div className="h-full flex w-full items-center justify-center">
            <div
              className="flex w-full items-center justify-center flex-col gap-2 cursor-pointer h-auto py-1 px-5"
              onClick={() => {
                if (mobileScreen) {
                  setMobileMenuOpen(!mobileMenuOpen);
                } else
                  !isLargeHeader
                    ? setIsLargeHeader(true)
                    : setIsLargeHeader(false);
              }}
            >
              <div
                className={clsx(
                  "h-[3px] duration-300 w-full rounded-md bg-white",
                  {
                    "lg:-translate-y-4 lg:opacity-0": isLargeHeader,
                    "lg:-translate-y-0 lg:opacity-1": !isLargeHeader,
                    "animate-burgerToCrossTop ": mobileScreen && mobileMenuOpen,
                  }
                )}
              ></div>
              <div
                className={clsx(
                  "h-[3px] duration-300 w-full rounded-md bg-white",
                  {
                    "lg:opacity-0": isLargeHeader,
                    "lg:opacity-1": !isLargeHeader,
                    "opacity-0": mobileScreen && mobileMenuOpen,
                  }
                )}
              ></div>
              <div
                className={clsx(
                  "h-[3px] duration-300 w-full rounded-md bg-white",
                  {
                    "lg:translate-y-4 lg:opacity-0": isLargeHeader,
                    "lg:translate-y-0 lg:opacity-1": !isLargeHeader,
                    "animate-burgerToCrossBottom":
                      mobileScreen && mobileMenuOpen,
                  }
                )}
              ></div>
            </div>
          </div>
        </div>
        <div
          className={clsx("lg:block absolute lg:right-6 top-0 ", {
            "lg:h-full": isLargeHeader,
            "lg:h-0 lg:delay-300": !isLargeHeader,
            invisible: mobileScreen && !mobileMenuOpen,
            "h-[100vh] delay-200 w-full": mobileScreen,
          })}
        >
          <div className="flex h-full items-center justify-center text-grey-300 ">
            <ul
              className={clsx(
                "flex group px-5 items-center lg:items-end justify-center flex-col gap-4 cursor-pointer lg:visible invisible",
                {
                  "lg:h-0 lg:invisible": !isLargeHeader,
                  "lg:h-full visible": isLargeHeader,
                  "h-full !visible": mobileScreen && mobileMenuOpen,
                  "h-0 invisible": mobileScreen && !mobileMenuOpen,
                }
              )}
            >
              <li
                className={clsx(`${LiStyle.default}`, {
                  "lg:translate-y-4 lg:opacity-0 lg:duration-200":
                    !isLargeHeader,
                  "lg:opacity-1 lg:delay-100 lg:duration-300": isLargeHeader,
                  "opacity-0": mobileScreen && !mobileMenuOpen,
                })}
              >
                <Link
                  href="/regler-information"
                  onClick={() => {
                    if (mobileScreen) {
                      setMobileMenuOpen(!mobileMenuOpen);
                    }
                  }}
                >
                  Regler & information
                </Link>
              </li>
              <li
                className={clsx(`${LiStyle.default} `, {
                  "lg:opacity-0 lg:duration-200": !isLargeHeader,
                  "lg:opacity-1 lg:delay-100": isLargeHeader,
                  "opacity-0": mobileScreen && !mobileMenuOpen,
                })}
              >
                <Link
                  href="/history"
                  onClick={() => {
                    if (mobileScreen) {
                      setMobileMenuOpen(!mobileMenuOpen);
                    }
                  }}
                >
                  Bragder genom åren
                </Link>
              </li>
              <li
                className={clsx(`${LiStyle.default} `, {
                  "lg:-translate-y-4 lg:opacity-0 lg:duration-200":
                    !isLargeHeader,
                  "lg:opacity-1 lg:delay-100 lg:duration-300": isLargeHeader,
                  "opacity-0": mobileScreen && !mobileMenuOpen,
                })}
              >
                <Link
                  href="/wall-of-fame"
                  onClick={() => {
                    if (mobileScreen) {
                      setMobileMenuOpen(!mobileMenuOpen);
                    }
                  }}
                >
                  Wall of Fame
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;

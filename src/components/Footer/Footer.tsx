import Image from "next/image";
import Link from "next/link";

import { LiStyle } from "@/lib/models/Li";

import { Copyright } from "./Copyright";

const Footer = () => {
  const thisYear = new Date().getFullYear();
  return (
    <footer className="relative" aria-labelledby="footer-heading">
      <div className="after:bg-primary-yellow after:absolute after:top-0 after:h-[1px] after:w-full">
        <div>
          <div className="flex w-full h-auto justify-center items-center py-8">
            <Image
              src="/images/sg_paragraph_600x900.png"
              alt="Logo"
              width={50}
              height={75}
              loading="lazy"
              className=""
            />
          </div>
        </div>
        <div>
          <ul className="flex group px-5 items-center justify-center flex-col md:flex-row gap-4">
            <li className={`${LiStyle.default}`}>
              <Link href="/regler-information">Regler & information</Link>
            </li>
            <li className={`${LiStyle.default} `}>
              <Link href="/history">Bragder genom åren</Link>
            </li>
            <li className={`${LiStyle.default}`}>
              <Link href="/wall-of-fame">Wall of Fame</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center flex-col mt-14 relative">
          <div className="after:bg-primary-yellow after:absolute after:top-0 after:h-[1px] after:w-32 after:left-1/2 after:-translate-x-1/2 "></div>
          <h2 className="text-xl mt-6">Skapad av</h2>
          <div className="flex items-center justify-center gap-8">
            <div className="flex items-center justify-center flex-col">
              <h3 className="text-lg text-neutrals-white mb-2">
                Adam Bengtsson
              </h3>
              <div className="flex items-center justify-center flex-row gap-4">
                <div>
                  <Link href="https://github.com/BenganAdam" target="_blank">
                    <Image
                      className="hover:scale-[105%] duration-200"
                      src="/icons/github_logo_white.svg"
                      alt="Github logo"
                      width={30}
                      height={30}
                      loading="lazy"
                    />
                  </Link>
                </div>
                <div>
                  <Link
                    href="https://www.linkedin.com/in/adam-bengtsson-5b270a175"
                    target="_blank"
                  >
                    <Image
                      className="hover:scale-[105%] duration-200"
                      src="/icons/linkedin_logo_white.svg"
                      alt="LinkedIn logo"
                      width={30}
                      height={30}
                      loading="lazy"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center flex-col">
              <h3 className="text-lg text-neutrals-white mb-2">
                Viktor Hultsten
              </h3>
              <div className="flex items-center justify-center flex-row gap-4">
                <div>
                  <Link
                    href="https://github.com/viktorhultsten"
                    target="_blank"
                  >
                    <Image
                      className="hover:scale-[105%] duration-200"
                      src="/icons/github_logo_white.svg"
                      alt="Github logo"
                      width={30}
                      height={30}
                      loading="lazy"
                    />
                  </Link>
                </div>
                <div>
                  <Link
                    href="https://se.linkedin.com/in/viktorhultsten"
                    target="_blank"
                  >
                    <Image
                      className="hover:scale-[105%] duration-200"
                      src="/icons/linkedin_logo_white.svg"
                      alt="LinkedIn logo"
                      width={30}
                      height={30}
                      loading="lazy"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center pt-12">
            <Link
              href="/om-oss"
              className={`${LiStyle.default} cursor-pointer my-2`}
            >
              Mer om oss
            </Link>
          </div>
          <div className="flex items-center justify-center pb-6">
            <Link
              href="/kakor"
              className={`${LiStyle.default} cursor-pointer my-2`}
            >
              Kakor
            </Link>
          </div>
        </div>
        <Copyright />
      </div>
    </footer>
  );
};
export default Footer;

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Om oss - Strögagille Legacy",
  description: "Läs om vilka vi är som står bakom hemsidan.",
  openGraph: {
    title: "Om oss - Strögagille Legacy",
    description: "Läs om vilka vi är som står bakom hemsidan.",
    images: [
      {
        url: "/images/logo.png",
        width: 300,
        height: 300,
        alt: "Strögagille logo",
      },
    ],
  },
};

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
      <div className="py-20 w-full flex justify-center mt-[125px]">
        <div className="mx-auto px-6 flex flex-col items-center">
          <h1>Vilka är vi </h1>
          <div className="flex w-full justify-center items-center my-14">
            <Image
              src="/images/sg_paragraph_600x900.png"
              alt="Logo"
              width={50}
              height={75}
              priority
            />
          </div>
          <div className="max-w-[550px] mt-8">
            <h2>Utveckling</h2>
            <p>
              Skaparna av hemsidan är Adam Bengtsson och Viktor Hultsten. Båda
              utbildade i Datavetenskap vid Uppsala Universitet och arbetar som
              utvecklare.
            </p>
            <div className="flex items-center justify-center gap-8 py-8">
              <div className="flex items-center justify-center flex-col">
                <h2 className="text-lg text-primary-yellow mb-2">
                  Adam Bengtsson
                </h2>
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
                <h2 className="text-lg text-primary-yellow mb-2">
                  Viktor Hultsten
                </h2>
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
            <p className="mt-10">
              Med passionen och viljan att alltid utvecklas och ligga i framkant
              är detta projektet utvecklat i NextJS 14 och hostas via Vercel.
            </p>
            <div className="flex items-center justify-center gap-8 py-8">
              <div className="text-lg text-primary-yellow mb-2">
                <Link href="https://nextjs.org/" target="_blank">
                  <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert hover:scale-[103%] duration-200"
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={100}
                    height={20}
                    loading="lazy"
                  />
                </Link>
              </div>
              <div className="text-lg text-primary-yellow mb-2">
                <Link href="https://vercel.com/" target="_blank">
                  <Image
                    src="/vercel.svg"
                    alt="Vercel Logo"
                    className="dark:invert hover:scale-[103%] duration-200"
                    width={100}
                    height={23}
                    loading="lazy"
                  />
                </Link>
              </div>
            </div>
            <div className="flex w-full justify-center items-center my-14">
              <Image
                src="/images/sg_paragraph_dot_600x900.png"
                alt="Logo"
                width={50}
                height={75}
                priority
              />
            </div>
            <h2>Assets</h2>
            <p>
              Alla bilder förutom vissa ikoner är skapade av oss i diverse
              designverktyg eller genererade med hjälp av AI.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

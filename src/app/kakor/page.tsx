import RejectCookieButton from "@/components/Button/RejectCookieButton";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kakor - Strögagille Legacy",
  description: "Läs om hur vi använder och hanterar cookies.",
  openGraph: {
    title: "Kakor - Strögagille Legacy",
    description: "Läs om hur vi använder och hanterar cookies.",
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

export default function Kakor() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
      <div className="py-20 w-full flex justify-center mt-[125px]">
        <div className="mx-auto px-6 flex flex-col items-center">
          <h1>Kakor</h1>
          <div className="max-w-[550px] mt-8">
            <p>
              Vi använder kakor, eller så kallade cookies, för att spara och
              analysera användaraktivitet.
            </p>
            <p>
              Vi använder oss av Google Analytics för att spåra aktivitet och
              nyttjar denna informationen uteslutande för att analysera mängden
              användare som besöker sidan. Du som användare kan när som helst
              avvisa cookies genom att klicka på knappen nedan.
            </p>
            <div className="flex flex-col mt-8">
              <RejectCookieButton />
            </div>
          </div>
          <div className="max-w-[750px]">
            <div className="flex flex-col md:flex-row w-full justify-center items-center my-8 gap-4">
              <div>
                <Image
                  src="/images/cookies.png"
                  alt="Logo"
                  width={420}
                  height={420}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

import Image from "next/image";

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
              Vi använder oss av Google Tag för att spåra aktivitet och nyttjar
              denna informationen uteslutande för att analysera mängden
              användare som besöker sidan. Du som användare kan när som helst
              välja att inte bli spårad genom att klicka på &quot;Avvisa alla
              cookies&quot;.
            </p>
          </div>
          <div className="max-w-[750px]">
            <div className="flex flex-col md:flex-row w-full justify-center items-center my-8 gap-4">
              <div>
                <Image
                  src="/images/cookies.png"
                  alt="Logo"
                  width={420}
                  height={420}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

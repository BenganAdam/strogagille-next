import Image from "next/image";
export default function Custom404() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
      <div className="py-12 md:py-32 w-full flex justify-center mt-[125px]">
        <div className="mx-auto px-6 flex flex-col items-center">
          <div className="max-w-[550px] mt-8">
            <div className="flex gap-4">
              <h1 className="border-r-[1px] border-primary-yellow pr-4">404</h1>
              <p className="mt-0 flex items-center">Sidan kan inte hittas.</p>
            </div>
          </div>
          <div className="max-w-[750px]">
            <div className="flex flex-col md:flex-row w-full justify-center items-center my-8 gap-4">
              <div>
                <Image
                  src="/images/not_found_2.png"
                  alt="Logo"
                  width={420}
                  height={420}
                  loading="lazy"
                  className="border-primary-yellow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

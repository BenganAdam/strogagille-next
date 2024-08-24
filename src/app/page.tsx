import { afterBorder } from "@/lib/models/afterBorder";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
      <div className="w-100 min-w-[1600px] h-[100vh]">
        <Image
          src="/images/dark_bar.png"
          alt="Logo"
          className="h-full"
          width={2000}
          height={1300}
          priority
        />
      </div>
      <div className="py-20 w-full flex justify-center">
        <div className="mx-auto px-6 flex flex-col items-center">
          <h1>Välkommen till Strögagille Legacy </h1>
          <div className="max-w-[550px]">
            <p>
              - den officiella hemsidan för den ultimata barrundan för ölälskare
              och tävlingsentusiaster!
            </p>
            <p>
              Sedan 2021 har detta spännande evenemang samlat grupper av modiga
              deltagare som tar sig an utmaningen att intaga ett visst antal
              stora starka öl på olika utvalda barer. Det är en tävling där
              kamratskap och gemenskap står i fokus, och där endast de tåligaste
              och mest ihärdiga kan kalla sig för vinnare!
            </p>
            <div className="flex w-full justify-center items-center my-16">
              <Image
                src="/images/sg_paragraph_dot_600x900.png"
                alt="Logo"
                width={50}
                height={75}
                priority
              />
            </div>
            <p>
              Strögagille erbjuder en unik twist till den traditionella
              barrundan – här är det inte bara att besöka olika barer och njuta
              av ölen. Utöver det måste även deltagarna visa prov på uthållighet
              och strategi när de kämpar för att nå målet som den snabbaste
              gruppen. Reglerna är klara och tydliga: inget spring mellan
              barerna är tillåtet, och endast stora starka öl ska intas för att
              räknas in i tävlingen.
            </p>
            <p>
              På den här hemsidan hittar du allt du behöver veta om tävlingen.
              Här kan du följa tidigare vinnare och deras bragder, låta dig
              inspireras av deras äventyr och taktik. Sidan fungerar också som
              en prisvägg där vi stolt uppdaterar vinnarna vid varje tillfälle.
              Det är här vinnarna får äran att för alltid förevigas och bli en
              del av &quot;Strögagille Legacy.&quot;
            </p>
          </div>
          <div className="max-w-[750px]">
            <div className="flex flex-col md:flex-row w-full justify-center items-center my-8 gap-4">
              <div className="group">
                <Link href={"/regler-information"}>
                  <Image
                    src="/images/beer_judge.png"
                    alt="Logo"
                    width={430}
                    height={430}
                    loading="lazy"
                    className="cursor-pointer group-hover:scale-[103%] duration-200 mb-1"
                  />
                  <span
                    className={`${afterBorder.groupUnderLineBorder} text-sm`}
                  >
                    Regler &amp; information
                  </span>
                </Link>
              </div>
              <div className="flex justify-between md:justify-center items-start md:items-center flex-row gap-2 md:gap-1 md:flex-col h-[230px] w-full md:w-auto md:h-[420px]">
                <div className="group">
                  <Link href={"/wall-of-fame"}>
                    <Image
                      src="/images/wall_of_fame.png"
                      alt="Logo"
                      width={200}
                      height={200}
                      loading="lazy"
                      className="cursor-pointer group-hover:scale-[103%] duration-200 min-w-[130px] min-h-[130px]"
                    />
                    <span
                      className={`${afterBorder.groupUnderLineBorder} text-sm`}
                    >
                      Wall of Fame
                    </span>
                  </Link>
                </div>
                <div className="group">
                  <Link href={"/history"}>
                    <Image
                      src="/images/history.png"
                      alt="Logo"
                      width={200}
                      height={200}
                      loading="lazy"
                      className="cursor-pointer group-hover:scale-[103%] duration-200 min-w-[130px] min-h-[130px]"
                    />
                    <span
                      className={`${afterBorder.groupUnderLineBorder} text-sm`}
                    >
                      Bragder genom åren
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[550px]">
            <p>
              Men Strögagille är inte bara en tävling – det är en chans att
              skapa minnen och upplevelser som varar livet ut. Det är en
              möjlighet att utmana dig själv och dina vänner, och samtidigt få
              upptäcka nya favoritbarer och stifta bekantskap med andra
              ölentusiaster. Här samlas likasinnade för att fira gemenskapen
              kring en av världens äldsta drycker – ölet.
            </p>
            <p>
              Så om du är redo att ta dig an den ultimata ölupplevelsen och
              skriva in ditt namn i historieböckerna, är &quot;Strögagille
              Legacy&quot; platsen för dig. Tillsammans skapar vi minnen som
              varar livet ut och vi gör det med en stor stark i handen!
            </p>
            <div className="flex w-full justify-center items-center my-16">
              <Image
                src="/images/sg_paragraph_dot_600x900.png"
                alt="Logo"
                width={50}
                height={75}
                priority
              />
            </div>
            <h2 className="text-lg text-primary-yellow mb-0 text-center">
              Skål och välkommen till &quot;Strögagille Legacy&quot;
            </h2>
            <p className="text-center">
              - där vinnarna blir en del av historien och ölets ära hyllas i all
              sin prakt!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

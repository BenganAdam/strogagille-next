import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Regler & information - Strögagille Legacy",
  description: "Information och regler om hur du genomför ett Strögagille.",
  openGraph: {
    title: "Regler & information - Strögagille Legacy",
    description: "Information och regler om hur du genomför ett Strögagille.",
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

export default function Regler() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
      <div className="py-20 w-full flex justify-center mt-[125px]">
        <div className="mx-auto px-6 flex flex-col items-center">
          <h1>Regler och Information</h1>
          <div className="max-w-[550px] mt-8">
            <ul>
              <li>
                <strong>Ströga:</strong> Att strosa längs ortens storgata och
                stolt visa upp sig.
              </li>
              <li>
                <strong>Gille:</strong> En sammanslutning där fest, samvaro och
                goda tider står i fokus.
              </li>
            </ul>
            <p className="pt-6">
              Nu, till reglerna - dessa är lika lätta att följa som det är att
              häva i sig en kall bir på en varm sommardag. Vi håller det helt
              enkelt simpelt för att ingen ska behöva känna sig förvirrad eller
              stressad. Utförandet blir desto jobbigare.
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
            <h2>Reglerna lyder som följer:</h2>
            <ol>
              <li>
                <strong>Ett, två, tre - GÅ!</strong>
                <br></br>Inga storslagna hopp eller löpande fötter. Bara sköna
                promenader är grejen här.
              </li>
              <li className="mt-2">
                <strong>En stor stark per bar håller doktorn borta.</strong>{" "}
                <br></br>En enhet &quot;stor stark&quot; per bar, per deltagare,
                minimum. Men ibland, när stjärnorna är rätt, kan undantag göras
                angående enhetsinnehållet.
              </li>
              <li className="mt-2">
                <strong>Öl är din vän.</strong> <br></br>Samma typ av enhet på
                varje bar (öl eller annat med respekt för föregående regel, bara
                det är konsekvent).
              </li>
              <li className="mt-2">
                <strong>Inget kvitto - ingen chans på vinst.</strong> <br></br>
                Kvitton för varje inköpt öl på varje bar ska uppvisas efter
                loppet. Detta granskas noggrant.
              </li>
              <li className="mt-2">
                <strong>Hjälp i nöden.</strong> <br></br>Karta är din allierade
                och det är okej att hjälpa dina kamrater med intaget. Men att
                hålla dem på fötter är nog mer än nog.
              </li>
            </ol>
            <div className="flex w-full justify-center items-center my-16">
              <Image
                src="/images/sg_paragraph_dot_600x900.png"
                alt="Logo"
                width={50}
                height={75}
                priority
              />
            </div>
            <h2>Så, hur utförs denna ädla tävling?</h2>
            <p>
              Alla tävlande församlas vid en i förväg utvald bar. Därefter
              indelas de i små grupper om cirka 3-6 deltagare vardera. Varje
              grupp tilldelas en startbar genom lottning. På lekledarens signal
              beger sig varje grupp till sin respektive startbar, där samtliga
              gruppmedlemmar intar en &quot;stor stark&quot;. Därefter
              fortsätter de till de övriga förutbestämda barerna, i valfri
              ordning, där varje deltagare ytterligare förtär en &quot;stor
              stark&quot; på varje bar. Tävlingen avslutas på samma bar där
              starten ägde rum, och ännu en &quot;stor stark&quot; intas av
              varje deltagare. Tiden för varje grupp stoppas vid det exakta
              ögonblick då den siste i gruppen slutför sin dryck.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

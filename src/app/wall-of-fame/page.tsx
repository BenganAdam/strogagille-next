import ScoresTable from "@/components/ScoresTable/ScoresTable";
import { contenders } from "@/lib/data/contesters";
import { contests } from "@/lib/data/contests";
import Image from "next/image";
import Link from "next/link";

export default function WallOfFame() {
  const allContenders = contenders;
  const sortedContenders = allContenders.sort((a, b) => b.wins - a.wins);
  const allContests = contests;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden ">
      <div className="py-20 w-full flex justify-center mt-[125px]">
        <div className="mx-auto px-6 flex flex-col items-center">
          <h1>Wall of fame</h1>
          <div>
            <p className="mb-1">Till topplistan</p>
            <div className="flex items-start justify-center h-[55px]">
              <Link href={"#topplista"} className="w-[44px] ">
                <Image
                  src="/icons/arrow_circle_down_48dp.svg"
                  alt="Arrow down"
                  width={44}
                  height={44}
                  loading="lazy"
                  className="animate-bounce cursor-pointer"
                />
              </Link>
            </div>
          </div>
          <div className="max-w-[550px] mt-8">
            <div className="info-inner">
              <p>
                Hör upp, ärevördiga förkämpar av ölets rika värld! Framträd nu
                och låt oss skåda den storslagna &quot;Wall of Fame&quot;! Här
                samlas de djärva själar som, med osviklig tapperhet, omfamnar
                utmaningen som &quot;Strögagille Legacy&quot; har att erbjuda
                och triumferar över den dignitetsfyllda drycken. Denna hemsida
                är mer än bara ett kyligt register av namn – det är en episk
                saga om passion, samhörighet och odödliga äventyr.
              </p>
              <div className="signum-sectionis"></div>
              <p>
                De stolta vinnarna, edra segrar strålar som fyrverkerier i
                nattens skrud, och edra namn präglas in i historiens
                outtröttliga pergament. På &quot;Wall of Fame&quot; ekar edra
                bedrifter genom tidernas gång, och vi hyllar eder som hjältar i
                vår innersta själ. Låten edra triumfer vara en fyr som leder de
                äventyrslystna mot ära och ändlösa möjligheter. Edra segrar,
                mina vänner, är ej blott era egna – de inspirerar oss alla att
                kasta oss in i det okända och omfamna livets skönhet.
              </p>
              <div className="signum-sectionis"></div>
              <p>
                Så stig fram med stolthet, ty eder ära graveras ej bara i denna
                sida – den blir en strålande del av vår gemensamma ölensaga.
                &quot;Wall of Fame&quot; blir ett tidlöst monument över edert
                mod och eder hängivenhet. Låt det skrivas med guld och glans –
                att ni, genom era triumfer, har präglat en evig del av ölens
                historia. Höjen bägaren för er och för alla som vågar följa i
                edra fotspår! Välkomnen till &quot;Wall of Fame&quot; – där
                drömmar blir verklighet och äventyr blir legender för evigheten.
                Skål, mina vänner, och låt oss tillsammans fira ännu en
                fantastisk strävan!
              </p>
              <div className="quote">
                <p>
                  <em>
                    &quot;Uppå denna ärofyllda vägg ekar era bragder genom
                    tidens gång, och vi hyllar er som legender i vår kärlek till
                    den gyllene drycken.&quot;
                  </em>
                </p>
                <p className="quotee">
                  <i>- Strögagille mästare, c.a 1100 e.Kr.</i>
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-[750px]">
            <div className="flex flex-col md:flex-row w-full justify-center items-center my-8 gap-4">
              <div id="topplista">
                <Image
                  src="/images/knight_toast.png"
                  alt="Logo"
                  width={420}
                  height={420}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="max-w-[550px] w-full  mt-12">
            <h2 className="text-center">Topplista</h2>
            <ScoresTable contenders={sortedContenders} contests={allContests} />
          </div>
        </div>
      </div>
    </main>
  );
}

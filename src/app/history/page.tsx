import { contests } from "@/lib/data/contests";
import Card from "@/components/Card/Card";

export default function History() {
  const allContests = contests;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
      <div className="py-20 w-full flex justify-center mt-[125px]">
        <div className="mx-auto px-6 flex flex-col items-center">
          <h1>Bragder genom åren</h1>
          <div className="max-w-[650px] mt-8">
            {allContests.map((contest) => {
              return <Card contest={contest} key={contest.id} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

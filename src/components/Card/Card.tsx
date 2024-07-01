import Image from "next/image";

interface CardProps {
  contest: ICard;
}

export default function Card({ contest }: CardProps) {
  const thumbnail =
    contest.thumbnail.length > 0
      ? contest.thumbnail
      : "/images/sg_paragraph_600x900.png";
  return (
    <div className="w-full mt-8 border border-primary-yellow p-4">
      <div className="flex gap-6 flex-col sm:flex-row">
        <div className="w-[150px] h-[150px] flex items-center justify-center min-w-[150px] mx-auto sm:mx-0">
          <Image
            src={thumbnail}
            alt="Contest thumbnail"
            width={200}
            height={200}
            priority
            className={`h-[inherit] w-auto ${
              contest.thumbnail.length > 0 ? "min-w-[150px]" : ""
            } `}
          />
        </div>
        <div>
          <p className="font-light text-[12px] m-0">{contest.date}</p>
          <h2 className="text-base text-neutrals-white mt-1 relative after:bg-primary-yellow after:absolute after:bottom-0 after:h-[1px] after:w-full after:left-0 w-fit">
            {contest.name}
          </h2>
          <p className="text-sm my-1">
            <span className="text-primary-yellow">Start/slutbar: </span>
            {contest.startEndBar.name}
          </p>
          <p className="text-sm my-1">
            <span className="text-primary-yellow">Barer: </span>
            {contest.bars.map((bar, index) => {
              return index != 0 ? ", " + bar.name : bar.name;
            })}
          </p>
          <p className="text-sm my-1">
            <span className="text-primary-yellow">Vinnare: </span>
            {contest.winners.map((winner, index) => {
              return index != 0 ? ", " + winner.name : winner.name;
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

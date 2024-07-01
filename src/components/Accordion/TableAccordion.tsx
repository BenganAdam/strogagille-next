"use client";
import Image from "next/image";
import { useState } from "react";

interface TableAccordionProps {
  contender: IContender;
  contests: IContest[];
}

export default function TableAccordion({
  contender,
  contests,
}: TableAccordionProps) {
  const [isExpanded, setExpanded] = useState(false);
  const wonContests = [] as IContest[];
  contests.forEach((contest) => {
    contest.winners.forEach((winner) => {
      if (winner.id === contender.id) {
        wonContests.push(contest);
      }
    });
  });
  return (
    <tr
      className="cursor-pointer relative lg:after:bg-primary-yellow lg:after:opacity-50 lg:after:absolute lg:after:bottom-0 lg:after:h-[1px] lg:after:w-full lg:after:left-0 w-max"
      onClick={() => setExpanded(!isExpanded)}
    >
      <td className="text-left ">
        <h4 className="text-base text-neutrals-white my-4">{contender.name}</h4>
        <div
          className={`h-auto w-full mx-2 transition-all ${
            isExpanded
              ? "visible opacity-1 max-h-none mt-4 mb-6 duration-1000"
              : "invisible opacity-0 max-h-0 m-0 duration-0"
          }`}
        >
          <h5 className="text-sm text-primary-yellow mb-1">
            Vunna Strögagillen:
          </h5>
          <ul className="text-sm mt-1 ml-4 list-outside list-disc">
            {wonContests.map((wonContest) => {
              return (
                <li key={wonContest.id}>
                  {wonContest.name}
                  <span className="text-primary-yellow"> | </span>
                  <span className="text-[12px] opacity-60">
                    {wonContest.date}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </td>
      <td className="relative text-center pl-4 flex items-center justify-center">
        <p className="">{contender.wins}</p>
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <button>
            <Image
              src="/icons/arrow_forward_48dp.svg"
              alt="Arrow forward"
              width={15}
              height={15}
              loading="lazy"
              className={` transition-all ${
                isExpanded ? "rotate-90" : "rotate-0"
              }`}
            />
          </button>
        </div>
      </td>
    </tr>
  );
}

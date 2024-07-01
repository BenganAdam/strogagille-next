import TableAccordion from "../Accordion/TableAccordion";

interface ScoresTableProps {
  contenders: IContender[];
  contests: IContest[];
}

export default function ScoresTable({
  contenders,
  contests,
}: ScoresTableProps) {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="text-left pr-4">
            <h3 className="relative text-base text-neutrals-white after:bg-primary-yellow after:absolute after:bottom-0 after:h-[1px] after:w-full after:left-0 w-fit">
              Namn
            </h3>
          </th>
          <th className="pl-4">
            <h3 className="relative text-base ml-auto text-neutrals-white after:bg-primary-yellow after:absolute after:bottom-0 after:h-[1px] after:w-full after:left-0 w-max">
              Antal vinster
            </h3>
          </th>
        </tr>
      </thead>
      <tbody>
        {contenders.map((contender) => {
          if (contender.wins > 0) {
            return (
              <TableAccordion
                contender={contender}
                contests={contests}
                key={contender.id}
              />
            );
          }
        })}
      </tbody>
    </table>
  );
}

import { CaretIcon } from "@/icons";
import { cn } from "@/utils";
import { useCallback } from "react";

interface TableHeader {
  id: number;
  title: string | React.ReactNode;
  className?: string;
  sortKey?: string;
}
interface TableProps {
  tableHeaders: TableHeader[];
  sortKey?: string;
  sortOrder?: "asc" | "desc";
  onSort?: (key: string) => void;
  children: React.ReactNode;
}

export default function Table({
  tableHeaders,
  sortKey,
  sortOrder = "asc",
  onSort,
  children,
}: TableProps) {
  const handleSort = useCallback(
    (key?: string) => {
      if (key && onSort) onSort(key);
    },
    [onSort]
  );

  return (
    <div className="no-scrollbar overflow-hidden max-w-[85vw] md:max-w-[90vw] overflow-x-auto">
      <table className="w-full min-w-full text-sm text-white  border-spacing-x-[1rem] border-separate overflow-x-auto -ml-[.5rem] ">
        <thead className="text-table  text-sm capitalize text-grey-75/[62%] font-medium text-[1.3rem] leading-[1.6rem]">
          <tr>
            {tableHeaders.map((header) => {
              const isActive = header.sortKey && sortKey === header.sortKey;
              return (
                <th
                  key={header.id}
                  scope="col"
                  className={cn(
                    "py-[1.3rem] text-left border-b-[2px] border-b-grey-50/[20%]",
                    header.className
                  )}
                >
                  <div className="flex items-center gap-[.3rem]">
                    {header.title}
                    {header.sortKey && (
                      <span
                        className="cursor-pointer p-[.6rem] inline-flex items-center"
                        onClick={() => handleSort(header.sortKey)}
                      >
                        <CaretIcon
                          className={cn(
                            "transition-transform",
                            isActive && sortOrder === "desc" && "rotate-180"
                          )}
                        />
                      </span>
                    )}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

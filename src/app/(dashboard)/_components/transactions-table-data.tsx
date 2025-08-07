import { cn, formatAmount } from "@/utils";

export interface Transaction {
  id: string | number;
  date: string;
  remark: string;
  amount: number;
  currency: string;
  type: "Credit" | "Debit";
}

export default function TransactionsTableData({
  amount,
  currency,
  date,
  remark,
  type,
}: Transaction) {
  return (
    <tr className="text-grey-300 text-[1.5rem] leading-[2rem] tracking-[-.5%] [&>td]:border-b-[2px] [&>td]:border-grey-50/[20%] w-full ">
      <td className="w-[48%] py-[1.3rem] text-left">{date}</td>
      <td className="w-[18%] py-[1.3rem] text-left">{remark}</td>
      <td className="w-[12.3%] py-[1.3rem] text-left">
        {formatAmount(amount)}
      </td>
      <td className="w-[12.3%] py-[1.3rem] text-left">{currency}</td>
      <td className="w-fit py-[1.3rem] text-left">
        <div className="flex items-center gap-[.8rem] bg-grey-100/[9%] px-[.8rem] py-[.4rem] rounded-[1.6rem] ">
          <span
            className={cn("bg-green-300 size-[.6rem] rounded-full", {
              "bg-red-300": type === "Debit",
            })}
          />
          <small className="font-medium text-[1.5rem] leading-[2rem]">
            {type}
          </small>
        </div>
      </td>
    </tr>
  );
}

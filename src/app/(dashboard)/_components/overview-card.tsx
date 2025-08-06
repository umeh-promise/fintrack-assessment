import { DotsHorizontalIcon } from "@/icons";
import { formatAmount } from "@/utils";

export type Summary = {
  id: number;
  type: "Total Balance" | "Total Credits" | "Total Debits" | "Transactions";
  amount: number;
  amountChange: string;
};

export default function OverviewCard({ type, amount, amountChange }: Summary) {
  return (
    <article className="p-[2.4rem] bg-grey-100/[9%] rounded-[2rem] 0] w-full  ">
      <h4 className="text-grey-300  font-bold text-[1.7rem] leading-[2.4rem] tracking-[-0.5%] inline-flex items-center justify-between w-full mb-[1.8rem]">
        {type}{" "}
        <button type="button" className="cursor-pointer">
          <DotsHorizontalIcon />
        </button>
      </h4>
      <h2 className="text-[3.4rem] leading-[4rem] tracking-[-2%] font-bold mb-[.4rem] ">
        {type !== "Transactions" && "$"}
        {formatAmount(amount)}
      </h2>
      <p className="text-green-400 text-[1.3rem] leading-[1.6rem]">
        {amountChange}%
      </p>
    </article>
  );
}

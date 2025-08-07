import { useState } from "react";
import OverviewCard, { type Summary } from "./overview-card";
import Table from "./table";
import TransactionsTableData, { Transaction } from "./transactions-table-data";

const summary: Summary[] = [
  {
    id: 1,
    type: "Total Balance",
    amount: 12_345,
    amountChange: "+5",
  },
  {
    id: 2,
    type: "Total Credits",
    amount: 7_890,
    amountChange: "+3",
  },
  {
    id: 3,
    type: "Total Debits",
    amount: 4_455,
    amountChange: "-2",
  },
  {
    id: 4,
    type: "Transactions",
    amount: 150,
    amountChange: "+10",
  },
];

const transactions: Transaction[] = [
  {
    id: 1,
    date: "2023-10-01",
    remark: "Salary",
    amount: 3000,
    currency: "USD",
    type: "Credit",
  },
  {
    id: 2,
    date: "2023-10-02",
    remark: "Groceries",
    amount: -150,
    currency: "USD",
    type: "Debit",
  },
  {
    id: 3,
    date: "2023-10-03",
    remark: "Gym Membership",
    amount: -50,
    currency: "USD",
    type: "Debit",
  },
  {
    id: 4,
    date: "2023-10-04",
    remark: "Dinner",
    amount: -40,
    currency: "USD",
    type: "Debit",
  },
  {
    id: 5,
    date: "2023-10-05",
    remark: "Movie Tickets",
    amount: -30,
    currency: "USD",
    type: "Debit",
  },
  {
    id: 6,
    date: "2023-10-06",
    remark: "Rent",
    amount: -1200,
    currency: "USD",
    type: "Debit",
  },
  {
    id: 7,
    date: "2023-10-07",
    remark: "Utilities",
    amount: -100,
    currency: "USD",
    type: "Debit",
  },
  {
    id: 8,
    date: "2023-10-08",
    remark: "Car Payment",
    amount: -400,
    currency: "USD",
    type: "Debit",
  },
  {
    id: 9,
    date: "2023-10-09",
    remark: "Insurance",
    amount: -200,
    currency: "USD",
    type: "Debit",
  },
];

export default function Transactions() {
  const [sortKey, setSortKey] = useState<string>("date");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const sortedData = [...transactions].sort((a, b) => {
    const aVal = a[sortKey as keyof Transaction];
    const bVal = b[sortKey as keyof Transaction];

    if (typeof aVal === "number" && typeof bVal === "number") {
      return sortOrder === "asc" ? aVal - bVal : bVal - aVal;
    }

    const aStr = aVal?.toString().toLowerCase() ?? "";
    const bStr = bVal?.toString().toLowerCase() ?? "";
    return sortOrder === "asc"
      ? aStr.localeCompare(bStr)
      : bStr.localeCompare(aStr);
  });

  return (
    <section className="space-y-[1.8rem] w-full">
      <h3 className="text-[2rem] leading-[2.4rem] tracking-[-2%] font-bold">
        All Transactions
      </h3>

      <Table
        tableHeaders={[
          { id: 1, title: "Date", sortKey: "date", className: "w-[48%]" },
          { id: 2, title: "Remark", sortKey: "remark", className: "w-[18%]" },
          {
            id: 3,
            title: "Amount",
            sortKey: "amount",
            className: "w-[12.3%]",
          },
          {
            id: 4,
            title: "Currency",
            sortKey: "currency",
            className: "w-[12.3%]",
          },
          { id: 5, title: "Type", sortKey: "type", className: "w-fit" },
        ]}
        sortKey={sortKey}
        sortOrder={sortOrder}
        onSort={handleSort}
      >
        {sortedData.map((transaction) => (
          <TransactionsTableData key={transaction.id} {...transaction} />
        ))}
      </Table>
    </section>
  );
}

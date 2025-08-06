import { CaretIcon, DotsHorizontalIcon } from "@/icons";
import DashboardAvatars from "./dashboard-avatars";

export default function DashboardHeader() {
  return (
    <header className="grid gap-[2.4rem]">
      <hgroup className="flex flex-col md:flex-row lg:items-center justify-between">
        <div className="flex items-center gap-[1.6rem] ">
          <h2 className="tracking-[-2%] text-[2rem] lg:text-[3.4rem] leading-[4rem] font-bold text-grey-300 inline-flex gap-[.4rem] items-center ">
            Wallet Ledger
            <i className="size-[.4rem] px-[.6rem] py-[.9rem] text-grey-300 ">
              <CaretIcon />
            </i>
          </h2>
          <div className="flex items-center gap-[.8rem] bg-grey-100/[9%] px-[.8rem] py-[.4rem] rounded-[1.6rem] ">
            <span className="bg-green-300 size-[.6rem] rounded-full " />
            <small className="font-medium text-[1.5rem] leading-[2rem]">
              Active
            </small>
          </div>
        </div>
        <div className="flex gap-[1.2rem] items-center">
          <button
            type="button"
            className="bg-green-200 text-grey-700 px-[1.8rem] py-[.8rem] rounded-[1.6rem] font-medium"
          >
            Share
          </button>
          <i className="border-[.15rem] border-grey-50/[20%] rounded-[1.6rem] p-[.7rem] ">
            <DotsHorizontalIcon />
          </i>
        </div>
      </hgroup>
      <DashboardAvatars />
    </header>
  );
}

import Wrapper from "./_components/wrapper";
import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";

export default function AdminLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <Wrapper>
      <Navbar />
      <section className="h-full overflow-hidden  pb-[.8rem]  lg:gap-[4.8rem] text-grey-300 md:grid xl:grid-cols-[32rem_1fr] lg:grid-cols-[28rem_1fr] md:pb-[8rem] [&>*]:pt-[2.2rem] lg:[&>*]:py-[2.8rem] ">
        <Sidebar />
        <main className="transparent-scrollbar overflow-y-auto px-[1rem] md:px-[2.4rem] lg:px-[2.7rem]">
          {children}
        </main>
      </section>
    </Wrapper>
  );
}

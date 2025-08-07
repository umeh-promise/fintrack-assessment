import Image from "next/image";

const avatars = [
  {
    id: 1,
    src: "/img/avatar_1.svg",
    name: "Ava",
  },
  {
    id: 2,
    src: "/img/avatar_2.svg",
    name: "Sarah",
  },
  {
    id: 3,
    src: "/img/avatar_3.svg",
    name: "Liam",
  },
  {
    id: 4,
    src: "/img/avatar_4.svg",
    name: "Noah",
  },
  {
    id: 5,
    src: "/img/avatar_1.svg",
    name: "Sarah",
  },
  {
    id: 6,
    src: "/img/avatar_1.svg",
    name: "Sarah",
  },
];

export default function DashboardAvatars() {
  const additionalCount = 9;

  return (
    <section className="flex items-center space-x-4">
      <div className="flex -space-x-[1rem]">
        {avatars.slice(0, 4).map((avatar, index) => (
          <figure
            className="relative "
            key={avatar.id}
            style={{ zIndex: 4 - index }}
          >
            <Image
              src={avatar.src}
              alt={avatar.name}
              width={32}
              height={32}
              className=" rounded-full size-[3.2rem] object-cover border-[2px] border-white"
            />
          </figure>
        ))}
      </div>
      <span className="text-gray-600">
        Ava, Liam, Noah + {avatars.length - 3 + additionalCount} others
      </span>
    </section>
  );
}

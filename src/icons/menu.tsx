type MenuIconProps = {
  type?: "open" | "close";
};

export function MenuIcon({ type = "open" }: MenuIconProps) {
  return type === "open" ? (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 12.25H21M3 6.25H21M3 18.25H21"
        stroke="#1B2528"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.52557 7.03281L22.7754 20.5893M3.82159 18.9112L24.6525 7.50358"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

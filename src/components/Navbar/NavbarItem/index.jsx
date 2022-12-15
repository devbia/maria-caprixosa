import Link from "next/link";

export default function NavbarItem({ text, path, selected = false, mobile = false }) {
  return (
    <Link href={path} className={`
    text-normal font-bold uppercase
    ${selected && !mobile && "underline underline-offset-8"}
    `}>
      {text}
    </Link>
  );
}
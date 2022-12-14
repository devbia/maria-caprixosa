import Link from "next/link";

export default function NavbarItem({ text, path, selected = false, mobile = false }) {
  return (
    <Link href={path} className={`
    text-dark text-uppercase fw-bold 
    text-decoration-none
    ${mobile && 'border-bottom '}
    ${selected && !mobile && 'menu-item-selected'}
    `}>
      {text}
    </Link>
  );
}
import { Link, usePathname } from "@/i18n/navigation";

function NavLinks({ label, href, isMenuOpen }) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`px-3 py-2 group relative ${isActive ? "nav-link-active" : ""}`}
    >
      {label}
      {!isActive && (
        <span
          className={`absolute inset-x-2 bottom-0 h-0.5 bg-orange-500 scale-x-0 ${isMenuOpen ? "group-hover:scale-x-75" : "group-hover:scale-x-100"} origin-left rtl:origin-right transition-transform duration-400`}
        />
      )}
    </Link>
  );
}

export default NavLinks;

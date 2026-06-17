import Link from "next/link";

type Active = "home" | "resume" | "pottery";

export default function Nav({ active }: { active: Active }) {
  return (
    <nav className="topnav">
      <ul>
        <li>
          <Link href="/" className={active === "home" ? "active" : undefined}>
            home
          </Link>
        </li>
        <li>
          <Link href="/resume" className={active === "resume" ? "active" : undefined}>
            résumé
          </Link>
        </li>
        <li>
          <Link href="/pottery" className={active === "pottery" ? "active" : undefined}>
            pottery
          </Link>
        </li>
        <li>
          {/* Quartz garden is static output placed at /garden by the build (not a Next route) */}
          <a href="/garden/">digital garden</a>
        </li>
      </ul>
    </nav>
  );
}

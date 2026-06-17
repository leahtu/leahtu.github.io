import type { Metadata } from "next";
import Nav from "../components/Nav";

export const metadata: Metadata = {
  title: "Pottery — Leah Tu",
  description: "Leah Tu's pottery — vessels and pots.",
};

export default function Pottery() {
  return (
    <div className="subpage">
      <div className="subpage-bg" aria-hidden="true">
        <span className="orb orb-1" />
        <span className="orb orb-2" />
        <span className="orb orb-3" />
        <span className="orb orb-4" />
        <span className="orb orb-5" />
      </div>

      <Nav active="pottery" />

      <div className="content content--page">
        <section className="section">
          <div className="wrap reveal">
            <p style={{ textAlign: "center" }}>coming soon.</p>
          </div>
        </section>

        <footer className="site-footer">
          <span>© {new Date().getFullYear()} Leah Tu</span>
        </footer>
      </div>
    </div>
  );
}

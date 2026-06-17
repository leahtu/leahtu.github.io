import type { Metadata } from "next";
import Nav from "../components/Nav";

export const metadata: Metadata = {
  title: "Résumé — Leah Tu",
  description: "Leah Tu's résumé — product management experience, projects, and skills.",
};

export default function Resume() {
  return (
    <div className="subpage">
      <div className="subpage-bg" aria-hidden="true">
        <span className="orb orb-1" />
        <span className="orb orb-2" />
        <span className="orb orb-3" />
        <span className="orb orb-4" />
        <span className="orb orb-5" />
      </div>

      <Nav active="resume" />

      <div className="content content--page">
        <section className="section">
          <div className="wrap reveal">
            <div className="page-head">
              <div className="page-actions">
                <a className="btn btn-primary" href="/resume.pdf" download>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                  </svg>
                  Download PDF
                </a>
                <a
                  className="btn"
                  href="https://www.linkedin.com/in/leahtu/"
                  target="_blank"
                  rel="noopener"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="resume-img" src="/images/resume.png" alt="Leah Tu résumé" />
          </div>
        </section>

        <footer className="site-footer">
          <span>© {new Date().getFullYear()} Leah Tu</span>
        </footer>
      </div>
    </div>
  );
}

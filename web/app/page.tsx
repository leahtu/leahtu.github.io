import Nav from "./components/Nav";

export default function Home() {
  return (
    <>
      <Nav active="home" />

      <section className="hero" id="hero">
        <div className="glows" aria-hidden="true">
          <span className="orb orb-1" />
          <span className="orb orb-2" />
          <span className="orb orb-3" />
          <span className="orb orb-4" />
          <span className="orb orb-5" />
        </div>
        <div className="hero-inner">
          <h1>Leah Tu</h1>
          <p className="role">a life of making</p>
        </div>
        <div className="scroll-cue" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </section>

      <div className="content content--home">
        <section className="section about">
          <div className="wrap reveal">
            <p className="eyebrow">about</p>
            <p className="lead">
              Product manager at Microsoft and ceramic artist based in Seattle. I like
              creating things with my hands and trying new things.
            </p>
            <p>
              When I&apos;m not working or in the studio, I&apos;m usually running, hiking,
              playing with friends, watching movies, finding my next yummy bite, or curating
              the perfect playlist.
            </p>
            <p className="nowrap-line">
              This site is a collection of my work, ceramics, and other fun stuff{"\u00A0"}:)
            </p>
          </div>
        </section>

        <section className="section contact">
          <div className="wrap reveal">
            <p className="eyebrow">say hi</p>
            <p className="contact-line">
              Email:{" "}
              <a className="contact-email" href="mailto:tu.leah.s@gmail.com">
                tu.leah.s@gmail.com
              </a>
            </p>
            <p className="contact-line">
              Instagram:{" "}
              <a
                className="contact-email"
                href="https://www.instagram.com/leahceramics"
                target="_blank"
                rel="noopener"
              >
                @leahceramics
              </a>
            </p>
          </div>
        </section>

        <footer className="site-footer">
          <span>© {new Date().getFullYear()} Leah Tu</span>
        </footer>
      </div>
    </>
  );
}

// Hero fade-on-scroll + nav reveal + scroll reveal
(function () {
  function init() {
    // Fade the full-screen hero away as you scroll into the about section,
    // and only reveal the nav pill once we've scrolled toward the about.
    var hero = document.getElementById("hero");
    var nav = document.querySelector(".topnav");
    if (hero) {
      if (nav) { nav.classList.add("is-hidden"); }
      var onScroll = function () {
        var vh = window.innerHeight || 1;
        var p = Math.min(window.scrollY / (vh * 0.85), 1);
        hero.style.opacity = String(1 - p);
        hero.style.transform = "scale(" + (1 + p * 0.06) + ")";
        if (nav) { nav.classList.toggle("is-hidden", window.scrollY < vh * 0.55); }
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    // Toggle a "scrolled" class on the body (used for the subpage frosted top bar).
    var onDocScroll = function () {
      document.body.classList.toggle("scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onDocScroll, { passive: true });
    onDocScroll();

    var reveals = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && reveals.length) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      reveals.forEach(function (el) { io.observe(el); });
    } else {
      reveals.forEach(function (el) { el.classList.add("is-visible"); });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

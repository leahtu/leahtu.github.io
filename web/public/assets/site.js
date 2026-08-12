(() => {
  const hero = document.getElementById("hero");
  const nav = document.querySelector(".topnav");
  const subpage = document.querySelector(".subpage");
  let framePending = false;

  const updateScrollEffects = () => {
    const viewportHeight = window.innerHeight || 1;
    const scrollTop = window.scrollY;

    if (hero) {
      const progress = Math.min(scrollTop / (viewportHeight * 0.85), 1);
      hero.style.opacity = String(1 - progress);
      hero.style.transform = `scale(${1 + progress * 0.06})`;
      nav?.classList.toggle("is-hidden", scrollTop < viewportHeight * 0.55);
    }

    subpage?.classList.toggle("scrolled", scrollTop > 8);
    framePending = false;
  };

  const requestScrollUpdate = () => {
    if (!framePending) {
      framePending = true;
      requestAnimationFrame(updateScrollEffects);
    }
  };

  window.addEventListener("scroll", requestScrollUpdate, { passive: true });
  updateScrollEffects();

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
})();

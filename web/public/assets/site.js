(() => {
  const hero = document.getElementById("hero");
  const nav = document.querySelector(".topnav");
  const subpage = document.querySelector(".subpage");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const fadeResponseMs = 75;
  let heroProgress;
  let previousFrameTime;
  let framePending = false;

  const updateScrollEffects = (frameTime) => {
    const viewportHeight = window.innerHeight || 1;
    const scrollTop = window.scrollY;
    let shouldContinue = false;

    if (hero) {
      const targetProgress = Math.min(scrollTop / (viewportHeight * 0.85), 1);

      if (heroProgress === undefined || prefersReducedMotion.matches) {
        heroProgress = targetProgress;
      } else {
        const elapsed = Math.min(frameTime - previousFrameTime, 100);
        const blend = 1 - Math.exp(-elapsed / fadeResponseMs);
        heroProgress += (targetProgress - heroProgress) * blend;

        if (Math.abs(targetProgress - heroProgress) < 0.001) {
          heroProgress = targetProgress;
        } else {
          shouldContinue = true;
        }
      }

      hero.style.opacity = String(1 - heroProgress);
      hero.style.transform = `scale(${1 + heroProgress * 0.06})`;
      nav?.classList.toggle("is-hidden", scrollTop < viewportHeight * 0.55);
    }

    subpage?.classList.toggle("scrolled", scrollTop > 8);
    previousFrameTime = frameTime;

    if (shouldContinue) {
      requestAnimationFrame(updateScrollEffects);
    } else {
      framePending = false;
    }
  };

  const requestScrollUpdate = () => {
    if (!framePending) {
      framePending = true;
      requestAnimationFrame(updateScrollEffects);
    }
  };

  window.addEventListener("scroll", requestScrollUpdate, { passive: true });
  window.addEventListener("resize", requestScrollUpdate);
  requestScrollUpdate();

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
})();

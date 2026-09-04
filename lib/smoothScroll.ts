function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function smoothScrollTo(targetY: number, duration = 600) {
  const root = document.documentElement;
  const previousScrollBehavior = root.style.scrollBehavior;
  // Our own rAF loop does the easing; without this, each per-frame scrollTo()
  // call inherits the global CSS `scroll-behavior: smooth` and gets smoothed
  // again by the browser on top of it, compounding into sluggish motion.
  root.style.scrollBehavior = "auto";

  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  function step(now: number) {
    const progress = Math.min((now - startTime) / duration, 1);
    window.scrollTo(0, startY + distance * easeOutCubic(progress));
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      root.style.scrollBehavior = previousScrollBehavior;
    }
  }

  requestAnimationFrame(step);
}

export function smoothScrollToElement(el: HTMLElement, offset = 96, duration = 600) {
  const targetY = window.scrollY + el.getBoundingClientRect().top - offset;
  smoothScrollTo(targetY, duration);
}

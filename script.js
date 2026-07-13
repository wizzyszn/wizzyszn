const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const revealItems = document.querySelectorAll(".reveal");
const cursorOrb = document.querySelector(".cursor-orb");
const cursorRing = document.querySelector(".cursor-ring");
const lenis = window.Lenis
  ? new Lenis({
      duration: 1.15,
      easing: (time) => Math.min(1, 1.001 - Math.pow(2, -10 * time)),
      anchors: {
        offset: -18,
      },
    })
  : null;

function raf(time) {
  lenis?.raf(time);
  requestAnimationFrame(raf);
}

if (lenis) {
  requestAnimationFrame(raf);
}

if (
  cursorOrb &&
  cursorRing &&
  window.matchMedia("(pointer: fine)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  const cursor = {
    targetX: window.innerWidth / 2,
    targetY: window.innerHeight / 2,
    orbX: window.innerWidth / 2,
    orbY: window.innerHeight / 2,
    ringX: window.innerWidth / 2,
    ringY: window.innerHeight / 2,
  };
  const hoverTargets = "a, button, .project-card, .timeline-item, .skill-panel, .proof-strip div, .portrait-frame";

  document.body.classList.add("cursor-ready");

  window.addEventListener("pointermove", (event) => {
    cursor.targetX = event.clientX;
    cursor.targetY = event.clientY;
  });

  document.addEventListener("pointerover", (event) => {
    if (event.target instanceof Element && event.target.closest(hoverTargets)) {
      document.body.classList.add("cursor-hover");
    }
  });

  document.addEventListener("pointerout", (event) => {
    if (
      event.target instanceof Element &&
      event.target.closest(hoverTargets) &&
      !(event.relatedTarget instanceof Element && event.relatedTarget.closest(hoverTargets))
    ) {
      document.body.classList.remove("cursor-hover");
    }
  });

  document.addEventListener("pointerleave", () => {
    document.body.classList.remove("cursor-ready", "cursor-hover");
  });

  document.addEventListener("pointerenter", () => {
    document.body.classList.add("cursor-ready");
  });

  function animateCursor() {
    cursor.orbX += (cursor.targetX - cursor.orbX) * 0.42;
    cursor.orbY += (cursor.targetY - cursor.orbY) * 0.42;
    cursor.ringX += (cursor.targetX - cursor.ringX) * 0.16;
    cursor.ringY += (cursor.targetY - cursor.ringY) * 0.16;

    cursorOrb.style.transform = `translate3d(${cursor.orbX}px, ${cursor.orbY}px, 0) translate(-50%, -50%)`;
    cursorRing.style.transform = `translate3d(${cursor.ringX}px, ${cursor.ringY}px, 0) translate(-50%, -50%)`;

    requestAnimationFrame(animateCursor);
  }

  requestAnimationFrame(animateCursor);
}

if (window.lucide) {
  window.lucide.createIcons({
    attrs: {
      "stroke-width": 2,
    },
  });
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      siteNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

if (revealItems.length && "IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0,
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

// ── Typewriter effect ──
const typewriterEl = document.querySelector(".typewriter");
if (typewriterEl) {
  const fullText = typewriterEl.textContent;
  typewriterEl.textContent = "";

  function typeIn(pos) {
    if (pos <= fullText.length) {
      typewriterEl.textContent = fullText.slice(0, pos);
      setTimeout(() => typeIn(pos + 1), 60);
    } else {
      setTimeout(() => eraseOut(fullText.length), 2000);
    }
  }

  function eraseOut(pos) {
    if (pos >= 1) {
      typewriterEl.textContent = fullText.slice(0, pos);
      setTimeout(() => eraseOut(pos - 1), 35);
    } else {
      setTimeout(() => typeIn(1), 500);
    }
  }

  typewriterEl.textContent = fullText.charAt(0);
  setTimeout(() => typeIn(1), 600);
}

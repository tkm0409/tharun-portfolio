import { profile } from '../data/site';

export const reduceMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

export function hop(el: Element | null) {
  if (!el) return;
  el.classList.remove('hop');
  void (el as HTMLElement).offsetWidth;
  el.classList.add('hop');
}

let toastTimer: number | undefined;
export function toast(message: string) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => el.classList.remove('show'), 2200);
}

export async function copyEmail() {
  try {
    await navigator.clipboard.writeText(profile.email);
    toast('Email copied to clipboard');
  } catch {
    toast(profile.email);
  }
  document.dispatchEvent(new CustomEvent('email-copied'));
}

export function toggleTheme(origin?: HTMLElement | null) {
  const root = document.documentElement;
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  const apply = () => {
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch { /* storage unavailable */ }
  };
  const doc = document as Document & { startViewTransition?: (cb: () => void) => { ready: Promise<void> } };
  if (!doc.startViewTransition || reduceMotion()) return apply();

  const r = origin?.getBoundingClientRect();
  const x = r ? r.left + r.width / 2 : innerWidth / 2;
  const y = r ? r.top + r.height / 2 : 0;
  const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  doc.startViewTransition(apply).ready.then(() => {
    root.animate(
      { clipPath: [`circle(0 at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
      { duration: 550, easing: 'cubic-bezier(.4,0,.2,1)', pseudoElement: '::view-transition-new(root)' },
    );
  });
}

export function initGlobal() {
  // Reveal-on-scroll
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }),
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));

  // Mascot eyes follow the pointer (mouse devices only)
  if (matchMedia('(hover: hover)').matches && !reduceMotion()) {
    let frame = 0, px = 0, py = 0;
    const update = () => {
      frame = 0;
      document.querySelectorAll<SVGGElement>('.mascot:not([data-mood]) .look').forEach((p) => {
        const r = p.getBoundingClientRect();
        if (!r.width || r.bottom < 0 || r.top > innerHeight) return;
        const dx = px - (r.left + r.width / 2), dy = py - (r.top + r.height / 2);
        const d = Math.hypot(dx, dy) || 1, m = Math.min(3, d / 50);
        p.style.transform = `translate(${(dx / d) * m}px, ${(dy / d) * m}px)`;
      });
    };
    addEventListener('pointermove', (e) => {
      px = e.clientX; py = e.clientY;
      if (!frame) frame = requestAnimationFrame(update);
    }, { passive: true });
  }

  // Shared buttons
  document.querySelectorAll('[data-copy-email]').forEach((b) => b.addEventListener('click', copyEmail));
  document.querySelectorAll<HTMLElement>('[data-theme-toggle]').forEach((b) => b.addEventListener('click', () => toggleTheme(b)));

  // Tapping any standalone mascot makes it hop
  document.querySelectorAll('[data-poke]').forEach((el) => el.addEventListener('click', () => hop(el)));
}

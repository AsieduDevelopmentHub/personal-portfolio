export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-carbon/80 py-10 text-center text-sm text-glass">
      <p>
        © {new Date().getFullYear()} Asiedu Minta Kwaku. Crafted with Next.js,
        GSAP, and Three.js.
      </p>
    </footer>
  );
}

import Container from "@/components/ui/Container";
import { logos } from "@/data/content";

export default function Logos() {
  return (
    <section className="py-10 border-y border-black/5 bg-zinc-50/60 dark:border-white/10 dark:bg-white/[0.02]">
      <Container className="flex flex-col items-center gap-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
          Được tin dùng bởi các team tại
        </p>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-lg font-bold text-zinc-400 dark:text-zinc-600">
          {logos.map((logo) => (
            <span key={logo} className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">
              {logo}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

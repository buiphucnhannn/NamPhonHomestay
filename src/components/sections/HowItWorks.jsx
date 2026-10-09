import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { steps, stats } from "@/data/content";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-zinc-50 dark:bg-white/[0.02] border-y border-black/5 dark:border-white/10 scroll-mt-20">
      <SectionHeading
        eyebrow="Cách hoạt động"
        title="Triển khai trong 3 bước đơn giản"
        description="Không cần setup phức tạp. Quy trình đã được tối ưu cho dev lẫn marketer."
      />
      <Container className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.step} className="rounded-2xl bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 p-6">
            <span className="text-4xl font-extrabold text-zinc-200 dark:text-zinc-700">{s.step}</span>
            <h3 className="mt-3 font-semibold text-lg">{s.title}</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{s.description}</p>
          </div>
        ))}
      </Container>

      <Container className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 rounded-2xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 p-8">
        {stats.map((st) => (
          <div key={st.label} className="text-center">
            <div className="text-3xl font-extrabold">{st.value}</div>
            <div className="mt-1 text-sm opacity-70">{st.label}</div>
          </div>
        ))}
      </Container>
    </section>
  );
}

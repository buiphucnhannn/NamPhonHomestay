import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { features } from "@/data/content";

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 scroll-mt-20">
      <SectionHeading
        eyebrow="Tính năng"
        title="Mọi thứ bạn cần cho một landing chuyển đổi cao"
        description="Cấu trúc chuyên nghiệp, tách riêng data – UI – layout giúp bạn scale nhanh mà không rối code."
      />
      <Container className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all dark:border-white/10 dark:bg-white/[0.03]"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900">
              <f.icon size={20} />
            </div>
            <h3 className="mb-2 font-semibold text-lg">{f.title}</h3>
            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {f.description}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}

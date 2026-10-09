"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/data/content";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 sm:py-28 scroll-mt-20">
      <SectionHeading
        eyebrow="FAQ"
        title="Câu hỏi thường gặp"
        description="Mọi thứ bạn cần biết trước khi bắt đầu."
      />
      <Container className="mt-12 max-w-3xl flex flex-col gap-3">
        {faqs.map((f, i) => {
          const open = i === openIndex;
          return (
            <div
              key={f.q}
              className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/[0.03] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(open ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium"
              >
                {f.q}
                <ChevronDown
                  size={18}
                  className={cn("shrink-0 transition-transform", open && "rotate-180")}
                />
              </button>
              <div
                className={cn(
                  "grid transition-all",
                  open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {f.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </Container>
    </section>
  );
}

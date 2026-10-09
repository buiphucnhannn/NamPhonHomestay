"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { pricing } from "@/data/content";
import { cn } from "@/lib/utils";

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-zinc-50 dark:bg-white/[0.02] border-y border-black/5 dark:border-white/10 scroll-mt-20">
      <SectionHeading
        eyebrow="Bảng giá"
        title="Giá đơn giản, minh bạch"
        description="Bắt đầu miễn phí, nâng cấp khi bạn cần nhiều hơn."
      />

      <div className="mt-8 flex justify-center">
        <div className="inline-flex rounded-full border border-black/10 dark:border-white/15 p-1 text-sm font-medium">
          <button
            onClick={() => setYearly(false)}
            className={cn(
              "rounded-full px-4 py-2",
              !yearly && "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
            )}
          >
            Theo tháng
          </button>
          <button
            onClick={() => setYearly(true)}
            className={cn(
              "rounded-full px-4 py-2",
              yearly && "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
            )}
          >
            Theo năm -17%
          </button>
        </div>
      </div>

      <Container className="mt-10 grid gap-6 md:grid-cols-3">
        {pricing.map((p) => (
          <div
            key={p.name}
            className={cn(
              "flex flex-col rounded-2xl border p-6",
              p.featured
                ? "border-zinc-900 bg-zinc-900 text-white shadow-xl scale-[1.02] dark:bg-white dark:text-zinc-900 dark:border-white"
                : "border-black/10 bg-white dark:border-white/10 dark:bg-white/[0.03]"
            )}
          >
            <h3 className="font-semibold">{p.name}</h3>
            <div className="mt-2 text-3xl font-extrabold">
              {yearly ? p.priceYearly : p.priceMonthly}
              {p.priceMonthly !== "Liên hệ" && (
                <span className="text-sm font-normal opacity-60">
                  {yearly ? "/năm" : "/tháng"}
                </span>
              )}
            </div>
            <p className="mt-2 text-sm opacity-70">{p.description}</p>
            <ul className="mt-6 flex flex-col gap-2.5 text-sm flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check size={16} className="mt-0.5 shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <Button
              href="#cta"
              variant={p.featured ? "secondary" : "primary"}
              className={cn(
                "mt-6 w-full",
                p.featured && "dark:!bg-zinc-900 dark:!text-white"
              )}
            >
              {p.cta}
            </Button>
          </div>
        ))}
      </Container>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Button } from "@/components/ui/Button";

export function CaseNavActions({ backHref, contactHref }: { backHref: string; contactHref: string }) {
  const [stuck, setStuck] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setStuck(!entry.isIntersecting), {
      threshold: 0,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={ref} className="flex w-full items-center justify-between">
        <Button href={backHref} label="Назад" icon={BiArrowBack} />
        <Button href={contactHref} label="Написать" iconSrc="/assets/icons/telegram.svg" variant="primary" />
      </div>
      <div
        className={`fixed inset-x-0 top-0 z-40 bg-white transition-transform duration-200 ${
          stuck ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto flex h-20 w-full max-w-[1024px] items-center justify-between px-4 sm:px-0">
          <Button href={backHref} label="Назад" icon={BiArrowBack} />
          <Button href={contactHref} label="Написать" iconSrc="/assets/icons/telegram.svg" variant="primary" />
        </div>
      </div>
    </>
  );
}

import { Button } from "@/components/ui/Button";

export function FixedWriteButton({ href }: { href: string }) {
  return (
    <div className="fixed inset-x-0 bottom-4 z-40 flex justify-center tablet:hidden">
      <Button href={href} label="Написать" iconSrc="/assets/icons/telegram.svg" variant="primary" />
    </div>
  );
}

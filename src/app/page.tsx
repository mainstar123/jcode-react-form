import { PasswordEntryForm } from "@/components/form/password-entry-form";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start justify-center w-full max-w-[300px] sm:max-w-[500px]">
        <PasswordEntryForm />
      </main>
      <Toaster />
    </div>
  );
}

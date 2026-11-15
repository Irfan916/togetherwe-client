"use client";

import { toast } from "react-toastify";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-6 p-8">
      <div className="flex items-center justify-between">
        <h1>TogetherWe</h1>
        <ThemeToggle />
      </div>
      <p>Small actions. Big changes.</p>
      <div className="flex flex-wrap gap-3">
        <button className="btn btn-primary" onClick={() => toast.success("Theme tokens work!")}>
          Primary
        </button>
        <button className="btn btn-outline btn-primary">Outline</button>
        <span className="badge badge-secondary">Plantation</span>
      </div>
      <div className="rounded-box border border-base-300 bg-base-200 p-6">
        Card surface on base-200
      </div>
    </main>
  );
}
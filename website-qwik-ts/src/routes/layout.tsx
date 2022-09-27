import { component$, Slot } from "@builder.io/qwik";
import Header from "~/components/header/header";

export default component$(() => {
  return (
    <div class="h-[100vh] flex flex-col">
      <Header />
      <main class="flex-grow">
        <section class="h-full">
          <Slot />
        </section>
      </main>
      <footer class="top-[100vh] sticky flex items-center px-4 py-2 bg-zinc-800 text-zinc-100 justify-center">
        Made with 💙 by
        <span class="text-zinc-50 ml-[.3em]">David Alexander Pfeiffer</span>
      </footer>
    </div>
  );
});

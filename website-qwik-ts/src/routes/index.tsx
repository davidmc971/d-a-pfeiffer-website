import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Intro from "~/components/intro/intro";

export default component$(() => {
  return (
    <>
      <Intro />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
};

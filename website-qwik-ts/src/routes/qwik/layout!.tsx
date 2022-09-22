import { component$, Slot } from '@builder.io/qwik';
import QwikHeader from '~/components/qwik-header/qwik-header';

export default component$(() => {
  return (
    <>
      <main>
        <QwikHeader />
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <a href="https://www.builder.io/" target="_blank">
          Made with ♡ by Builder.io
        </a>
      </footer>
    </>
  );
});

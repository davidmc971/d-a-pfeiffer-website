import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./header.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header id="header">
      <div class="lead">David Alexander Pfeiffer</div>
      <ul>
        <li>About</li>
        <li>Services</li>
        <li>Portfolio</li>
      </ul>
    </header>
  );
});

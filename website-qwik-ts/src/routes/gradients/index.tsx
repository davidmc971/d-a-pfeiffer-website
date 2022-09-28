import { component$, HTMLAttributes, useStylesScoped$ } from "@builder.io/qwik";

import styles from "./gradients.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  const gradients : HTMLAttributes<HTMLDivElement>["style"][] = [
    "background: linear-gradient(0deg, rgba(81,255,193,1) 0%, rgba(2,14,69,1) 100%);",
    "background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);",
    "background: radial-gradient(circle, rgba(159,0,90,1) 0%, rgba(33,4,23,1) 100%);",
    "background: radial-gradient(circle, #51ffc1 0%, #020e45 100%);",
    "background: linear-gradient(45deg, rgba(70,22,102,1) 0%, rgba(29,182,253,1) 50%, rgba(203,255,126,1) 100%);",
    "background: linear-gradient(60deg, rgba(0,15,92,1) 33%, rgba(255,0,239,1) 100%);",
    "background: linear-gradient(25deg, rgba(12,24,33,1) 0%, rgba(70,184,255,1) 100%);",
    "background: radial-gradient(circle, rgba(37,103,121,1) 0%, rgba(1,31,50,1) 100%);",
  ];

  return (
    <>
      <div class="w-full h-full grid grid-cols-4">
        {gradients.map((gradient) => {
          return <div class="w-full h-full min-h-[12rem]" style={gradient} />;
        })}
      </div>
    </>
  );
});

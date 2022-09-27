import { component$, useStylesScoped$ } from "@builder.io/qwik";

import styles from "./glassmorph.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <>
      <div class="radial-gradient from-[#2f383a] to-[#637579] w-full h-full flex flex-col gap-2 p-2 items-center justify-center">
        <div class="text-[#e7f3f5] max-w-[48ch] min-w-[24rem] min-h-[16rem] bg-[#e2cced25] rounded-xl p-8 shadow-[#011b1f32] shadow-sm backdrop-blur-md border border-[#ffffff20] mr-48">
          {/* 000b0d 011b1f cce8ed */}
          <h2 class="text-4xl font-bold">Services</h2>
          <h5 class="mb-[1.25em] text-gray-200 italic">What I can provide</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laudantium eius iste pariatur repudiandae in odio, deleniti voluptatem autem commodi laborum perferendis excepturi. Possimus totam delectus vel. Laboriosam, sunt pariatur.</p>
        </div>
        <div class="text-[#e7f3f5] max-w-[48ch] min-w-[24rem] min-h-[16rem] bg-[#e2cced25] rounded-xl p-8 shadow-[#011b1f32] shadow-sm backdrop-blur-md border border-[#ffffff20] ml-48">
          {/* 000b0d 011b1f cce8ed */}
          <h2 class="text-4xl font-bold">Portfolio</h2>
          <h5 class="mb-[1.25em] text-gray-200 italic">Projects I worked on</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laudantium eius iste pariatur repudiandae in odio, deleniti voluptatem autem commodi laborum perferendis excepturi. Possimus totam delectus vel. Laboriosam, sunt pariatur.</p>
        </div>
      </div>
    </>
  );
});

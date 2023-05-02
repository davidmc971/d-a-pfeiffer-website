import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <div class="h-full bg-gradient-to-tr from-blue-900 to-purple-900">
        <div class="h-full backdrop-brightness-[35%] text-white flex flex-col items-center justify-center">
          <div class="flex flex-row items-center justify-center w-72 h-32 px-4 py-2 backdrop-blur-md outline rounded outline-1 outline-white shadow-2xl shadow-purple-900 hover:animate-pulse">
            <p class="font-mono font-bold text-2xl">Hello World</p>
          </div>
        </div>
      </div>
    </>
  );
});

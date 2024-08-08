import React from "react";

const Card = ({author = "DJ"}) => {
  // const {author} = props;
  return (
    <>
      <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          class="w-24 h-24 rounded-full mx-auto"
          src="https://th.bing.com/th/id/OIP.Soqtvc8GbISKlazg81TPigHaFy?rs=1&pid=ImgDetMain"
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It's easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div>{author}</div>
            <div>Staff Engineer, {author}</div>
          </figcaption>
        </div>
      </figure>
    </>
  );
};

export default Card;

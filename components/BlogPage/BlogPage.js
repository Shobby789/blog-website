"use client";
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";

const BlogPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="pb-12 pt-16 grid grid-cols-1 lg:grid-cols-4">
      <div
        className={`w-full col-span-1 lg:col-span-3 flex flex-col items-start text-start gap-y-6 ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        <h1 className="text-4xl font-semibold">Blog Page</h1>
        <p className="text-[14px] leading-7 tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus ab
          doloribus laboriosam quisquam voluptatum soluta? Voluptates fugit
          inventore nesciunt iste consequuntur odio, necessitatibus dolor unde
          corrupti laudantium sunt sit sint nisi quam dignissimos numquam atque
          mollitia aut ab aliquam nobis magnam maxime est! Eaque minus deleniti
          sapiente velit! Quisquam mollitia similique temporibus adipisci
          deleniti ab dolorum explicabo corrupti ea dicta, blanditiis
          perspiciatis fugiat nulla nobis impedit aut neque ratione? Sunt
          deleniti porro, provident ipsam quaerat dolores. Ipsa tempora aperiam
          pariatur necessitatibus officiis excepturi, facilis id assumenda.
          Maiores sapiente minus fuga ullam odit, error assumenda tempore nulla
          omnis consequuntur temporibus accusantium consequatur optio excepturi,
          modi sunt nostrum alias. Sequi consectetur delectus a dignissimos
          inventore tempore quos qui minus quaerat doloremque, iusto fuga
          dolorum eveniet asperiores reiciendis, nam harum! Earum eveniet
          delectus ea temporibus magni a sapiente voluptas aspernatur debitis
          culpa repudiandae officia iste veritatis nemo dolorem dolores
          laboriosam animi id officiis, unde facere quo dignissimos. Facere sint
          eveniet nisi iusto architecto voluptatibus? Inventore nemo accusantium
          incidunt omnis a beatae dolorem ratione aut nostrum harum laboriosam
          eaque consectetur soluta rerum at libero et asperiores error, sequi,
          earum perferendis facere! Adipisci minus, rem beatae numquam voluptate
          facilis iure expedita voluptates possimus atque necessitatibus,
          deserunt libero perspiciatis fugit inventore facere, incidunt eveniet
          ipsa sequi explicabo provident quia harum. Consequuntur impedit porro
          nihil at eligendi, aperiam accusantium maxime nisi ea ad. Laborum
          maxime a eligendi quia. Quam corporis ea consequuntur omnis harum
          facilis maiores, laudantium distinctio ducimus, est error perferendis
          ut numquam enim debitis cumque voluptas labore? Amet deserunt dolor ea
          cumque debitis sed corrupti quis suscipit quam nisi voluptate est ab
          at quaerat nulla, repudiandae quasi aliquid assumenda tempora. Facilis
          tenetur voluptatum doloribus inventore commodi et amet voluptates,
          corporis officia sit nam error eaque nemo, cupiditate in est maiores?
          Aut quasi sunt reprehenderit eum explicabo vitae earum, repellendus
          omnis ratione possimus nam dicta porro laborum beatae dignissimos unde
          esse error veniam tempora quo corporis doloremque illo magnam!
          Officiis unde soluta asperiores reiciendis ducimus, necessitatibus
          repellendus molestiae corporis, perferendis quas doloremque, quidem
          eligendi numquam culpa. Fugit dolorum cupiditate, libero dolore
          ratione eos est reiciendis reprehenderit, nobis fugiat dolores enim
          asperiores soluta quos velit rerum exercitationem. Officiis cumque
          accusamus fugit accusantium illum quidem consectetur non minus maxime
          maiores aut molestias temporibus, laboriosam quam. Voluptatibus ad
          laboriosam consectetur vero ipsam. Totam asperiores animi, culpa iure
          eos voluptates repellendus nam voluptatibus ab, ipsa, soluta vel
          expedita at consectetur error ullam illo aut sint suscipit possimus
          sequi? Deleniti iure ipsam accusamus illo, fugiat est, veritatis amet
          enim quasi repellat numquam totam reprehenderit eos vitae, tempora
          dolorum distinctio nemo corporis voluptatibus sint perferendis natus
          voluptate labore! Quasi nam aliquid fugit tempora vel consequuntur
          illum ipsum optio minima enim in incidunt quae veniam, non ipsam
          aspernatur commodi nostrum ea modi quia quod itaque repellendus
          obcaecati. Officia laudantium, culpa dolore est quidem enim deserunt
          esse quaerat laboriosam natus autem, sapiente, laborum commodi
          maiores! Quas porro voluptas doloribus, cupiditate deserunt sequi illo
          veniam fuga voluptates rerum sit nam eos! Commodi, provident! Eos,
          maiores!
        </p>
      </div>
      <div className="w-full col-span-1 lg:col-span-1 xl:px-10 pt-1">
        <h2 className="text-sm">Table of Contents</h2>
      </div>
    </div>
  );
};

export default BlogPage;

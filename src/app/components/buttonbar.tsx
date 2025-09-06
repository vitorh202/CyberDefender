'use client';

import Image from "next/image";
import Link from "next/link";

const Buttonbar = () => {
    return (
      <div className="flex w-full mt-10 px-4 items-center justify-center">
        {/* Botão 1 */}
        <Link href="/jogar" className="relative m-5 group transition-transform hover:scale-105">
        <Image
          src="/jogar.png"
          alt="Botão 1"
          width={200}
          height={110}
          className="group-hover:hidden"
        />
        <Image
          src="/jogar_hover.png"
          alt="Botão 1 Hover"
          width={200}
          height={110}
          className="hidden group-hover:block"
        />
      </Link>

      {/* Botão 2 */}
      <Link href="/sobre" className="relative m-5 group transition-transform hover:scale-105">
        <Image
          src="/saiba.png"
          alt="Botão 2"
          width={200}
          height={110}
          className="group-hover:hidden"
        />
        <Image
          src="/saiba_hover.png"
          alt="Botão 2 Hover"
          width={200}
          height={110}
          className="hidden group-hover:block"
        />
      </Link>
    </div>
    );
};

export default Buttonbar;
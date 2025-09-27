import Appbar from "../components/appbar";
import Image from "next/image";
import Link from "next/link";


export default function Jogar() {
    return (
        <div>
            <Appbar />
            <div className="flex flex-col items-center py-8">
            <Image src={"/logo.gif"} 
            alt="Logo CyberDefender"
            className="w-full max-w-xs h-auto" 
            width={300} 
            height={100}/>
            <p className="text-center font-mono mt-4 text-[#15fc9e] text-sm md:text-base max-w-lg px-4">⚠ Em desenvolvimento...</p>

            {/* Game */}

            <section className="mt-8 w-full max-w-5xl">
          <div className="relative w-full pb-[56.25%] bg-[#000] rounded-lg overflow-hidden border border-[#0f3]">
            <iframe
              src="/prototype/index.html"
              title="Protótipo CyberDefender (Construct 2)"
              className="absolute inset-0 w-full h-full border-0"
              allow="autoplay; fullscreen; clipboard-write; accelerometer; gyroscope; encrypted-media"
              allowFullScreen
              loading="lazy"
            />
          </div>

          <div className="mt-4 text-center">
            <Link href="/prototype/index.html" target="_blank" className="text-sm text-[#15fc9e] underline">
              Abrir protótipo em nova aba
            </Link>
          </div>
        </section>

            </div>
        </div>
    );

}
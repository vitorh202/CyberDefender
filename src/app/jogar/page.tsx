import Appbar from "../components/appbar";
import Image from "next/image";


export default function Sobre() {
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
            </div>
        </div>
    );

}
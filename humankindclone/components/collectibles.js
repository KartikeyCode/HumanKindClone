import Image from "next/image"
import guy1 from "../public/Humankind_Assets/Humankind_Assets/images/62d0eba9fd0791f1321f3463_hk-8.png"
import guy2 from "../public/Humankind_Assets/Humankind_Assets/images/62d0eba989927a42d3ecd6ec_hk-6.png"
import guy3 from "../public/Humankind_Assets/Humankind_Assets/images/62d0eba9f0c56e0e31430767_hk-7.png"
import guy4 from "../public/Humankind_Assets/Humankind_Assets/images/62d0eba96e8bedb0f11027d1_hk-4.png"
import guy5 from "../public/Humankind_Assets/Humankind_Assets/images/62d0eba95f70f42c84d7e993_hk-5.png"
import guy6 from "../public/Humankind_Assets/Humankind_Assets/images/62d0ecf6c5c447164d6d3ecf_hk-9.png"
import guy7 from "../public/Humankind_Assets/Humankind_Assets/images/62d0eba94995fa159bccd55a_hk-1.png"
import guy8 from "../public/Humankind_Assets/Humankind_Assets/images/62d0eba9d6c0094dc3a98be3_hk-2.png"
import guy9 from "../public/Humankind_Assets/Humankind_Assets/images/62d0eba9fc73b73c7088094d_hk-3.png"

export default function Collectibles(){
    return(
        <div className="bg-[url('../public/Humankind_Assets/Humankind_Assets/images/62bacd30fa2cce04546413f8_Projects_20Section.png')] ">
            <div className="flex flex-col items-center mt-28">
            <div className="flex flex-row h-36 justify-center">
            <Image className="w-36 rounded-full border-4 border-black z-[46]" src={guy1}></Image>
            <Image className="w-36 rounded-full border-4 border-black z-[47] -translate-x-5" src={guy2}></Image>
            <Image className="w-36 rounded-full border-4 border-black z-[48] -translate-x-10" src={guy3}></Image>
            <Image className="w-36 rounded-full border-4 border-black z-[49] -translate-x-16" src={guy4}></Image>
            <Image className="w-36 rounded-full border-4 border-black z-[50] " src={guy5}></Image>
            </div>
            <div className="flex flex-row h-36 justify-center">
            <Image className="w-36 rounded-full border-4 border-black z-[60]" src={guy6}></Image>
            <Image className="w-36 rounded-full border-4 border-black z-[59]" src={guy7}></Image>
            <Image className="w-36 rounded-full border-4 border-black z-[58]" src={guy8}></Image>
            <Image className="w-36 rounded-full border-4 border-black z-[57]" src={guy9}></Image>
            </div>
            <div className="flex bg-black w-[65rem] h-[25rem] self-center rounded-xl mb-28">
            </div>
            </div>
        </div>
    )
}
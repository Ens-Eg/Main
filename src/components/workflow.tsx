import { CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Codeimg from "../ficons/code.png"
import { checklistItems } from "@/constants"


const Workflow = () => {
  return (
    <div className="max-w-[1024px] mx-auto mt-[70px]">

                    <h1 className="font-kufi text-3xl text-[#2f2f2f] sm:text-4xl lg:text-4xl text-center tracking-wide">
                    إبدا نشاء متجرك 
                        <span className="rounded font-kufi  bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
                        {" "}
                        الالكتروني لمنتجاتك
                        </span>
                    </h1>
    <div className=" mx-auto  bg-[#f6f5f5] rounded-lg xsm:m-5 sm:m-2 mt-8">
        
         <div className=" justify-center lg:flex flex-warp">
            <div className="p-2 sm:w-full lg:w-1/2  pt-50">
            <Image
                  src={Codeimg} // Use the Image component from next/image
                  alt=""
                  
                />
            </div>
                <div className="pt-12 w-full lg:w-1/2 ">
                        {checklistItems.map((item, index) =>(
                            <div key={index} className="flex mb-5 bg-[#f6f5f5] hover:bg-[#d9dcfe] rounded-md ml-3">
                                        <div className="text-purple-400 mx-6 bg-blue-900 h-10 w-10 p-2 justify-center items-center rounded-full mt-2">
                                                <CheckCircle2 />
                                            </div>
                                    <div>
                                        <h5 className="font-kufi  text-[#0e1a95] text-[11pt] ">
                                            {item.title}
                                            <p className="font-kufi text-[9pt] text-[#3b3b3b]">{item.description}</p>
                                        </h5>
                                    </div>
                                </div>
                        ))}
                </div>
         </div>
         </div></div>
  )
}

export default Workflow

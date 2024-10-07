import { CheckCircle2 } from "lucide-react"
import { pricingOptions } from "@/constants"
const Pricing = () => {
  return (
    <div className="flex flex-wrap mt-9">
            {pricingOptions.map((option, index) =>(
                <div key={index} className="w-full sm:1/2 lg:w-1/3 p-2">
                        <div className="p-10 border border-[#f9f8f8] rounded-xl bg-[#f6f5f5] hover:bg-[#d9dcfe]">
                            <p className="font-kufi text-[19pt] mb-8 items-center text-[#0e1a95]">
                                {option.title}
                                
                            </p>
                            <p className="mb-2">
                                <ul>
                                    {option.features.map((feature, index) => (
                                        <li key={index} className="mt-8 flex items-center text-[#0e1a95]">
                                            <CheckCircle2 />
                                            <span className="font-kufi text-[11pt]  mr-2 pr-2 text-[#3b3b3b]">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </p>
                            <p className="mt-8">
                <span className="text-5xl mt-6 mr-2 text-[#000000]">{option.price}</span>
                <span className= "font-kufi text-neutral-400 tracking-tight">/شهريا</span>
              </p>
                        </div>
                        <div className="flex justify-center ">
        <a
          href="#"
          className="font-kufi text-sm bg-gradient-to-r from-purple-500 to-purple-800 py-3 px-4 mx-3 rounded-md"
        >
          إشترك الأن
        </a>
       
      </div>
                    </div>
            ))}
     
    </div>
  )
}

export default Pricing

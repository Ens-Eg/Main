import { BotMessageSquare } from 'lucide-react';
import { features } from "../constants";
import Image, { StaticImageData } from 'next/image';
type Feature = {
    image: StaticImageData; // or string if you are using URLs
    fname: string;
    description: string;
  };

const FeatureSection = () => {
  return (
        <><div className='max-w-[1024px] mx-auto pt-9'>
          <h1 className="font-kufi text-3xl text-[#2f2f2f] sm:text-4xl lg:text-4xl text-center tracking-wide">
                    خدمات متقدمة
                        <span className="rounded font-kufi  bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
                        {" "}
                        للمواقع الالكترونية
                        </span>
                    </h1>
          
            <div className="flex flex-wrap  max-w[1024px] pt-10">
              
            {features.map((feature, index)=>(
              
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 ">
                    <div className="flex  bg-gradient-to-r bg-[#f6f5f5] hover:bg-[#d9dcfe] rounded-lg m-1">
                    <div className="flex mx-6 h-20   justify-center items-center mt-3 ">

                    <Image
                  src={feature.image} // Use the Image component from next/image
                  alt=""
                  className="w-full h-auto "
                  
                />
                        </div>
                        <h5 className="font-kufi mt-1 mb-6 text-[11pt] text-[#0e1a95]">{feature.fname}<br /><p className="font-kufi text-[9pt] mt-2 text-[#3b3b3b]">{feature.description}</p></h5>
                       
                    </div>
                   
                </div>
                ))}

          
    </div></div></>
  )
}

export default FeatureSection

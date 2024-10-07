import { BotMessageSquare } from 'lucide-react';
import { Webpage } from "../../constants/index"
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
                   
                        <span className="rounded font-kufi  bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
                        {" "}
                       خدمات الويب
                        </span>
                    </h1>
          
            <div className="flex flex-wrap  max-w[1024px] pt-10">
              
            {Webpage.map((Webpage, index)=>(
              
                <div key={index} className="w-full  ">
                    <div className="  bg-gradient-to-r bg-[#f6f5f5]  rounded-lg m-1">
                   <p className="font-kufi w-[140px] items-center mx-auto text-[#6321a3] pt-10"> {Webpage.title}</p>
                    <div className="flex mx-6    justify-center items-center mt-3 ">

                    <Image
                  src={Webpage.image} // Use the Image component from next/image
                  alt=""
                  className="h-[194px] w-[484px] "
                  
                />
                        </div>
                        <h5 className="font-kufi mt-1 mb-6 text-[11pt] text-[#0e1a95]">{Webpage.fname}<br /><p className="font-kufi text-[9pt] mt-2 text-[#3b3b3b]">{Webpage.description}</p></h5>
                        <h5 className="font-kufi mt-1 mb-6 text-[11pt] text-[#0e1a95]">{Webpage.fname2}<br /><p className="font-kufi text-[9pt] mt-2 text-[#3b3b3b]">{Webpage.description2}</p></h5>
                        <h5 className="font-kufi mt-1 mb-6 text-[11pt] text-[#0e1a95]">{Webpage.fname3}<br /><p className="font-kufi text-[9pt] mt-2 text-[#3b3b3b]">{Webpage.description3}</p></h5>
                      
                    </div>
                   
                </div>
                ))}

          
    </div></div></>
  )
}

export default FeatureSection

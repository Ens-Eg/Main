import { BotMessageSquare } from 'lucide-react';
import { software1 } from "../../constants";
import { software2 } from "../../constants";

import Image, { StaticImageData } from 'next/image';
type Feature = {
    image: StaticImageData; // or string if you are using URLs
    fname: string;
    description: string;
  };
const WebsitePage2 = () => {
    return (
        <div>
           <div className="flex flex-col items-center mt-0 lg:mt-10">
      <h1 className="font-kufi text-3xl text-[#2f2f2f] sm:text-4xl lg:text-4xl text-center tracking-wide">
      خدمات تطوير
        <span className="rounded font-kufi  bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
          {" "}
          البرمجيات الحسابية وبرامج الإدارة
        </span>
      </h1>
      <p className="font-kufi text-sm mt-10 text-[#545454] text-center text-white-500 max-w-4xl">
      نحن نقدم خدمات تطوير البرمجيات الحسابية وبرامج الإدارة المخصصة لمساعدتك في تحسين عملياتك وتحقيق أهدافك بكفاءة. من خلال تقنيات مبتكرة وفريق من المحترفين ذوي الخبرة، نقدم حلولاً متكاملة تناسب احتياجات عملك الفريدة
      </p>

      <div></div>
     
    </div>
    <div className="flex flex-wrap  max-w[1024px] pt-10">
              
              {software1.map((software1, index)=>(
                
                  <div key={index} className="w-full sm:w-1/2 lg:w-1/2 ">
                      <div className="flex  bg-gradient-to-r bg-[#f6f5f5] hover:bg-[#d9dcfe] rounded-lg m-1">
                      <div className="flex mx-6 h-20   justify-center items-center mt-3 ">
  
                   
                          </div>
                          <h5 className="font-kufi mt-1 mb-6 text-[11pt] text-[#0e1a95]">{software1.fname}<br /><p className="font-kufi text-[9pt] mt-2 text-[#3b3b3b]">{software1.description}</p></h5>
                         
                      </div>
                    
                  </div>

          
                  ))}
  
  
      </div>
      <h1 className="font-kufi text-3xl text-[#2f2f2f] sm:text-4xl lg:text-4xl text-center tracking-wide pt-10">

        <span className="rounded font-kufi  bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
          {" "}
          كيف نعمل؟
        </span>
      </h1>
      <div className="flex flex-wrap w-[940px] items-center mx-auto  max-w[524px] pt-10 pr-[200px]">
              
              {software2.map((software2, index)=>(
                
                  <div key={index} className="w-[324px]  ">
                      <div className="flex  bg-gradient-to-r bg-[#f6f5f5] hover:bg-[#d9dcfe] rounded-lg m-1">
                      <div className="flex mx-6 h-20   justify-center items-center mt-3 ">
  
                   
                          </div>
                          <h5 className="font-kufi mt-1 mb-6 text-[11pt] text-[#0e1a95]">{software2.fname}<br /><p className="font-kufi text-[9pt] mt-2 text-[#3b3b3b]">{software2.description}</p></h5>
                         
                      </div>
                      
                  </div>

          
                  ))}
              <div className="pt-10 w-[1024px] items-center mx-auto pl-[200px]">
                <Image src="/software.jpg" alt="Software Image" width={900} height={517} className="rounded-lg" />
                </div>
      </div>
        </div>
    );
};

export default WebsitePage2;
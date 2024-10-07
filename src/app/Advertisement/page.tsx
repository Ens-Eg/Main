
import { adv } from "../../constants";
import Image, { StaticImageData } from 'next/image';
type Feature = {
    image: StaticImageData; // or string if you are using URLs
    fname: string;
    description: string;
  };

const WebsitePage = () => {
    return (
      <div>
      <h1 className="font-kufi text-3xl text-[#2f2f2f] sm:text-4xl lg:text-4xl text-center tracking-wide">
      خدمات الدعاية والإعلان
   <span className="rounded font-kufi  bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
     {" "}
     على الإنترنت
   </span>
 </h1>
 <p className="font-kufi text-sm mt-10 text-[#545454] text-center text-white-500 max-w-4xl">
 في عصر التكنولوجيا الحديثة، أصبحت الدعاية والإعلان عبر الإنترنت أساسية لتحقيق النجاح والنمو. نحن نقدم مجموعة متكاملة من الخدمات التي تساعدك على تعزيز وجودك الرقمي والوصول إلى جمهورك المستهدف بفاعلية
 </p>
      <Image src="/contacts.jpg" alt="Software Image" width={900} height={517} className="rounded-lg pt-10" />
  
           <div className="flex flex-wrap  max-w[1024px] pt-10">
              
              {adv.map((adv, index)=>(
                
                  <div key={index} className="w-full sm:w-1/2 lg:w-1/3 ">
                      <div className="flex  bg-gradient-to-r bg-[#f6f5f5] hover:bg-[#d9dcfe] rounded-lg m-1">
                   
                          <h5 className="font-kufi mt-1 mb-6 text-[11pt] text-[#0e1a95]">{adv.fname}<br /><p className="font-kufi text-[9pt] mt-2 text-[#3b3b3b]">{adv.description}</p></h5>
                         
                      </div>
                     
                  </div>
                  ))}
  
            
      </div>
   </div>
    );
};

export default WebsitePage;
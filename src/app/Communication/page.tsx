import Image, { StaticImageData } from 'next/image';
import { Comuni } from "../../constants";
import { Comuni2 } from "../../constants";
type Feature = {
    image: StaticImageData; // or string if you are using URLs
    fname: string;
    description: string;
  };
const WebsitePage = () => {
    return (
        <div>
                  <h1 className="font-kufi text-3xl text-[#2f2f2f] sm:text-4xl lg:text-4xl text-center tracking-wide">
                  خدمات الاتصالات
        <span className="rounded font-kufi  bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
          {" "}
          السنترال الذكي و VoIP
        </span>
      </h1>
      <Image src="/voip.jpg" alt="Software Image" width={900} height={517} className="rounded-lg pt-10" />
      <p className="font-kufi text-sm mt-10 text-[#545454] text-center text-white-500 max-w-4xl">
      في عالم يتسم بالتواصل المستمر، أصبحت خدمات الاتصالات جزءًا أساسيًا من نجاح الأعمال. نحن نقدم لك حلولاً مبتكرة تشمل خدمات الاتصالات التقليدية والحديثة، بما في ذلك السنترال الذكي ونظام VoIP، لتلبية احتياجاتك بشكل مثالي
      </p>

      <h1 className="font-kufi text-3xl text-[#2f2f2f] sm:text-4xl lg:text-4xl text-center tracking-wide pt-10">

<span className="rounded font-kufi  bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
  {" "}
  السنترال الذكي
</span>
</h1>
<div className="flex flex-wrap  items-center mx-auto  max-w[524px] pt-10  lg:pr-[200px]">
      
      {Comuni.map((Comuni, index)=>(
        
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3   ">
              <div className="flex  bg-gradient-to-r bg-[#f6f5f5] hover:bg-[#d9dcfe] rounded-lg m-1">
              <div className="flex mx-6 h-20   justify-center items-center mt-3 ">

           
                  </div>
                  <h5 className="font-kufi mt-1 mb-6 text-[11pt] text-[#0e1a95]">{Comuni.fname}<br /><p className="font-kufi text-[9pt] mt-2 text-[#3b3b3b]">{Comuni.description}</p></h5>
                 
              </div>
              
          </div>

  
          ))}


          
    </div>
    <h1 className="font-kufi text-3xl text-[#2f2f2f] sm:text-4xl lg:text-4xl text-center tracking-wide pt-10">

<span className="rounded font-kufi  bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
  {" "}
  خدمات VoIP
</span>
</h1>
<div className="flex flex-wrap  items-center mx-auto  max-w[524px] pt-10  lg:pr-[200px]">
      
      {Comuni2.map((Comuni2, index)=>(
        
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3    ">
              <div className="flex  bg-gradient-to-r bg-[#f6f5f5] hover:bg-[#d9dcfe] rounded-lg m-1">
              <div className="flex mx-6 h-20   justify-center items-center mt-3 ">

           
                  </div>
                  <h5 className="font-kufi mt-1 mb-6 text-[11pt] text-[#0e1a95]">{Comuni2.fname}<br /><p className="font-kufi text-[9pt] mt-2 text-[#3b3b3b]">{Comuni2.description}</p></h5>
                 
              </div>
              
          </div>

  
          ))}


          
    </div>
    </div>
    
    

    );
    
    
    
};

export default WebsitePage;
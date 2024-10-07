
import { gamedev } from "../../constants";
import Image, { StaticImageData } from 'next/image';
type Feature = {
    image: StaticImageData; // or string if you are using URLs
    fname: string;
    description: string;
  };
const WebsitePage3 = () => {
    return (
        <div>
           <h1 className="font-kufi text-3xl text-[#2f2f2f] sm:text-4xl lg:text-4xl text-center tracking-wide">
           تطوير وبرمجة
        <span className="rounded font-kufi  bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
          {" "}
          الألعاب الإلكترونية
        </span>
      </h1>
      <p className="font-kufi text-sm mt-10 text-[#545454] text-center text-white-500 max-w-4xl">
      نحن شركة رائدة في مجال تطوير الألعاب الإلكترونية، نقدم حلولًا مبتكرة ومخصصة لتلبية احتياجات كل عميل. باستخدام أحدث التقنيات والأدوات، نعمل على تحويل أفكارك إلى ألعاب ممتعة وشيقة
      </p>
           <Image src="/gamedev.jpg" alt="Software Image" width={900} height={517} className="rounded-lg pt-10" />
       
           <div className='max-w-[1024px] mx-auto pt-9'>
        
          
            <div className="flex flex-wrap  max-w[1024px] pt-10">
              
            {gamedev.map((gamedev, index)=>(
              
                <div key={index} className="w-full  ">
                    <div className="flex  bg-gradient-to-r bg-[#f6f5f5] hover:bg-[#d9dcfe] rounded-lg m-1 h-[250px]">
                    <div className="flex mx-6 h-20   justify-center items-center mt-3 ">

                    <Image
                  src={gamedev.image} // Use the Image component from next/image
                  alt=""
                  className="w-[300px] h-[200px] mt-[130px] rounded-lg "
                  
                />
                        </div>
                        <h5 className="font-kufi mt-1 mb-6 text-[11pt] text-[#0e1a95] mt-10">{gamedev.fname}<br /><p className="font-kufi text-[9pt] mt-2 text-[#3b3b3b]">{gamedev.description}</p></h5>
                       
                    </div>
                   
                </div>
                ))}

          
    </div></div>
       
        </div>
    );
};

export default WebsitePage3;
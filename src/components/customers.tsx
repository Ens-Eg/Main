import { BotMessageSquare } from 'lucide-react';
import { Customers } from '@/constants';
import Image, { StaticImageData } from 'next/image';
type Feature = {
    image: StaticImageData; // or string if you are using URLs
    fname: string;
    description: string;
  };

const Customers1 = () => {
  return (
        <><div className='max-w-[1024px] mx-auto pt-9 items-center ' >
       
          
            <div className="flex flex-wrap  max-w[1024px] pt-10 items-center" >
              
            {Customers.map((Customers, index)=>(
              
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 items-center ">
                    <div className="  bg-gradient-to-r bg-[#f6f5f5] hover:bg-[#d9dcfe] rounded-lg m-1">
                    <div className=" mx-6 h-20 items-center mt-3 ">

                    <Image
                  src={Customers.image} // Use the Image component from next/image
                  alt=""
                  className="w-[484px] h-[175px] items-center mx-auto rounded-lg"
                  
                />
                        </div>
                        <div className='m-9 font-kufi text-[9pt] w-[140px] items-center mx-auto mt-[100px] pr-3 text-black'>
                        <p className=''>{Customers.fname}</p>
                        </div>
                    </div>
                   
                </div>
                ))}

          
    </div></div></>
  )
}

export default Customers1

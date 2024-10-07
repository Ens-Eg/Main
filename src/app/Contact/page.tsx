
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
           نحن هنا لمساعدتك!
        <span className="rounded font-kufi  bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
          {" "}
         تواصل معنا الان
        </span>
      </h1>
      <p className="font-kufi text-sm mt-10 text-[#545454] text-center text-white-500 max-w-4xl">
      نحن نتطلع إلى الاستماع إليك ومساعدتك في أي شيء تحتاجه! يمكنك التواصل معنا على الارقام وعناوين البريد التالية
      </p>
           <Image src="/contact.jpg" alt="Software Image" width={900} height={517} className="rounded-lg pt-10" />
       
                <div className="bg-[#ecf4fa] w-full items-center mx-auto text-[#045387] font-kufi">بريد الدعم الفني : support@ens.eg</div>
                <div className="bg-[#ecf4fa] w-full items-center mx-auto text-[#045387] font-kufi mt-10">بريد المبيعات : sales@ens.eg</div>
       
        </div>
    );
};

export default WebsitePage3;
import { resourcesLinks, platformLinks,  } from "@/constants";
import Image from "next/image";
import Footerimg from "../ficons/footer.jpg"
const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="font-kufi text-md font-semibold mb-4 text-[#0e1a95]" >خدمات الويب</h3>
          <ul className="space-y-2 mr-5">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-[#505050] font-kufi text-[9pt]  hover:text-[#3b3b3b]"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-kufi text-md font-semibold mb-4 text-[#0e1a95]">خدمات الانظمة</h3>
          <ul className="space-y-2 mr-5">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-[#505050]  text-[9pt] font-kufi hover:text-[#3b3b3b]"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center">
  <h3 className="text-[#505050] text-[9pt] font-kufi font-semibold mb-4">جميع الحقوق محفوظة</h3>
  <Image
    src={Footerimg}
    alt=""
    className="w-auto h-auto" // Ensure it scales properly
    width={484}
    height={157}
  />
</div>
      </div>
    </footer>
  );
};

export default Footer;
import { testimonials } from "@/constants"
import Image from "next/image"
const Testimonials = () => {
  return (
    <div className="mt-8 tracking-wide ">
      
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-[#2e167c] hover:bg-[#351894] rounded-md p-6 text-[10pt]  font-thin">
              <p className="font-kufi">{testimonial.text}</p>
              <div className="flex mt-8 items-start">
              <Image
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt=""
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="font-kufi text-sm font-normal italic text-neutral-600 mr-5">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
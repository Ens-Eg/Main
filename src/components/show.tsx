import React from 'react'

const Show = () => {
  return (
    <div className="max-w-[1024px] mx-auto h-[426px] bg-no-repeat bg-center text-center " style={{ backgroundImage: "url('/main.jpg')" }}>
    
    <h1 className="font-kufi text-3xl text-[#2f2f2f] sm:text-4xl lg:text-4xl text-center tracking-wide py-9">
                
                        <span className="rounded font-kufi  bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text pr-5">
                        {" "}
                       موقعك كامل 
                        </span>
                        <p className="font-kufi text-[15pt]  text-[#545454] text-center text-white-500 max-w-4xl pr-[100px] pt-4">
                          - مساحة تخزين : ٥٠ جيجا بايت
                       </p>
                       <p className="font-kufi text-[15pt]  text-[#545454] text-center text-white-500 max-w-4xl pr-[120px]">
                          - نطاق خاص 
                          (com/net/org)
                       </p>
                       <p className="font-kufi text-[15pt]  text-[#545454] text-center text-white-500 max-w-4xl pr-[140px]">
                         - تصميم خاص لموقعك
                       </p>
                  
          
                    </h1>             <a href="#" className="mr-[250px] text-[20pt] py-3  mx-3 bg-gradient-to-r from-purple-500 to-purple-800 rounded-md ">
150 USD        </a>
                    
    
  </div>
  )
}

export default Show
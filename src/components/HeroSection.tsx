
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-0 lg:mt-10">
      <h1 className="font-kufi text-3xl text-[#2f2f2f] sm:text-4xl lg:text-4xl text-center tracking-wide">
      كل ما تحتاجه لإنشاء
        <span className="rounded font-kufi  bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
          {" "}
          موقع إلكتروني
        </span>
      </h1>
      <p className="font-kufi text-sm mt-10 text-[#545454] text-center text-white-500 max-w-4xl">
      توفر استضافة المواقع كل ما تحتاجه لنشر فكرتك عبر الإنترنت. من موقعك الإلكتروني في العالم الرقمي، إلى حيث يتم تخزين ملفاتك وبياناتك بشكل آمن. يمكنك العثور على كل ذلك وإدارته في مكان واحد
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="font-kufi text-sm bg-gradient-to-r from-purple-500 to-purple-800 py-3 px-4 mx-3 rounded-md"
        >
          إشترك الأن
        </a>
        <a href="#" className="font-kufi text-sm py-3 px-4 mx-3 bg-gradient-to-r from-purple-500 to-purple-800 rounded-md border">
          مشاهدة العروض
        </a>
      </div>
      <div></div>
     
    </div>
  )
}

export default HeroSection;
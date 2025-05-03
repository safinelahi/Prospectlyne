import heroImage from "../../assets/images/Placeholder Image.png";

const Hero = () => {
  return (
    <div>
      <div>
        <img src={heroImage} alt="" />
      </div>
      <div className="flex items-center h-[294px] px-[64px] py-[80px] gap-[80px] mt-[20px] justify-center ">
        <h1 className="text-[#000] text-[56px] tracking-[-0.56px] font-normal items-center ">
          Find Your Dream Job<br></br>Today!
        </h1>
        <div >
          <h1 className="text-[18px] font-normal text-[#000]  mb-[30px] ">
            Welcome to our job portal, where opportunities meet talent. Join our
            <br></br>
            vibrant community and take the next step in your career journey.
          </h1>
          <button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-md hover:from-pink-600 hover:to-orange-500 px-[20px] py-[8px] ">
            Apply
          </button>
          <button className="bg-[#0000000d] hover:bg-[#f0cbb5] px-[20px] py-[8px] rounded-md ml-[16px] ">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

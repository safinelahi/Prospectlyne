const Footer = () => {
  return (
    <div className="h-[615px] px-[64px] py-[112px] bg-[#f7ede6b8]">
      <div className=" h-[118px] flex items-center justify-between ">
        <div>
          <h1 className="text-2xl font-bold">PROSPETLYNE</h1>
          <div className=" mt-[24px] flex gap-8 font-bold ">
            <a href="">Job Listings</a>
            <a href="">Student Community</a>
            <a href="">Career Resources</a>
            <a href="">Help Center</a>
            <a href="">Contact Us</a>
          </div>
        </div>
        <div className="">
          <h1 className=" mb-[16px] font-bold ">Join</h1>
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-md focus:outline-none focus:ring-0 bg-[#ffffffbc] text-[#3e3b3b] placeholder-[#3e3b3b] w-64 px-3 py-2"
            />
            <button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-md hover:from-pink-600 hover:to-orange-500 px-[20px] py-[8px] ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {/* <img
        className="py-[50px] border-b-[1px] border-[#00000022]  "
        src={companylogo}
        alt=""
      /> */}
      <div className="text-center my-6">
        <h1 className="text-[10rem] font-bold text-[#7e7c7c9e]">PROSPETLYNE</h1>
      </div>
      <div className=" text-center">
        <div className=" flex gap-6 ">
          {/* <a href="Privacy Policy">Privacy Policy</a>
          <a href="Privacy Policy">Terms of Service</a> */}
        </div>
        <h1 className="text-center">© 2025 Relume. All rights reserved.</h1>
      </div>
    </div>
  );
};

export default Footer;

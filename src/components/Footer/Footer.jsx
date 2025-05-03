import companylogo from "../../assets/images/Company logo image.png";
import logo from "../../assets/images/Logo-wide 1.svg";
const Footer = () => {
  return (
    <div className="h-[615px] px-[64px] py-[112px] bg-[#f7ede6b8]">
      <div className=" h-[118px] flex items-center justify-between ">
        <div>
          <img src={logo} alt="" />
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
      <img
        className="py-[50px] border-b-[1px] border-[#00000022]  "
        src={companylogo}
        alt=""
      />
      <div className=" flex justify-between my-[32px]">
        <div className=" flex gap-6 ">
          <a href="Privacy Policy">Privacy Policy</a>
          <a href="Privacy Policy">Terms of Service</a>
          <a href="Privacy Policy">Cookies Settings</a>
        </div>
        <h1>© 2025 Relume. All rights reserved.</h1>
      </div>
    </div>
  );
};

export default Footer;

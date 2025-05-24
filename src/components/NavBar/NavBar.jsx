const NavBar = () => {
  return (
    <div className="  h-[75px] place-content-center-safe  px-[64px]">
      <div className="">
        <div className="flex justify-between items-center self-stretch ">
          {/* Logo */}
          <div className="w-[48%] ">
            <h1 className="text-2xl font-bold">PROSPETLYNE</h1>
          </div>

          {/* Navigation Links */}
          <div className="text-[#000] flex gap-8  text-base font-normal">
            <a href="#">Job Listings</a>
            <a href="#">Student Hub</a>
            <a href="#">Career Tips</a>
            <div className="text-base font-normal">
              <button className=" flex items-center gap-2 cursor-pointer">
                Resources
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {/* Dropdown add here */}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex ml-8 gap-5 text-base font-medium">
            <button className="bg-[#0000000d] text-[#000] hover:bg-[#f0cbb5] px-[20px] py-[8px] rounded-md ">
              Join
            </button>
            <button className=" bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-md hover:from-pink-600 hover:to-orange-500 px-[20px] py-[8px] ">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

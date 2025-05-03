import communityImg from "../../assets/images/Community.png";
const Community = () => {
  return (
    <div className="h-[625px] px-[64px] py-[112px]">
      <div className=" flex justify-between items-center ">
        <div>
          <div>
            <h1 className=" text-[48px] tracking-[-0.48px] mb-[24px] ">
              Join Our Thriving<br></br>Community
            </h1>
            <h1 className=" mb-[32px] text-lg ">
              Sign up today to find your dream job or post your available
              positions with<br></br>ease.
            </h1>
            <button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-md hover:from-pink-600 hover:to-orange-500 px-[20px] py-[8px] ">
              Sign Up
            </button>
            <button className="bg-[#0000000d] hover:bg-[#f7ede6b8] px-[20px] py-[8px] rounded-md ml-[16px] ">
              Post Job
            </button>
          </div>
        </div>
        <div>
          <img src={communityImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Community;

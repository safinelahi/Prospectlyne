import career01 from "../../assets/images/career_01.png";
import career02 from "../../assets/images/career_02.png";
import career03 from "../../assets/images/career_03.png";
const Career = () => {
  return (
    <div className="h-[1065px] px-[64px] py-[112px] bg-[#f7ede6b8]">
      <h1 className="text-center text-base font-bold mb-4  ">Empower</h1>
      <h1 className="text-center text-5xl font-normal tracking-[-0.48px] ">
        Unlock Your Career Potential<br></br>with Us
      </h1>
      <p className="text-center text-lg mt-6 ">
        Our job portal connects you with top employers and opportunities
        tailored to your skills. From<br></br>job postings to personalized
        career advice, we are here to support your journey.
      </p>
      <div className="flex  justify-center gap-[48px] mt-[80px] mb-[80px]  ">
        <div>
          <img src={career01} alt="" />
          <h1 className="text-[32px] text-center mt-[32px] tracking-[-0.32px] ">
            Comprehensive Job<br></br>Posting Services
          </h1>
          <p className="text-center text-base font-normal mt-[24px] ">
            Easily post jobs and reach qualified candidates.
          </p>
        </div>
        <div>
          <img src={career02} alt="" />
          <h1 className="text-[32px] text-center mt-[32px] tracking-[-0.32px]  ">
            Professional Resume<br></br>Building Assistance
          </h1>
          <p className="text-center text-base font-normal mt-[24px] ">
            Craft a standout resume that gets noticed.
          </p>
        </div>
        <div>
          <img src={career03} alt="" />
          <h1 className="text-[32px] text-center mt-[32px] tracking-[-0.32px]  ">
            Expert Career Advice<br></br>and Guidance
          </h1>
          <p className="text-center text-base font-normal mt-[24px] ">
            Get insights and tips to advance your career.
          </p>
        </div>
      </div>

      <div className="text-center flex justify-center gap-6 ">
        <button className="px-[24px] py-[10px] hover:bg-[#0000000d] ">Explore</button>
        <div className="flex justify-center items-center  hover:bg-[#0000000d]  text-center ">
          <button className="px-[24px] py-[10px]">Join</button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M10.3707 17.4597L16.0777 11.7527L10.3707 6.04565L8.95673 7.45965L13.2497 11.7527L8.95673 16.0457L10.3707 17.4597Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Career;

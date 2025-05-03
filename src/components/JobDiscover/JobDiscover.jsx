import jobImg_01 from '../../assets/images/JobDIscover_01.png';
import jobImg_02 from '../../assets/images/JobDIscover_02.png';
import jobImg_03 from '../../assets/images/JobDIscover_03.png';
const JobDiscover = () => {
  return (
    <div className="h-[895px] px-[64px] py-[112px] bg-[#f7ede6b8] mt-[20px]">
      <h1 className="text-center text-[40px] tracking-[-0.5px] ">
        Discover Your Dream Job with Our<br></br>
        User-Friendly Job Portal
      </h1>
      <div className='flex justify-center gap-[48px] mt-[80px] '>
        <div>
            <img src= {jobImg_01} alt="" />
            <h1 className='text-2xl text-center mt-[32px] ' >Join a Thriving Community of<br></br> Students and Job Seekers</h1>
            <p className='text-center text-base font-normal mt-[52px] '>Easily search and apply for jobs that match<br></br>your skills and interests.</p>
            <div className='flex items-center gap-2 justify-center mt-3  ' >
                <button>Learn More</button>
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
            </div>
        </div>
        <div>
            <img src= {jobImg_02} alt="" />
            <h1 className='text-2xl text-center mt-[32px] '>Track Your Applications with Our<br></br>Intuitive Dashboard</h1>
            <p className='text-center text-base font-normal mt-[50px] '>Stay organized and informed about your job<br></br>applications every step of the way.</p>
            <div className='flex items-center gap-2 justify-center mt-3  ' >
                <button>Learn More</button>
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
            </div>
        </div>
        <div>
            <img src= {jobImg_03} alt="" />
            <h1 className='text-2xl text-center mt-[32px] ' >Connect with Employers and<br></br>Enhance Your Career<br></br>Opportunities</h1>
            <p className='text-center text-base font-normal mt-[15px] '>Network with potential employers and gain<br></br>insightsL into your desired industry.</p>
            <div className='flex items-center gap-2 justify-center mt-3  ' >
                <button>Learn More</button>
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
            </div>
        </div>
      </div>
    </div>
  );
};

export default JobDiscover;

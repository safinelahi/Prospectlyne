import jobOpportunitiesImg from '../../assets/images/jopOpportunities.png';
const JobOpportunities = () => {
  return (
    <div className="h-[865px] px-[64px] py-[112px]">
      <div className="flex gap-[80px] justify-center items-center">
        <div>
          <div>
            <h1 className="text-[40px] tracking-[-0.5px]  ">
              Unlock Opportunities:<br></br>Empowering Job Seekers and<br></br>
              Employers on One Platform
            </h1>
            <p className='mt-[25px] '>
              Our platform connects job seekers with employers, streamlining the
              hiring<br></br>process. Experience a vibrant community where
              talent meets opportunity.
            </p>
          </div>
          <div className=" flex gap-[25px] mt-[32px] ">
            <div>
              <h1 className=" text-xl tracking-[-0.2] mb-4 ">For Job Seekers</h1>
              <h1 className="text-base  ">
                Access a wide range of job listings<br></br>tailored to your
                skills and interests.
              </h1>
            </div>
            <div>
              <h1 className=" text-xl tracking-[-0.2] mb-4 ">For Employers</h1>
              <h1 className="text-base  ">
                Find qualified candidates quickly and<br></br>efficiently to
                meet your hiring needs.
              </h1>
            </div>
          </div>
        </div>
        <div>
            <img src= {jobOpportunitiesImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default JobOpportunities;

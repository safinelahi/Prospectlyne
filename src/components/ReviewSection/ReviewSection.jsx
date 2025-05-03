import review_com from "../../assets/images/review_company.png";
import review_person from "../../assets/images/review_profile.svg";

const ReviewSection = () => {
  return (
    <div className="h-[532px] px-[64px] py-[112px]  ">
      <div className=" flex items-center flex-col text-center">
        <img src={review_com} alt="" />
        <h1 className=" my-[32px] text-2xl tracking-[-0.24px] ">
          "As an employer, I found the perfect candidate quickly and easily.
          <br></br>The quality of applicants was impressive!"
        </h1>
        <img src={review_person} alt="" />
        <h1 className=" mt-[16px] font-bold ">Michael Smith</h1>
        <h1>Manager, Innovate LLC</h1>
      </div>
    </div>
  );
};

export default ReviewSection;

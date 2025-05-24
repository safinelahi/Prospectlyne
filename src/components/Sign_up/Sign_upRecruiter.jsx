import { FaBuilding, FaGlobe, FaPhone, FaRegAddressCard } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import sign_upImg from "../../assets/images/signup-image.jpg";
const Sign_upRecruiter = () => {
  return (
    <div className="bg-[#f8f8f8] min-h-screen flex justify-center items-center px-4 my-10 ">
      <section className="w-full max-w-5xl bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center px-8 py-16">
        <div className="w-full md:w-1/2 px-6">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Sign up</h2>
          <form className="space-y-6">
            {/* Full Name */}
            <div className="relative">
              <input
                type="text"
                name="full_name"
                placeholder="Full Name"
                className="w-full border-b border-gray-400 pl-10 py-2 placeholder-gray-500 focus:outline-none focus:border-gray-800"
              />
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-600">
                <IoPerson className="text-lg" />
              </span>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full border-b border-gray-400 pl-10 py-2 placeholder-gray-500 focus:outline-none focus:border-gray-800"
              />
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-600">
                <MdEmail />
              </span>
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full border-b border-gray-400 pl-10 py-2 placeholder-gray-500 focus:outline-none focus:border-gray-800"
              />
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-600">
                <IoMdLock className="text-lg" />
              </span>
            </div>

            {/* Company Name */}
            <div className="relative">
              <input
                type="text"
                name="company_name"
                placeholder="Company Name"
                className="w-full border-b border-gray-400 pl-10 py-2 placeholder-gray-500 focus:outline-none focus:border-gray-800"
              />
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-600">
                <FaBuilding />
              </span>
            </div>

            {/* Company Website (Optional) */}
            <div className="relative">
              <input
                type="url"
                name="company_website"
                placeholder="Company Website (Optional)"
                className="w-full border-b border-gray-400 pl-10 py-2 placeholder-gray-500 focus:outline-none focus:border-gray-800"
              />
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-600">
                <FaGlobe />
              </span>
            </div>

            {/* Position/Role at Company */}
            <div className="relative">
              <input
                type="text"
                name="position"
                placeholder="Position/Role at Company (e.g., HR Manager)"
                className="w-full border-b border-gray-400 pl-10 py-2 placeholder-gray-500 focus:outline-none focus:border-gray-800"
              />
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-600">
                <FaUserTie />
              </span>
            </div>

            {/* Phone Number (Optional) */}
            <div className="relative">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number (Optional)"
                className="w-full border-b border-gray-400 pl-10 py-2 placeholder-gray-500 focus:outline-none focus:border-gray-800"
              />
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-600">
                <FaPhone />
              </span>
            </div>

            {/* Company Description (Optional) */}
            <div className="relative">
              <textarea
                name="company_description"
                placeholder="Company Description (Optional)"
                rows="3"
                className="w-full border-b border-gray-400 pl-10 pr-3 py-2 placeholder-gray-500 focus:outline-none focus:border-gray-800 resize-none"
              />
              <span className="absolute left-0 top-3 text-gray-600">
                <FaRegAddressCard />
              </span>
            </div>

            {/* Terms Agreement */}
            <div className="flex items-center">
              <input type="checkbox" id="agree-term" className="mr-2" />
              <label htmlFor="agree-term" className="text-sm text-gray-700">
                I agree all statements in{" "}
                <a href="#" className="text-blue-500">
                  Terms of service
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#535bc9] text-white py-3 px-8 rounded mt-[20px] hover:bg-[#848bed]"
            >
              Register
            </button>
          </form>
        </div>

        {/* Image and Link */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex flex-col items-center">
          <img src={sign_upImg} alt="sign up" className="mb-8" />
          <a href="#" className="text-sm text-gray-800">
            I am already member
          </a>
        </div>
      </section>
    </div>
  );
};

export default Sign_upRecruiter;

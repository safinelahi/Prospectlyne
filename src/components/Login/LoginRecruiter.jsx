import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import login_recruiterImage from "../../assets/images/Recruiter.jpg";
const LoginRecruiter = () => {
  return (
    <div className="min-h-screen flex justify-center items-center px-4 bg-[#f8f8f8]">
      <section className="w-full max-w-5xl bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center px-8 py-16">
        {/* logo section */}
        <div className="w-full md:w-1/2 flex flex-col items-center  mt-10">
          <img src={login_recruiterImage} alt="sign in" />
          <a href="#" className="text-sm text-gray-800 mt-2  ">
            Create an account
          </a>
        </div>
        {/* Login section */}
        <div className="w-full md:w-1/2 px-6 order-1 md:order-2">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-800 text-center md:text-left">
            Login
          </h2>
          <p className="mb-4 text-center md:text-left">Login as a Recruiter</p>
          <form className="space-y-6">
            <div className="relative">
              <input
                type="text"
                name="your_name"
                placeholder="Your Name"
                className="w-full border-b border-gray-400 pl-10 py-2 placeholder-gray-500 focus:outline-none focus:border-gray-800"
              />
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-600">
                <IoPerson className="text-lg" />
              </span>
            </div>
            <div className="relative">
              <input
                type="password"
                name="your_pass"
                placeholder="Password"
                className="w-full border-b border-gray-400 pl-10 py-2 placeholder-gray-500 focus:outline-none focus:border-gray-800"
              />
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-600">
                <IoMdLock />
              </span>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="remember-me" className="mr-2" />
              <label htmlFor="remember-me" className="text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="bg-[#535bc9] text-white py-3 px-8 rounded mt-[20px] hover:bg-[#848bed]"
            >
              Log in
            </button>
          </form>
          <div className="mt-[35px] flex items-center space-x-5">
            <span className="text-gray-600">Or login with</span>
            <div className="flex space-x-3">
              <a href="#" className="bg-blue-800 text-white p-2 rounded">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-blue-400 text-white p-2 rounded">
                <BsTwitterX />
              </a>
              <a href="#" className="bg-red-500 text-white p-2 rounded">
                <FaGoogle />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginRecruiter;

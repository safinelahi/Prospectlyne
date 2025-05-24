import "./App.css";
import Career from "./components/Career/Career";
import Community from "./components/Community/Community";
import FAQs from "./components/FAQs/FAQs";
import Footer from "./components/Footer/Footer";
import Hero from "./components/HeroSection/Hero";
import JobDiscover from "./components/JobDiscover/JobDiscover";
import JobOpportunities from "./components/JobOpportunities/JobOpportunities";
import LoginRecruiter from "./components/Login/LoginRecruiter";
import LoginStudent from "./components/Login/LoginStudent";
import NavBar from "./components/NavBar/NavBar";
import ReviewSection from "./components/ReviewSection/ReviewSection";
import Sign_upRecruiter from "./components/Sign_up/Sign_upRecruiter";
import Sign_upStudent from "./components/Sign_up/Sign_upStudent";

function App() {
  return (
    <>
      {/* <NavBar></NavBar>
      <Hero></Hero>
      <JobDiscover></JobDiscover>
      <JobOpportunities></JobOpportunities>
      <Career></Career>
      <ReviewSection></ReviewSection>
      <FAQs></FAQs>
      <Community></Community>
      <Footer></Footer> */}
      <LoginStudent></LoginStudent>
      <LoginRecruiter></LoginRecruiter>
      <Sign_upStudent></Sign_upStudent>
      <Sign_upRecruiter></Sign_upRecruiter>
    </>
  );
}

export default App;

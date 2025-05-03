import "./App.css";
import Career from "./components/Career/Career";
import Community from "./components/Community/Community";
import FAQs from "./components/FAQs/FAQs";
import Footer from "./components/Footer/Footer";
import Hero from "./components/HeroSection/Hero";
import JobDiscover from "./components/JobDiscover/JobDiscover";
import JobOpportunities from "./components/JobOpportunities/JobOpportunities";
import NavBar from "./components/NavBar/NavBar";
import ReviewSection from "./components/ReviewSection/ReviewSection";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <JobDiscover></JobDiscover>
      <JobOpportunities></JobOpportunities>
      <Career></Career>
      <ReviewSection></ReviewSection>
      <FAQs></FAQs>
      <Community></Community>
      <Footer></Footer>
    </>
  );
}

export default App;

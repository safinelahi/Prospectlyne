import "./App.css";
import Career from "./components/Career/Career";
import Hero from "./components/HeroSection/Hero";
import JobDiscover from "./components/JobDiscover/JobDiscover";
import JobOpportunities from "./components/JobOpportunities/JobOpportunities";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return <>
   <NavBar></NavBar>
   <Hero></Hero>
   <JobDiscover></JobDiscover>
   <JobOpportunities></JobOpportunities>
   <Career></Career>
  </>;
}

export default App;

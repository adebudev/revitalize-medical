import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Mission from "../../components/Mission";
import Audience from "../../components/Audience";
import Procedure from "../../components/Procedure";
import Evidence from "../../components/Evidence";
import Results from "../../components/Results";
import { CustomTitle } from "../../components/shared/CustomTitle";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Mission />
      <div>
        <CustomTitle
          text="¿Para quién trabajamos?"
        />
        <Audience />
      </div>
      <Procedure />
      <Evidence />
      <Results />
    </>
  );
};

export default Home;

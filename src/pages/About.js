import AboutSection from "../components/AboutPage/AboutSection.js";
import QAList from "../components/AboutPage/QAList.js";
import PersonalNote from "../components/AboutPage/PersonalNote.js";

function About() {
  return (
    <AboutSection>
      <QAList />
      <PersonalNote />
    </AboutSection>
  );
};

export default About;

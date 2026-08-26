import { css } from "styled-system/css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Service } from "@/components/sections/Service";
import { PatientResources } from "@/components/sections/PatientResources";
import { AboutUs } from "@/components/sections/AboutUs";
import { EducationCenter } from "@/components/sections/EducationCenter";

function App() {
  return (
    <div
      className={css({
        minHeight: "100vh",
        bg: "bg.base",
        "& ::selection": {
          bg: "brand.green",
          color: "black",
        },
      })}
    >
      <Navbar />
      <main>
        <Hero />
        <Service />
        <PatientResources />
        <AboutUs />
        <EducationCenter />
      </main>
      <Footer />
    </div>
  );
}

export default App;

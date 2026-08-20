import { css } from "styled-system/css";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";

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
      </main>
    </div>
  );
}

export default App;

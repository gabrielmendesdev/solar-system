//components, css
import Navbar from "../../components/Navbar/Navbar";
import TopOfPage from "../../components/SecondPagePlanets/TopOfPage";
import BottomCarousel from "../../components/GlobalComponents.tsx/BottomCarousel";
import NightBackground from "../../components/Main/MediumPage/NightBackground";
import FinalPage from "../../components/Footer/FinalPage";
import Intercession from "../../components/Main/MediumPage/Intercession";
import Paragraph from "../../components/GlobalComponents.tsx/Paragraph";
import Title from "../../components/GlobalComponents.tsx/Title";
import CardExploring from "../../components/GlobalComponents.tsx/CardExploring";
import "./css/PagePlanets.css";

//model
import NeptuneModel from "./assets/models/neptune.glb";
import ScrollToTop from "../../components/GlobalComponents.tsx/ScrollToTop";

const Neptune: React.FC = () => {
  return (
    <>
      <header>
        <Navbar />
        <TopOfPage
          planet="neptune"
          cardTitle="Neptune"
          cardText="The first planet discovered with math."
          carousel={
            <BottomCarousel
              children={[
                {
                  title: "DAYS IN A YEAR",
                  content: "60.190",
                },
                {
                  title: "AVG TEMPERATURE",
                  content: "-218.15ºC",
                },
                {
                  title: "MASS",
                  content: "1.02413 x 10^26",
                },
                {
                  title: "GRAVITY",
                  content: "11.15 m/s^2",
                },
                {
                  title: "DENSITY",
                  content: "1.64 g/cm^3",
                },
              ]}
            />
          }
        />
      </header>
      <main>
        <Intercession
          children={
            <div>
              <Title content="Overview" className="mb-3" />
              <Paragraph content="Dark, cold and whipped by supersonic winds, giant Neptune is the eighth and most distant major planet orbiting our Sun. More than 30 times as far from the Sun as Earth, Neptune is not visible to the naked eye. In 2011, Neptune completed its first 165-year orbit since its discovery." />
              <Paragraph content="The planet’s rich blue color comes from methane in its atmosphere, which absorbs red wavelengths of light but allows blue ones to be reflected back into space." />
              <Paragraph
                content="Neptune was the first planet located through mathematical calculations. Using predictions sent him by French astronomer Urbain Le Verrier, based on disturbances in the orbit of Uranus, German asstronomer Johann Galle was first to observe the planet in 1846. The planet is named after the Roman god of the sea, as suggested by Le Verrier."
                className="mb-3"
              />
              <Title content="Potential for Life" />
              <Paragraph content="Neptune's environment is not conducive to life as we know it. The temperatures, pressures, and materials that characterize this planet are most likely too extreme and volatile for organisms to adapt to." />
              <Title content="Size and Distance" className="mb-3" />
              <Paragraph content="With a radius of 15,299.4 miles (24,622 kilometers), Neptune is about four times wider than Earth. If Earth were the size of a nickel, Neptune would be about as big as a baseball." />
              <Paragraph content="From an average distance of 2.8 billion miles (4.5 billion kilometers), Neptune is 30 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 4 hours to travel from the Sun to Neptune." />
            </div>
          }
        />
        <div className="container-for-modelviewer d-flex flex-column">
          <NightBackground>
            <model-viewer
              disable-tap
              auto-rotate
              shadow-intensity="1"
              id="model-planet"
              src={NeptuneModel}
              alt="Neptune model 3D"
              camera-controls
            ></model-viewer>
          </NightBackground>

          <div className="align-self-start model-description">
            <Paragraph
              content="A 3D model of Neptune, an ice giant planet."
              className="text-secondary m-0"
            />
            <Paragraph content="Use our technology and have fun!" />
          </div>
        </div>
        <div className="container new-font text-small">
          <Title content="Moons" />
          <Paragraph content="Neptune has 14 known moons. Neptune's largest moon Triton was discovered on October 10, 1846, by William Lassell, just 17 days after Johann Gottfried Galle discovered the planet. Since Neptune was named for the Roman god of the sea, its moons are named for various lesser sea gods and nymphs in Greek mythology." />
          <Paragraph content="Triton is the only large moon in the solar system that circles its planet in a direction opposite to the planet's rotation (a retrograde orbit), which suggests that it may once have been an independent object that Neptune captured. Triton is extremely cold, with surface temperatures around minus 391 degrees Fahrenheit (minus 235 degrees Celsius). And yet, despite this deep freeze at Triton, Voyager 2 discovered geysers spewing icy material upward more than 5 miles (8 kilometers). Triton's thin atmosphere, also discovered by Voyager, has been detected from Earth several times since, and is growing warmer, but scientists do not yet know why." />
          <Title content="Rings" />
          <Paragraph content="Neptune has at least five main rings and four prominent ring arcs that we know of so far. Starting near the planet and moving outward, the main rings are named Galle, Leverrier, Lassell, Arago, and Adams. The rings are thought to be relatively young and short-lived." />
          <Title content="Formation" />
          <Paragraph content="Neptune took shape when the rest of the solar system formed about 4.5 billion years ago when gravity pulled swirling gas and dust in to become this ice giant. Like its neighbor Uranus, Neptune likely formed closer to the Sun and moved to the outer solar system about 4 billion years ago." />
          <Title content="Structure" className="mb-3" />
          <Paragraph content="Neptune is one of two ice giants in the outer solar system (the other is Uranus). Most (80% or more) of the planet's mass is made up of a hot dense fluid of 'icy' materials – water, methane, and ammonia – above a small, rocky core. Of the giant planets, Neptune is the densest." />
          <Paragraph content="Scientists think there might be an ocean of super hot water under Neptune's cold clouds. It does not boil away because incredibly high pressure keeps it locked inside." />
          <Title content="Surface"/>
          <Paragraph content="Neptune does not have a solid surface. Its atmosphere (made up mostly of hydrogen, helium, and methane) extends to great depths, gradually merging into water and other melted ices over a heavier, solid core with about the same mass as Earth."/>
          <Title content="Atmosphere"/>
          <Paragraph content="Neptune's atmosphere is made up mostly of hydrogen and helium with just a little bit of methane. Neptune's neighbor Uranus is a blue-green color due to such atmospheric methane, but Neptune is a more vivid, brighter blue, so there must be an unknown component that causes the more intense color."/>
          <Paragraph content="Neptune is our solar system's windiest world. Despite its great distance and low energy input from the Sun, Neptune's winds can be three times stronger than Jupiter's and nine times stronger than Earth's. These winds whip clouds of frozen methane across the planet at speeds of more than 1,200 miles per hour (2,000 kilometers per hour). Even Earth's most powerful winds hit only about 250 miles per hour (400 kilometers per hour). In 1989 a large, oval-shaped storm in Neptune's southern hemisphere dubbed the 'Great Dark Spot' was large enough to contain the entire Earth. That storm has since disappeared, but new ones have appeared on different parts of the planet."/>
        </div>
        <div className="container mb-5">
          <Paragraph content="KEEP EXPLORING" className="text-exploring mt-5" />
          <Title content="Discover More Topics" className="mb-5" />
          <div className="row justify-content-center">
          <CardExploring
              className="saturn-moon style-background"
              content="Moons of Saturn"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute="/saturn/moon"
            />
            <CardExploring
              className="neptune-moon style-background"
              content="Moons of Neptune"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute="/neptune/moon"
            />
            <CardExploring
              className="pluto style-background"
              content="Pluto"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute="/dwarf-planets/pluto"
            />
            <CardExploring
              className="uranus style-background"
              content="Uranus"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute="/uranus"
            />
          </div>
        </div>
      </main>
      <footer>
        <NightBackground>
          <FinalPage />
        </NightBackground>
      </footer>
      <ScrollToTop />
    </>
  );
};

export default Neptune;

import BannerAbout from "../../layout/BannerAbout/BannerAbout"
import Collapse from "../../components/Collapse/Collapse"
import aboutJson from "../../../public/about.json";


const AboutPage = () => {
  return (
    <div>
      {/* --- Banner Section --- */}
      <BannerAbout />

      {/* --- Collapse Sections --- */}
      <div className="about">
        {aboutJson.map((item) => (
          <Collapse key={item.title} title={item.title}>
            {item.description}
          </Collapse>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
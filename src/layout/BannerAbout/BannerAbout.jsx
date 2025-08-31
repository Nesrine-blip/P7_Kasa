import ImgBannerAbout from "../../assets/image/banner2.png";

// render banner with background overlay
function BannerAbout() {
  return (
    <div className="banner">
      {/* banner image */}
      <img
        src={ImgBannerAbout}
        alt="banniére d'accueil"
        className="banner__img"
      />
      
      {/* overlay background */}
      <div className="banner__background"></div>
    </div>
  );
}

export default BannerAbout;

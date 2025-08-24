import ImgBannerAbout from "../../assets/image/banner2.png";

function BannerAbout() {
  return (
    <div className="banner">
      <img
        src={ImgBannerAbout}
        alt="banniére d'accueil"
        className="banner__img"
      />
      <div className="banner__background"></div>
    </div>
  );
}

export default BannerAbout;

import ImgBannerHome from '../../assets/image/banner.png';

// render home banner with background overlay and title
function BannerHome() {
  return (
    <div className="banner">
      
      {/* banner image */}
      <img 
        src={ImgBannerHome} 
        alt="Bannière d'accueil" 
        className="banner__img" 
      />
      
      {/* overlay background */}
      <div className="banner__background"></div>
      
      {/* banner title */}
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default BannerHome;

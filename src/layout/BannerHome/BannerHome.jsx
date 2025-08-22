import ImgBannerHome from '../../assets/image/banner.png'

function BannerHome() {
    return(
<div className="banner">

        <img src={ImgBannerHome} alt="Bannière d'accueil" className="banner__img" />

        <div className="banner__background"></div>

        <h1>Chez vous, partout et ailleurs</h1>

    </div>
        
    )
    
}
export default BannerHome;
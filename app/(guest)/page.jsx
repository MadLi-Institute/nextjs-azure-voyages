import AchieveSec from "./partials/AchieveSec"
import BannerSec from "./partials/BannerSec"
import DestinationSec from "./partials/DestinationSec"
import FeatureSec from "./partials/FeatureSec"
import GallerySec from "./partials/GallerySec"
import HeroSec from "./partials/HeroSec"
import PromoSec from "./partials/PromoSec"
import RegisterSec from "./partials/RegisterSec"

const Home = () => {
  return (
    <div>
      <HeroSec />
      <FeatureSec />
      <DestinationSec />
      <GallerySec />
      <RegisterSec />
      <BannerSec />
      <PromoSec />
      <AchieveSec />
    </div>
  )
}

export default Home
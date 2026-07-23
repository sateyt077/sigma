import partnerLogo from '../assets/images/partner-logo.png'
import footerBg from '../assets/images/footer.jpg'
import { productImageUrls } from '../data/products'

const ASSET_URLS = [...productImageUrls, partnerLogo, footerBg]

/** Warm image cache as soon as the app boots — before scroll/reveal. */
export function preloadPageAssets() {
  for (const url of ASSET_URLS) {
    const img = new Image()
    img.decoding = 'async'
    img.src = url
  }
}

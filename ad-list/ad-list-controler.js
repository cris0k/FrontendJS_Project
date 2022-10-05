import { pubSub } from "../pubSub.js";
import { getAds } from "../ad-list/ad-list-provider.js";
import { buildEmptyAds, buildSpinner, buildAdView } from "./ad-list-view.js";


export class AdListControler {

  constructor(nodeElement) {
    this.adsContainerElement = nodeElement;

    this.loadAds()
  }

  async loadAds() {
    this.adsContainerElement.innerHTML = buildSpinner()
    let ads = [];

    try {
      ads = await getAds();
    } catch (error) {
      
      pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'Not able to load adverts. Try again later')
      
    }

    if (ads.length === 0) {
      this.showAdsNotFound()
    }

    this.adsContainerElement.querySelector('.spinner').remove()

    this.drawAds(ads)
  }

  showAdsNotFound() {
    const divElement = document.createElement('div');
    divElement.innerHTML = buildEmptyAds()
    this.adsContainerElement.appendChild(divElement)
  }
                              
  drawAds(ads) {
    for (const ad of ads) {
      const divElement = document.createElement('div');
    
      divElement.innerHTML = buildAdView(ad)

      this.adsContainerElement.appendChild(divElement);

      
    }
  }


}
import { pubSub } from "../pubSub.js"
import { decodeToken } from "../utils/decodeToken.js";
import { getAdById, removeAdById } from "../ad-detail/ad-detail-provider.js"
import { buildAdDetail } from "../ad-detail/ad-detail-view.js";

export class AdDetailController {

  constructor(nodeElement) {
    this.adDetailElement = nodeElement
  }

  async drawAdDetail(adId) {
    try {
      const ads = await getAdById(adId);
      this.ads = ads;
      this.adDetailElement.innerHTML = buildAdDetail(ads)
      this.drawRemoveButton()
    } catch (error) {
      pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'Error obraining advert')
    }
  }

  drawRemoveButton() {
    // el usuario ha hecho login
    const token = localStorage.getItem('token');

    if (token) {
      // el usuario logado es el creador del ad que estamos viendo
      const tokenData = decodeToken(token);

      if (tokenData.userId === this.ads.userId) {
        const removeButton = this.adDetailElement.querySelector('.delete-bttn');
        removeButton.style.display = "block";
        removeButton.addEventListener('click', () => this.removeAd())
      }
    }
    
  }

  async removeAd() {
    const response = window.confirm('Are you sure you want to delete the advert?');
    if (response) {
      try {
        await removeAdById(this.ads.id)
        alert('Advert deleted successfully');
        window.location = '/'
      } catch (error) {
        pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'Sorry, the advert was not be deleted.')
      }
    }
  }
}
import { createApiAd } from "../new-ad/new-ad-provider.js";

export class CreateAdController {
  constructor(nodeElement) {
    this.createAdElement = nodeElement

    this.subscribeToEvents()
  }

  subscribeToEvents() {
    const createAdButton = this.createAdElement.querySelector('.button-post')

    this.createAdElement.addEventListener('submit', (event) => {
      event.preventDefault();
    })
    createAdButton.addEventListener('click', () => {
      try {
        this.createAd();
        window.location = "/"
        alert("Advert created successfully")
        
      } catch (error) {
          
        pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'Something went wrong and the advert was not created')
      }
      
    })
  }

  createAd() {
    const formData = new FormData(this.createAdElement);
    const photo = formData.get('photo');
    const name = formData.get('name');
    const price = formData.get('price');
    const description = formData.get('description');
    const sale = formData.get('selector');
    
    createApiAd(photo,name,price,description,sale);
  }
}
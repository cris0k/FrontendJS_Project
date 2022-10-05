import { NotificationController } from "../notifications/NotificationControler.js";
import { AdDetailController } from "./ad-detail-controler.js";

document.addEventListener('DOMContentLoaded', () => {

  const adDetailContainerElement = document.querySelector('.ad-detail-container');
  const notificationContainerElement = document.querySelector('.notification-container');
  
  const params = new URLSearchParams(location.search)
  const adId = params.get('id')

  const adDetailController = new AdDetailController(adDetailContainerElement)
  adDetailController.drawAdDetail(adId)
  const notificationController = new NotificationController(notificationContainerElement)
})
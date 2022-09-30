import { buildNotificationView } from "./notification-view.js";
import { pubSub } from "../pubSub.js";

export class NotificationController {

  constructor(nodeElement) {
    this.notificationElement = nodeElement;

    this.subscribeToEvents()
  }

  subscribeToEvents() {
    pubSub.subscribe(pubSub.TOPICS.NOTIFICATION_ERROR, (message) => {
      this.showNotification(message)
    })
  }

  showNotification(message) {
    this.notificationElement.innerHTML = buildNotificationView(message);
    
    const closeButtonElement = this.notificationElement.querySelector('.notification-bttn-close')

    closeButtonElement.addEventListener('click', () => {
      this.notificationElement.innerHTML = ''
    })
  }
}
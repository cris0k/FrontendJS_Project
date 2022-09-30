import { NotificationController } from "./notifications/NotificationControler.js";
import { AdListControler } from "./ad-list/ad-list-controler.js";

document.addEventListener('DOMContentLoaded', () => {
    const createControllers = () => {
        const adListElement = document.querySelector('#ad-list');
        const notificationElement = document.querySelector('#notification');

        const notificationController = new NotificationController(notificationElement)
        const adListControler = new AdListControler(adListElement)
  }
  createControllers();
});

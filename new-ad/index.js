import { NotificationController } from "../notifications/NotificationControler.js";
import { pubSub } from "../pubSub.js";
import { CreateAdController } from "../new-ad/new-ad-controler.js";

document.addEventListener('DOMContentLoaded', () => {

  const checkUserLogged = () => {
    const token = localStorage.getItem('token');

    if (!token) {
      pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'Not autorized')
      setTimeout(() => {
        window.location = '../signUp.html'
      }, 2000);
    }
  }

  const notificationContainerElement = document.querySelector('.notification-container');
  const notificationController = new NotificationController(notificationContainerElement);

  const createAdElement = document.querySelector('.new-ad-form');
  const createAdController = new CreateAdController(createAdElement)

  checkUserLogged();
})
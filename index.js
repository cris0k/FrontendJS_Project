import { NotificationController } from "./notifications/NotificationControler.js";
import { AdListControler } from "./ad-list/ad-list-controler.js";
import { decodeToken } from "../utils/decodeToken.js";

document.addEventListener('DOMContentLoaded', () => {
    const createControllers = () => {
        const adListElement = document.querySelector('#ad-list');
        const notificationElement = document.querySelector('#notification');

        const notificationController = new NotificationController(notificationElement)
        const adListControler = new AdListControler(adListElement)
  }
  const handleUserLogged = () => {
    const token = localStorage.getItem('token')
    const userActions = document.querySelector('#user-actions')
    const tokenData = decodeToken(token);
    const loggedUser = document.querySelector('#user')
    
    if (token) {
      userActions.innerHTML = '<a class="newpost" href="/newAd.html">Post New Advert</a>'
      loggedUser.innerHTML = `<p>Hi ${tokenData.username}!</p>`
      
    }
    
  }


  createControllers();
  handleUserLogged();
});

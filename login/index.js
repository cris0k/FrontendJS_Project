import { LoginController } from "/login/login-controler.js";
import { NotificationController } from "/notifications/NotificationControler.js";

document.addEventListener('DOMContentLoaded', () => {
  const loginFormElement = document.querySelector('#login-form')
  const notificationElement = document.querySelector('.notification')
    
  const loginController = new LoginController(loginFormElement)
  const notificationController = new NotificationController(notificationElement)
  })
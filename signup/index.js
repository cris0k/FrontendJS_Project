import { SignupController } from "./signup-controler.js"
import { NotificationController } from "../notifications/NotificationControler.js"

document.addEventListener('DOMContentLoaded', () => {
  const createUserFormElement = document.querySelector('#sigin-form')
  const notificationElement = document.querySelector('.notification')
  
  const signupController = new SignupController(createUserFormElement)
  const notificationController = new NotificationController(notificationElement)
})
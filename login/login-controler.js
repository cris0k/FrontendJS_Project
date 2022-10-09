import { pubSub } from "../pubSub.js";
import { loginApiUser } from "../login/login-provider.js";

export class LoginController {
  constructor(nodeElement) {
    this.loginElement = nodeElement;

    this.suscribeToEvents()
  }
    
  suscribeToEvents() {
    this.loginElement.addEventListener('submit',(event) => {
      event.preventDefault()
      this.loginUser()
    })

    const loginInputElements = Array.from(this.loginElement.querySelectorAll('input'))
    
    const loginButtonElement = this.loginElement.querySelector('#loginUserBttn')

    loginInputElements.forEach(loginInputElement => {
      loginInputElement.addEventListener('input', () => {
        const areInputsFilled = loginInputElements.every(inputElement => inputElement.value)
        if (areInputsFilled) {
          loginButtonElement.removeAttribute('disabled')
        } else {
          loginButtonElement.setAttribute('disabled', '')
        }
      })
    })
  }

  async loginUser() {
    const formData = new FormData(this.loginElement);
    const username = formData.get('username')
    const password = formData.get('password')
    try {
      const jwt = await loginApiUser(username, password)
      localStorage.setItem('token', jwt)
      window.location.href="/";
      alert(`Hi ${username}. You logged in successfully`)
    } catch (error) {
      pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, `Log in failed`)
    }
  }
    

}
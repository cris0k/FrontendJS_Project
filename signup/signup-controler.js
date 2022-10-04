import { pubSub } from "../pubSub.js";
import { createApiUser, loginApiUser } from "./signup-provider.js";

export class SignupController {
  constructor(nodeElement) {
    this.signupElement = nodeElement;

    this.subscribeToEvents()
    
  }

  subscribeToEvents() {
    this.signupElement.addEventListener('submit', (event) => {
      event.preventDefault()
      this.validatePassword()
    })

    const createUserInputElements = Array.from(this.signupElement.querySelectorAll('input'))
    const createUserButtonElement = this.signupElement.querySelector('#createUserButton')

    createUserInputElements.forEach(createUserInputElement => {
      createUserInputElement.addEventListener('input', () => {
        const areInputsFilled = createUserInputElements.every(inputElement => inputElement.value)
        if (areInputsFilled) {
          createUserButtonElement.removeAttribute('disabled')
        } else {
          createUserButtonElement.setAttribute('disabled', '')
        }
      })
    })
  }

  validatePassword() {
    const passwordElement = this.signupElement.querySelector('#password')
    const confirmPasswordElement = this.signupElement.querySelector('#confirmPassword')
    const minLength = 6;
    
    if (passwordElement.value.length < minLength ) {
      pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, `The password must have be at least ${minLength} characters long`)
      return false;
    }

    if (passwordElement.value !== confirmPasswordElement.value) {
      pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, `Passwords do not match`)
      return false;
    }
    
    const regExp = new RegExp(/^[a-zA-Z0-9]*$/)

    if (regExp.test(passwordElement.value)) {
      console.log("regExp validation done")
    } else { 
      pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, `Simbols not allowed. Only letters and numbers`)
      return false;
    }
    this.createUser();

  }

  async createUser() {
    const formData = new FormData(this.signupElement);
    const username = formData.get('username')
    const password = formData.get('password')

    try {
      await createApiUser(username, password)
      const jwt = await loginApiUser(username, password)
      localStorage.setItem('token', jwt)
      console.log("token",jwt)
    } catch (error) {
      pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, `Something went wrong and the user has not been created`)
    }
  }
  
}

/* // comportamiento de nuestro formulario

  
  - El usuario y la password NO pueden estar vacíos.
   */
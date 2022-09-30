export const buildNotificationView = (message) => {
    return `
      <p>${message}</p>
      <button class="notification-bttn-close">Close</button>
    `;
  }
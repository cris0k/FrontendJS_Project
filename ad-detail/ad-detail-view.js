export const buildAdDetail = (ads) => {
  if (ads.sale === true){
    ads.sale = "Selling"
  }else{
    ads.sale = "Searching"
  }

  return `
    <div>
    <img class="ad-img" src="${ads.photo}" alt="${ads.name}"></img>
    </div>
    <div class="ad-data">
      <p>Hi ${ads.user.username}!</p>
      <p class="ad-name" >${ads.name}</p>
      <p>${ads.sale}</p>
      <p>Price: ${ads.price}€</p>
      <p>${ads.description}</p>
    </div>
    <button class="delete-bttn" style="display: none">Delete Advert</button>
    `
  }
export const buildAdDetail = (ads) => {
  
  const noPhotoImg = "https://lyrictheatreokc.com/wp-content/uploads/2021/11/Ciao-Ciao-Image-Coming-Soon-500px.jpg"

  
  return `
    <div>
    <img class="ad-img" src="${ads.photo || noPhotoImg}" alt="${ads.name}"></img>
    </div>
    <div class="ad-data">
      <p>Posted by : ${ads.user.username}</p>
      <p class="ad-name" >${ads.name}</p>
      <p>${ads.sale}</p>
      <p>Price: ${ads.price}€</p>
      <p>${ads.description}</p>
      
    <button class="offer-bttn">Send an offer</button>
    <button class="delete-bttn" style="display:none">Delete Advert</button>
    </div>
    
    `
  }
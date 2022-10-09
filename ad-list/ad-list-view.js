export const buildAdView = (ads) => {

  const noPhotoImg = "https://lyrictheatreokc.com/wp-content/uploads/2021/11/Ciao-Ciao-Image-Coming-Soon-500px.jpg"

  if(ads.photo === "") {
      ads.photo = noPhotoImg
    }
  
   const adView = `
  <div class="ad">
    <a href="http://localhost:8080/adDetail.html?id=${ads.id}">
      <img class="ad-img" src="${ads.photo}" alt="${ads.name}"></img>
      
      <p class="ad-name" >${ads.name}</p>
    </a>
    <p>${ads.price}€</p>
    <p>${ads.sale}</p>
    
    
    </div> 
  `
  return adView;
}

export const buildSpinner = () => {
    return `
    <div class="spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    `
  }

export const buildEmptyAds = () => {
  
    return `
    <h2>Adverts not available</h2>
    `
  }

  
 

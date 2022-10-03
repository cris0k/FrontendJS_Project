export const buildAdView = (ads) => {

  if (ads.sale === true){
    ads.sale = "Selling"
  }else{
    ads.sale = "Searching"
  }

  const adView = `
  <div class="ad">
    <a href="http://localhost:8080/">
      <img class="ad-img" src="${ads.photo}" alt="${ads.name}"></img>
      
      <p class="ad-name" >${ads.name}</p>
    </a>
    <p>${ads.sale}</p>
    <p>Price: ${ads.price}€</p>
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

  
 

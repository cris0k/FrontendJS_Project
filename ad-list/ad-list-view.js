export const buildAdView = (ads) => {

  const adView = `
  <div class="ad">
    <a href="http://localhost:8080/">
      <img class="ad-img" src="${ads.photo}" alt="${ads.name}"></img>
      
    <p class="ad-name" >${ads.name}</p>
    </a>
    <p>Sale: ${ads.sale}</p>
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
import { sparrestApi } from "../SparrestApi.js"

export const createApiAd = async(photo,name,price,description,sale) => {
   const ad = {
    photo : photo,
    name : name,
    price : price,
    description : description,
    sale : sale
  }
  await sparrestApi.post(sparrestApi.endpoints.ads, ad)

}


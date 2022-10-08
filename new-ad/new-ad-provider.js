import { sparrestApi } from "../SparrestApi.js"

export const createApiAd = (ad) => {
  sparrestApi.post(sparrestApi.endpoints.ads, { 
    ad : ad
  })
}
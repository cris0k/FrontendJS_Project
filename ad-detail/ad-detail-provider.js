import { sparrestApi } from "../SparrestApi.js"

export const getAdById = async (adId) => {
  const ads = await sparrestApi.get(`${sparrestApi.endpoints.ads}/${adId}?_expand=user`)

  return ads;
}

export const removeAdById = async (adId) => {
  await sparrestApi.delete(`${sparrestApi.endpoints.ads}/${adId}`)
}
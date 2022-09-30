import { sparrestApi } from "../SparrestApi.js";

export async function getAds() {

  const endpoint = `${sparrestApi.endpoints.ads}`
  const ads = await sparrestApi.get(endpoint)

  return ads;
}
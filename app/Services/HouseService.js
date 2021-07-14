import { ProxyState } from "../AppState.js"
import House from "../Models/House.js"


class HouseService {
  makeHouse(newHouse) {
    ProxyState.house = [...ProxyState.house, new House(newHouse)]
  }
}

export const houseService = new HouseService()
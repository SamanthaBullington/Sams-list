import { ProxyState } from "../AppState.js"
import House from "../Models/House.js"


class HouseService {
  createHouse(newHouse) {
    ProxyState.house = [...ProxyState.house, new House(newHouse)]
  }
}

export const carsService = new HouseService()
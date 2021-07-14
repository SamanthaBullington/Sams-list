import { ProxyState } from "../AppState.js"
import Car from "../Models/Car.js"


class CarsService {
  makeCar(newCar) {
    ProxyState.cars = [...ProxyState.cars, new Car(newCar)]
  }
}


// Singleton Only one instance is ever made and the same instance is always exported
export const carsService = new CarsService()
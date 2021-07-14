import { ProxyState } from "../AppState.js"
import { carsService } from "../Services/CarsService.js"

function _draw() {
  let template = ''
  ProxyState.cars.forEach(car => {
    template += car.Template
  })
  // document.getElementById('cars').innerHTML = template
}

export default class CarsController {
  constructor() {

    ProxyState.on('cars', _draw)
    ProxyState.on('cars', () => { console.log('new car') })
    _draw()
  }

  makeCar() {
    event.preventDefault()
    let form = event.target
    let newCar = {
      make: form.make.value,
      model: form.model.value,
      year: form.year.value,
      price: form.price.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value
    }
    carsService.makeCar(newCar)
    form.reset()
  }
}
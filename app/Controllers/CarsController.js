import { ProxyState } from "../AppState.js"
import { houseService } from "../Services/HouseService.js"

function _draw() {
  let template = ''
  ProxyState.cars.forEach(car => {
    template += car.Template
  })
  // document.getElementById('cars').innerHTML = template
}

export default class CarsController {
  constructor() {

    ProxyState.on('house', _draw)
    ProxyState.on('house', () => { console.log('new house') })
    _draw()
  }

  makeCar() {
    event.preventDefault()
    let form = event.target
    let newHouse = {
      year: form.year.value,
      bed: form.bed.value,
      bath: form.bath.value,
      price: form.price.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value
    }
    houseService.makeHouse(newHouse)
    form.reset()
  }
}
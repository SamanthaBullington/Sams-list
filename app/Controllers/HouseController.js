import { ProxyState } from "../AppState.js"
// import { houseService } from "../Services/HouseService.js"

function _draw() {
  let template = ''
  ProxyState.houses.forEach(house => {
    template += House.Template
  })
  // document.getElementById('house').innerHTML = template
}

export default class CarsController {
  constructor() {

    ProxyState.on('houses', _draw)
    ProxyState.on('houses', () => { console.log('new house') })
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
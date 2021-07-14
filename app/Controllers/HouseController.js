import { ProxyState } from "../AppState.js"
import { houseService } from "../Services/HouseService.js"

function _draw() {
  let template = ''
  ProxyState.houses.forEach(house => {
    template += house.Template
  })
  // document.getElementById('house').innerHTML = template
}

export default class HouseController {
  constructor() {

    ProxyState.on('houses', _draw)
    ProxyState.on('houses', () => { console.log('new house') })
    _draw()
  }

  makeHouse() {
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
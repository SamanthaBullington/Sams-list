import Value from "./Models/Value.js"
import Car from "./Models/Car.js"
import House from "./Models/House.js"
import Job from "./Models/Job.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
  cars = [
    new Car({
      make: 'Ford',
      model: 'Pinto',
      year: 1987,
      price: 1200,
      description: 'This Car is HOT!',
      imgURL: 'https://blog.automedicsafrica.com/wp-content/uploads/2015/08/Impala-vs-Pinto-750x547.jpg'
    })]
  houses = [
    new House({
      year: 1989,
      bed: 3,
      bath: 2,
      price: 1500,
      description: 'This house is huge!',
      imgURL: 'https://via.placeholder.com/150'
    })]
  jobs = [
    new Job({
      position: 'Sull-Stack Developer',
      location: 'Everett,WA',
      pay: 16,
      description: 'This job is cool!',
      imgURL: 'https://via.placeholder.com/150'
    }),]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

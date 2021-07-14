export default class Job {
  constructor({ position, description, location, pay, imgURL }) {
    this.position = position
    this.location = location
    this.pay = pay
    this.description = description || "No job description given"
    this.imgURL = imgURL || 'placehold.it/2000x200'


  }

}
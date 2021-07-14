export default class House {
  constructor({ year, bed, bath, price, squarefeet, description, imgURL }) {
    this.year = year
    this.bed = bed
    this.bath = bath
    this.squarefeet = squarefeet
    this.price = price
    this.description = description || "No home description given"
    this.imgURL = imgURL || 'placehold.it/2000x200'


  }

}
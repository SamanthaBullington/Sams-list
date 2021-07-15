export default class Car {
  constructor({ make, model, year, price, description, imgURL }) {
    this.make = make
    this.model = model
    this.year = year
    this.price = price
    this.description = description || "No car description given"
    this.imgURL = imgURL || 'https://via.placeholder.com/150'

  }

  get Template() {
    return `
    <div class="col-md-6 col-sm-2">
      <div class="car bg=light shadow">
        <img src="${this.imgURL}" class="w-100" alt="${this.make} ${this.model} car image">
          <div class="p-3">
            <div class="text-center">
              <p><b>${this.year} - ${this.make} - ${this.model}</b></p>
            </div>
            <p>${this.description}</p>
            <p><em>$${this.price}</em></p>
          </div>
      </div>
      </div>
      `
  }

}
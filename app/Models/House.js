export default class House {
  constructor({ year, bed, bath, price, description, imgURL }) {
    this.year = year
    this.bed = bed
    this.bath = bath
    this.price = price
    this.description = description || "No home description given"
    this.imgURL = imgURL || 'https://via.placeholder.com/150'
  }
  get Template() {
    return `
    <div class="col-md-6 col-sm-2">
      <div class="house bg=light shadow">
        <img src="${this.imgURL}" class="w-100" alt="${this.year} ${this.price} house image">
          <div class="p-3">
            <div class="text-center">
              <p><b>${this.year} - ${this.bed} - ${this.bath} - ${this.bath}</b></p>
            </div>
            <p>${this.description}</p>
            <p><em>$${this.price}</em></p>
          </div>
      </div>
      </div>
      `
  }

}
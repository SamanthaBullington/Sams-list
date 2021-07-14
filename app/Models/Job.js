export default class Job {
  constructor({ position, description, location, pay, imgURL }) {
    this.position = position
    this.location = location
    this.pay = pay
    this.description = description || "No job description given"
    this.imgURL = imgURL || 'placehold.it/100x100'


  }
  get Template() {
    return `
    <div class="col-md-6 col-sm-2">
      <div class="job bg=light shadow">
        <img src="${this.imgUrl}" class="w-100" alt="${this.position} ${this.location} job image">
          <div class="p-3">
            <div class="text-center">
              <p><b>${this.position} - ${this.location}</b></p>
            </div>
            <p>${this.description}</p>
            <p><em>$${this.pay}</em></p>
          </div>
      </div>
      </div>
      `
  }

}

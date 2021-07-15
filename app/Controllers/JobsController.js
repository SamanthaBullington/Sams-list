import { ProxyState } from "../AppState.js"
import { jobsService } from "../Services/JobsService.js"

function _draw() {
  let template = ''
  ProxyState.jobs.forEach(job => {
    template += job.Template
  })
  document.getElementById('jobs').innerHTML = template
}

export default class JobsController {
  constructor() {

    ProxyState.on('jobs', _draw)
    ProxyState.on('jobs', () => { console.log('new job') })
    _draw()
  }

  makeJob() {
    event.preventDefault()
    let form = event.target
    let newJob = {
      position: form.position.value,
      location: form.location.value,
      pay: form.pay.value,
      description: form.description.value,
      imgURL: form.imgURL.value
    }
    jobsService.makeJob(newJob)
    form.reset()
  }
}
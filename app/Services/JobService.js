import { ProxyState } from "../AppState.js"
import Job from "../Models/Job.js"


class JobService {
  createJob(newCar) {
    ProxyState.jobs = [...ProxyState.cars, new Job(newJob)]
  }
}


// Singleton Only one instance is ever made and the same instance is always exported
export const jobService = new JobService()
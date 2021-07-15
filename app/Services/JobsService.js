import { ProxyState } from "../AppState.js"
import Job from "../Models/Job.js"


class JobsService {
  makeJob(newJob) {
    ProxyState.jobs = [...ProxyState.jobs, new Job(newJob)]
  }
}


// Singleton Only one instance is ever made and the same instance is always exported
export const jobsService = new JobsService()
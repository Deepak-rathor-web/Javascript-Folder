let jobs = [
  { jobTitle: "Developer", isApplied: true, isRemote: true },
  { jobTitle: "Designer", isApplied: false, isRemote: false }
];

for (let i = 0; i < jobs.length; i++) {
  let workType;

  if (jobs[i].isRemote) {
    workType = "remote";
  } else {
    workType = "in-office";
  }

  if (jobs[i].isApplied) {
    console.log("Applied for " + workType + " role: " + jobs[i].jobTitle);
  } else {
    console.log("Haven't applied for the " + workType + " role: " + jobs[i].jobTitle);
  }
}

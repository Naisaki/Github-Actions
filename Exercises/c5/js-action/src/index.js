import * as core from "@actions/core";
import * as github from "@actions/github";
import fs from "fs";

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput("who-to-greet");
  core.info(`Hello ${nameToGreet}!`);

  // Get the current time
  const time = new Date().toTimeString();

  // Set output using environment file (nueva forma)
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `time=${time}\n`);

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  core.info(`The event payload: ${payload}`);

} catch (error) {
  core.setFailed(error.message);
}
import * as core from "npm:@actions/core";
import * as github from "npm:@actions/github";
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";

const token = core.getInput("token");
const octokit = github.getOctokit(inputs.token);

const repository = core.getInput("repository");

const issue = core.getInput("issue") || github.context.issue?.number;
const pullRequest =
  core.getInput("pull-request") || github.context.pull_request?.number;
const commit = core.getInput("commit") || github.context.something;

const bodyFile = core.getInput("body-file");
const body = core.getInput("body") || (await readFile(bodyFile, "utf8"));

const [owner, ]
const {data: comment} = await octokit.rest.repos.createCommitComment({
  owner: owner,
  repo: repo,
  commit_sha: sha,
  body: body,
  path: path,
  position: position
})

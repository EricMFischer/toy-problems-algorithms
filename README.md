# Toy Problems

Welcome to Toy Problems. This repository will be updated every morning with a new
code challenge.

Feel free to use Google to aid you in solving the coding challenges!

## Using this Repository

You'll find each day's toy problem in its own folder.

## Getting a Copy of the Repo

If you haven't already, fork the repository on GitHub and clone your newly created
repo down to your computer.

## Submitting your Solutions

**VERY IMPORTANT: Before submitting your solutions, find and fix all syntax errors**

Solutions are submitted via [Pull Request](https://help.github.com/articles/using-pull-requests). Follow these steps:

1. From **your fork**, select `Pull Requests` and then create a `New pull request`.
2. STOP. *Before* you `Click to create a pull request for this comparison` you must **adjust the target branch** (aka `base branch`) to be your username. Once chagned, the pull-request heading should look like this:

  > hackreactor:username ... username:master

3. Copy and **paste the completed Grading Outline into the comment block** of your Pull Request.
4. Click `Send pull request`

## Updating the Repository

Every morning, when a new toy problem is added, you'll need to sync your version of
the repo with hackreactor's. Git won't automatically pull in upstream changes for
you; it trusts that you'll pull them in as needed. Do so by giving Git a reference
to hackreactor's version of the repo:

    git remote add upstream https://github.com/hackreactor/YYYY-MM-toy-problems.git

  > Be sure to substitue `YYYY-MM` with your actual cohort prefix! (ex: 2015-05)

After you've done that, updating your repo is as simple as running the following:

    git checkout master       // Your fork's master branch
    git pull upstream master  // Your class's master branch

This will check out your branch and tell git to grab any changes made to the main
repository and merge them into your branch.

## Resolving Taser's Unmergeable Pull Request

You may encounter a scenario where Taser will not merge your pull request. This
often happens as a result of your upstream branch becoming out of sync with your
local copy. To resolve this problem, run:

    git pull upstream <your-branch-name>

Resolve any conflicts, merge, commit and push. You will then be able to submit a
Pull Request that will get correctly merged.


# Tabulated Recent Activity

This GitHub Action is a fork of [recent-activity](https://github.com/Readme-Workflows/recent-activity) by [Readme-Workflows](https://github.com/Readme-Workflows).  
It is nearly identical, with the only difference being that the recent activity data is tabulated.

This GitHub Action can also be found [on the marketplace](https://github.com/marketplace/actions/readme-github-activity-tabulated).

## Preview

![image](https://user-images.githubusercontent.com/5704760/187016369-d47b93fa-c53a-4ea2-95ff-8579fcb52df0.png)

## To Use

1. Create a `.github/workflows/update-readme.yml` file in your Username/Username repository
2. Paste the following into the newly created file:
```
name: Update README

on:
  schedule:
    - cron: '*/30 * * * *' # Update every 30 minutes
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    name: Update Profile README

    steps:
      - uses: actions/checkout@v3
      #
      # "{version}" is a placeholder and should be replaced with the latest release of recent-activity
      - uses: Bonfire/recent-activity@{version}
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
3. Replace the `{version}` above with the latest version of this workflow
4. In your README file, add the following code:
```
<table align="center">
  <tbody>
  <!--RECENT_ACTIVITY:start-->
  <!--RECENT_ACTIVITY:end-->
  </tbody>
</table>
```

## Note

All rights (except for the data tabulation) go to the original, forked repository.

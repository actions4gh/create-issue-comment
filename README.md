# Create GitHub comment

➕ Create a new comment on a GitHub Issue, Pull Request, or commit

<p align=center>
  <img src="">
</p>

👀 To edit ✏️ or react 👍 to an existing comment, check out
[actions4gh/update-issue-comment]

## Usage

**🚀 Here's what you're after:**

```yml
on:
  issues:
    types: labeled
jobs:
  create-comment:
    if: github.event.label.name == 'lorem-ipsum'
    permissions:
      issues: write
    runs-on: ubuntu-latest
    steps:
      - shell: gh issue comment -R ${{ github.repository }} ${{ github.event.issue.number }} -F {0}
        run: >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

💡 The GitHub CLI is always provided on all GitHub runners. To install it on
other platforms & images, check out [actions4gh/setup-github-cli].

```sh
gh issue comment {<number> | <url>} [flags]
```

[📚 gh issue comment | GitHub CLI](https://cli.github.com/manual/gh_issue_comment)

<!-- prettier-ignore-start -->
[restrictions on forks]: https://github.com/peter-evans/create-pull-request/blob/main/docs/concepts-guidelines.md#restrictions-on-repository-forks
[yaml-multiline.info]: https://yaml-multiline.info/
<!-- prettier-ignore-end -->

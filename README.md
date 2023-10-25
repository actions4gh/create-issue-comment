# Create GitHub Issue comment

➕ Create a new comment on a GitHub Issue

<p align=center>
  <img src="">
</p>

👀 To edit ✏️ or react 👍 to an existing GitHub Issue comment, check out
[actions4gh/update-issue-comment]

## Usage

**🚀 Here's what you're after:**

```yml
name: Lorem Ipsum comment
on:
  issues:
    types: labeled
jobs:
  lorem-ipsum-comment:
    if: github.event.label.name == 'lorem ipsum'
    permissions:
      issues: write
    runs-on: ubuntu-latest
    steps:
      - run: gh issue comment -R "$REPOSITORY" "$NUMBER" -b "$BODY"
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          REPOSITORY: ${{ github.repository }}
          NUMBER: ${{ github.event.issue.number }}
          BODY: >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
```

💡 The GitHub CLI is always provided on all GitHub runners. To install it on
other platforms & images, check out [actions4gh/setup-github-cli].

```sh
gh issue comment {<number> | <url>} [flags]
```

**`gh issue comment` options:** <sup>(excerpt)</sup>

- **`-b`, `--body <text>`:** The comment body text

- **`-F`, `--body-file <file>`:** Read body text from file (use "-" to read from
  standard input)

- 🌟 **`--edit-last`:** Edit the last comment of the same author

- **`-R`, `--repo <[HOST/]OWNER/REPO>`:** Select another repository using the
  `[HOST/]OWNER/REPO` format

[📚 gh issue comment | GitHub CLI](https://cli.github.com/manual/gh_issue_comment)

<!-- prettier-ignore-start -->
[actions4gh/setup-github-cli]: https://github.com/actions4gh/setup-github-cli#readme
<!-- prettier-ignore-end -->

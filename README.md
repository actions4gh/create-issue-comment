# Create GitHub Issue comment

💬 Create a new comment on a GitHub Issue

<p align=center>
  <img src="https://i.imgur.com/ZFJpji1.png">
</p>

👨‍💻 Use the [GitHub CLI] \
😱 You don't even need a GitHub Action to do it!

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
      - run: gh issue comment "$NUMBER" --body "$BODY"
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          GH_REPO: ${{ github.repository }}
          NUMBER: ${{ github.event.issue.number }}
          BODY: >
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
```

[➕ Create a new Issue and try it out!](https://github.com/actions4gh/create-issue-comment/issues/new?assignees=&labels=try+me&projects=&template=try-me-.md&title=Try+me%21)

💡 The GitHub CLI is always provided on all GitHub runners. To install it on
custom runners check out [actions4gh/setup-gh].

```sh
gh issue comment {<number> | <url>} [flags]
```

**`gh issue comment` options:** <sup>(excerpt)</sup>

- **`-b`, `--body <text>`:** The comment body text

- **`-F`, `--body-file <file>`:** Read body text from file (use "-" to read from
  standard input)

- **`--edit-last`:** Edit the last comment of the same author

- **`-R`, `--repo <[HOST/]OWNER/REPO>`:** Select another repository using the
  `[HOST/]OWNER/REPO` format

[📚 gh issue comment | GitHub CLI](https://cli.github.com/manual/gh_issue_comment)

[github cli]: https://cli.github.com/
[actions4gh/setup-gh]: https://github.com/actions4gh/setup-gh

# Create comment

➕ Create a new comment on a GitHub Issue, Pull Request, or commit

✏️ To edit an existing comment, check out [actions4gh/update-comment] \
👍 To add a Reaction emoji to a comment, Issue, or Pull Request, check out
[actions4gh/reactions]

## Usage

**🚀 Here's what you're after:**

```yml
on:
  issues:
    types: labeled
jobs:
  create-comment:
    if: github.event.label.name == 'help-wanted'
    permissions:
      issues: write
    runs-on: ubuntu-latest
    steps:
      - uses: actions4gh/create-comment@v1
        with:
          body: >
            This issue is available for anyone to work on. **Make sure to
            reference this issue in your pull request.** :sparkles: Thank you
            for your contribution! :sparkles:
```

There are three main targets for comments: GitHub Issues, Pull Requests, and
commits. By default the target of this action will depend on the type of event
that triggered it. For `on: issue` triggers it will use the **current Issue**. For
`on: pull_request` triggers it will use **that Pull Request**. For `on: push` events
it will use **that commit**. To target the active Pull Request for `on: push` events
you can **use `pull-request: true`**.

You can target Issues, Pull Requests, and commits explicitly like this:

**✅ Add a comment to an Issue:**

```yml
- uses: actions4gh/create-comment@v1
  with:
    issue: ${{ github.event.issue.number }}
    body: Hello Issue!
```

**🔀 Add a comment to a Pull Request:**

```yml
- uses: actions4gh/create-comment@v1
  with:
    pull-request: ${{ github.event.pull_request.number }}
    body: Hello Pull Request!
```

**📄 Add a comment to a commit:**

```yml
- uses: actions4gh/create-comment@v1
  with:
    commit: ${{ github.sha }}
    body: Hello commit!
```

### Inputs

- **`token`:** The GitHub token to use when creating the comment. By default this will use the `github.token`. Make sure your token has permissions to edit Issues, Pull Requests, commits, etc. in order to successfully create the comment!

    <details><summary>Why doesn't it work on Pull Requests from forks?</summary>

    In *public* repositories this action does not work in `pull_request` workflows when triggered by forks.
    Any attempt will be met with the error, `Resource not accessible by integration`.
    This is due to token restrictions put in place by GitHub Actions. Private repositories can be configured to [enable workflows from private forks] to run without restriction. See [here](https://github.com/peter-evans/create-pull-request/blob/main/docs/concepts-guidelines.md#restrictions-on-repository-forks) for further explanation. Alternatively, use the [`pull_request_target`](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#pull_request_target) event to comment on pull request commits.

    </details>

- **`repository`:** Which repository to use to dereference the `issue`, `pull-request`, or `commit` inputs. By default this will use the current `github.repository` context.

- **`issue`:**

- **`pull-request`:**

- **`commit`:**

#### Outputs

The ID of the created comment will be output for use in later steps.
Note that in order to read the step output the action step must have an id.

```yml
      - name: Create commit comment
        uses: peter-evans/commit-comment@v3
        id: cc
        with:
          body: |
            My comment
      - name: Check outputs
        run: |
          echo "Comment ID - ${{ steps.cc.outputs.comment-id }}"
```

### Setting the comment body from a file

```yml
      - name: Create commit comment
        uses: peter-evans/commit-comment@v3
        with:
          body-path: 'comment-body.md'
```

### Using a markdown template

In this example, a markdown template file is added to the repository at `.github/comment-template.md` with the following content.
```
This is a test comment template
Render template variables such as {{ .foo }} and {{ .bar }}.
```

The template is rendered using the [render-template](https://github.com/chuhlomin/render-template) action and the result is used to create the comment.
```yml
      - name: Render template
        id: template
        uses: chuhlomin/render-template@v1.4
        with:
          template: .github/comment-template.md
          vars: |
            foo: this
            bar: that

      - name: Create commit comment
        uses: peter-evans/commit-comment@v3
        with:
          body: ${{ steps.template.outputs.result }}
```

### Accessing commits and comments in other repositories

You can create and update commit comments in another repository by using a [PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) instead of `GITHUB_TOKEN`.
The user associated with the PAT must have write access to the repository.

## License

[MIT](LICENSE)

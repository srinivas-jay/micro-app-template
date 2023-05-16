# MonorepoTemplate

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## commitlint

This project uses [commitlint](https://commitlint.js.org/#/) to enforce commit message conventions. The commit message conventions are defined in the [commitlint.config.js](commitlint.config.js) file.

## Husky

This project uses [husky](https://typicode.github.io/husky/#/) to run git hooks. The git hooks are defined in the [husky.config.js](husky.config.js) file.

as part of yarn install husky will run `husky install` which will create a `.husky` directory and add a `pre-commit` hook to the `.git/hooks` directory. The `pre-commit` hook will run `yarn lint` before allowing a commit to be made.

```
npx husky add .husky/pre-commit "npx lint-staged"
```

```
# .husky/commit-msg (v8)
npx --no -- commitlint --edit $1
```

```
npx husky add .husky/commit-msg "npx --no -- commitlint --edit $1"
```

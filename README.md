# tiro-website

Live at: https://mbeckem.github.io/tiro-website/

## Development setup

- Run `yarn install`
- Run `yarn dev` to start the development server
- Visit http://localhost:3000/tiro-website

## Local production server

Inside packages/website:

```sh
$ yarn build && yarn start
```

## Building static html

Inside packages/website:

- Run `yarn export`

## Building tiro apidocs

- Install [doxybook2](https://github.com/matusnovak/doxybook2)
- Build doxygen xml database in the tiro repository, e.g.

  ```sh
  $ cmake .. -DTIRO_DOCS=1
  $ ninja docs
  ```

- Run doxybook to generate the markdown documentation, e.g.

  Inside packages/website:

  ```sh
  $ doxybook2 -c docs/apidocs/.doxybook/config.json --input ~/projects/tiro/build/docs/api/xml --output docs/apidocs/
  ```

  NOTE: At this time, doxybook2 does not support relative links in its generated output.
  Keep the baseUrl in apidocs/.doxybook/config.json in sync with the base url of the api documentation.

## Deploying the site

- Once (for setup): run `yarn run init-site`
- To deploy, run `yarn run deploy`.
  It will perform a clean build and push the changes to github.

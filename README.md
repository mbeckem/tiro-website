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

  > NOTE: For now please use the fork at https://github.com/mbeckem/doxybook2 for better markdown output.

- Build doxygen xml database in the tiro repository, e.g.

  ```sh
  $ cmake .. -DTIRO_DOCS=1
  $ ninja docs
  ```

- Run doxybook to generate the markdown documentation, e.g.

  Inside packages/website:

  ```sh
  $ cd packages/website
  $ doxybook2 -c docs/apidocs/.doxybook/config.json --templates docs/apidocs/.doxybook/templates --input ~/projects/tiro/build/docs/api/xml --output docs/apidocs/
  ```

  NOTE: At this time, doxybook2 does not support relative links in its generated output.
  Keep the baseUrl in apidocs/.doxybook/config.json in sync with the base url of the api documentation.

- Regenerating doxybook templates:

  ```sh
  $ doxybook2 --generate-templates docs/apidocs/.doxybook/templates
  ```

  NOTE: The current templates directory contains the vanilla templates except for a fix regarding whitespaces (see https://github.com/matusnovak/doxybook2/pull/57)

## Deploying the site

This is done automatically when pushing to master (see workflow file `.github/workflows/deploy.yml`).

### Manual deployment

- Once (for setup): run `yarn run init-site`
- To deploy, run `yarn run clean && yarn run deploy`.
  It will perform a clean build and push the changes to github.

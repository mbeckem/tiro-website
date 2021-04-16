# tiro-website

Live at: https://mbeckem.github.io/tiro-website/

## Development setup

- Run `yarn install`
- Run `yarn dev` to start the development server
- Visit http://localhost:3000/tiro-website

## Building static html

- Run `yarn export`

## Building tiro apidocs

- Install [doxybook2](https://github.com/matusnovak/doxybook2)
- Build doxygen xml database in the tiro repository, e.g.

  ```sh
  $ cmake .. -DTIRO_DOCS=1
  $ ninja docs
  ```

- Run doxybook to generate the markdown documentation, e.g.

  ```sh
  $ doxybook2 -c docs/apidocs/.doxybook/config.json --input ~/projects/tiro/build/docs/api/xml --output docs/apidocs/
  ```

  NOTE: At this time, doxybook2 does not support relative links in its generated output.
  Keep the baseUrl in apidocs/.doxybook/config.json in sync with the base url of the api documentation.

## Deploying the site

- Once (for setup): run `npm run init-site`
- To deploy, run `npm run deploy`

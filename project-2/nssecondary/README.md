# MyCompanySA's Blog

This project is meant to store my tutorials on **how to Solve Problems** and **Challenges** on areas mainly focused about ***Hacking*** and ***Programming***.

## Docker build 🐋
```
docker build -t nssecondary-mycompanysa:release .
docker run -d -it -p 3000:3000 nssecondary-mycompanysa:release
```

## Acknowledgement

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm i
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## TODO

- [ ] Add language support to:
  - [x] `EN`.
  - [ ] `ES`.
  - [ ] `PT`.
  - [ ] `ZH`.
- [ ] Add my first blog post about API Security Testing with Postman And OWASP ZAP.
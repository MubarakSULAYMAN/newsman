# Newsman

A number one destination for latest, up-to-the-minute and historic news :newspaper: currated from over 75,000 trusted worldwide sources :information_source:.

**`Newsman`** is built with vue, vuetify and lots love :heart: :sparkling_heart:, and deployed on netlify.

Because of our believe in being progressive, we believe ths is just a work in progress :construction:. But, feel free to explore :ringed_planet: **[Newsman](https://newsman.netlify.app/)**, thank you friend.

<!-- Add Shields later -->
<!-- [![Contributors][contributors-shield]][https://github.com/MubarakSULAYMAN/newsman/graphs/contributors]
[![Forks][forks-shield]][https://github.com/MubarakSULAYMAN/newsman/network/members]
[![Stargazers][stars-shield]][https://github.com/MubarakSULAYMAN/newsman/stargazers]
[![Issues][issues-shield]][https://github.com/MubarakSULAYMAN/newsman/issues]
[![MIT License][license-shield]][https://choosealicense.com/licenses/mit/]
[![LinkedIn][linkedin-shield]][https://ng.linkedin.com/in/mubarak-sulayman-98052189] -->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <!-- <a href="https://github.com/MubarakSULAYMAN/newsman">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

  <p align="center">
    <a href="https://github.com/MubarakSULAYMAN/newsman"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://newsman.netlify.app">View Demo</a>
    ·
    <a href="https://github.com/MubarakSULAYMAN/newsman/issues">Report Bug</a>
    ·
    <a href="https://github.com/MubarakSULAYMAN/newsman/issues">Request Feature</a>
  </p>
</p>

<!-- <details open="open"> -->
<!-- <details>
  <summary><b></b> </summary>
</details> -->

## Table of contents

---

- [Project Title](#newsman)
<!-- - [Demo-Preview](#demo-preview) -->
- [Table of contents](#table-of-contents)

- [Getting started](#getting-started)

- [Prerequisites](#prerequisites)

- [Project structure](#project-structure)

- [Project setup](#project-setup)
  - [Install all packages, plugins and dependencies](#install-all-packages,-plugins-and-dependencies)
  - [Compiles and hot-reloads for development](#compiles-and-hot-reloads-for-development)
  - [Compiles and minifies for production](#compiles-and-minifies-for-production)
  - [Run your unit tests](#run-your-unit-tests)
  - [Lints and fixes files](#lints-and-fixes-files)
  - [Customize configuration](#customize-configuration)
  - [How to use / About the App](#how-to-use-/-about-the-app)

- [Built with](#built-with)

- [Some ignored ~~/ pended~~ features](#some-ignored-~~/-pended~~-features)

- [Authors](#authors)

- [License](#license)

- [Contributing](#contributing)

- [Acknowledgments](#acknowledgments)

[(Back to top)](#newsman)

## Project structure

The following is a description of the folders in this project, and how they are used. Our Application Stack is Vuetify (HTML5 with WAI-ARIA), CSS3 and VueJS (Javascript).

**Application Source** HTML, CSS & Javascript Files:

- **`public`**: Application Static Assets
  - **`index.html`**: Application entry wrapper

- **`src`**: Main application resources
  - **`assets`**: Application assets like font, images and styles
    - **`fonts`**: Application fonts
    - **`images`**: Application images
    - **`styles`**: Application styles

  - **`components`**: Application reusable components files

  - **`plugins`**: Application plugins

  - **`router`**: Application routes defination

  - **`store`**: Application state management folder (for vuex)
    - **`modules`**: Application submodules for state management

  - **`utils`**: Application utility folder
    - **`services`**: Application api connection and helpers folder

  - **`views`**: Application entry point for our routes
    - **`layout`**: Application repeated components on major pages
    - **`pages`**: Application other destinations (excluding home)

  - **`main.js`**: Main vue application entry file

**Development Content** - used to automate development & testing:

- **`tests`**: Application test
  - **`unit`**: Application unit testing folder
  - **`setupTests.js`**: Application test setup bootstrapped file

- **`.env`**: Application environment variables

- **`.env.production`**: Application production environment variables

- **`eslintrc.js`**: Eslint configuration for the app which includes _**airbnb**_ linting / style guide settings

- **`.gitignore`**: Application ignored files for commits

- **`babel.config.js`**: Babel configuration for the app

- **`package.json`**: Package file for Node that gets used during `npm install`
- **`README.md`**: Developer Instructions

**Third Party Content** _( !.gitignored )_:

- **`node_modules`**: Third Party Libraries installed via `package.json` during `npm install`

[(Back to top)](#newsman)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

[(Back to top)](#newsman)

## Prerequisites

The things you will need in order to use the app and how to install them

- Before you begin, ensure you have the latest node installed on your computer - [Node.js 14.16.1](https://nodejs.org/en/download/) was used for this

Check with:

```bash
# ensure Node.js is >= 14.16.1
vue --version
```

- Also ensure you have the latest vue cli installed - [Vue CLI 3.O](https://cli.vuejs.org/) was used for this

Check with:

```bash
# ensure Vue CLI is >= 3.0
vue --version
```

[(Back to top)](#newsman)

## Project setup

This will walk you through how to setup the app on your local computer and/or machine.

### Install all packages, plugins and dependencies

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

### Run your unit tests

```bash
npm run test:unit
```

### Lints and fixes files

```bash
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### How to use / About the App

The home screen shows the available top headlines at the moment. Presently, the default is Nigeria and news source can be selected from the "news source" button on the home screen. A news or article can be searched while on the home screen using any combination of keywords. It is a web app and requires internet to operate. Arguably, the app only needs internet to start, if the user will not use more than the fetched news on initial load.

__*Screenshots*__
[![News man on a desktop](newsman/newsman-headlines-lg_macbookpro15_front.png "Newsman headlines page on a desktop")](https://github.com/navendu-pottekkat/awesome-readme/blob/master/newsman/newsman-headlines-lg_macbookpro15_front.png)

[![News man on a desktop](newsman/newsman-detail-lg_macbookpro15_front.png "Newsman headlines page on a desktop")](https://github.com/navendu-pottekkat/awesome-readme/blob/master/newsman/newsman-detail-lg_macbookpro15_front.png)

[![News man on a desktop](newsman/newsman-headlines-sm_iphone12promaxgold_portrait.png "Newsman headlines page on a desktop")](https://github.com/navendu-pottekkat/awesome-readme/blob/master/newsman/newsman-headlines-sm_iphone12promaxgold_portrait.png)

[![News man on a desktop](newsman/newsman-detail-sm_iphone12promaxgold_portrait.png "Newsman headlines page on a desktop")](https://github.com/navendu-pottekkat/awesome-readme/blob/master/newsman/newsman-detail-sm_iphone12promaxgold_portrait.png)

[(Back to top)](#newsman)

## Built with

- [Vue 2](https://vuejs.org/) - The progressive javasript framework used

- [Material Design](https://material.io/design) - The design pattern used, with the help of [vuetifyjs](https://vuetifyjs.com/en/) which included [material colors](https://vuetifyjs.com/en/styles/colors/) and [material icons](https://vuetifyjs.com/en/components/icons/) that was used

- External libraries used in this project includes:
  - [NewsAPI](https://newsapi.org/) - A simple, easy-to-use REST API to search over 75,000 worldwide sources for current and historic news articles published.
  - [Day.js](https://day.js.org/) - A fast 2kB javascript date utility library
  - [Vue Router](https://router.vuejs.org/) - The official router for Vue.js
  - [Vuex](https://vuex.vuejs.org/) - A state management pattern + library for Vue.js applications
  - [vue-meta](https://vue-meta.nuxtjs.org/) - A HTML Metadata manager for Vue.js
  - [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) - A HTML Metadata manager for Vue.js
  - [Jest](https://jest.io/) - A JavaScript testing framework

[(Back to top)](#newsman)

## Some ignored ~~/ pended~~ features

- [ ] Data optimization was ignored as the app loads all data required on initial load thereby making it overhead cost of usage relatively costly for a user.
- [ ] Country selection is not available neither is geolocation detection present.
- [ ] Local storage implementation for history. Current app session manages the storage instead.
- [ ] AI or Smart suggestion of "also read". Currently, it is based on the API default sorting of "publishedAt".
- [ ] Refresh of "selected news pages"
- [ ] Delay to simulate the loading of the "selected news pages".
- [ ] Delay to simulate the fetching of datas in all sections after first loading.
- [ ] Full app testing and test coverage

## Authors

- **Mubarak SULAYMAN** - [@mubaraksulayman](https://twitter.com/mubaraksulayman)

See also the list of [contributors](https://github.com/MubarakSULAYMAN/newsman/contributors) who participated in this project.

[(Back to top)](#newsman)

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

[(Back to top)](#newsman)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

[(Back to top)](#newsman)

## Acknowledgments

<!-- - Hat tip to contributors on stackoverflow, github gist and vue forum -->
- Inspiration was drawn from [jb-engine / challenges](https://github.com/jb-engine/challenges/tree/master/vue) on github

[(Back to top)](#newsman)

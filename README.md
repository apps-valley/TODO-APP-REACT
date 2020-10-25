# Shiny People!

![shiny_people](https://i.ibb.co/QP7CxDL/screencapture-localhost-3000-2020-10-21-19-23-34.png)

## [Live Demo](https://xenodochial-lamport-952060.netlify.app/)

## Short bio

This is a project that is demonstrating my React skills.

## Run app in the development mode

1.  `git status` => you should be on the master branch
2.  `yarn && yarn start` => If you are starting the project for the first time. Every other time, app can be started with `yarn start`
3.  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Description

This app allows you to create and edit records, in this case employers. Employers are saved in the browser with localStorage. I decided to avoid complex state management system such as redux and replace it with Context API because project is small and simple. Component's state was managed by `useState` hook. There are four routes in the project: HomeRoute, CreateRoute, EditRoute and PageNotFound.

## Features

- Create new employee
  - Show empty form with placeholder values
- Edit existing employee
  - Get current user
  - Prefill form with values from the user
- List all employees
- Show the current number of employees
- Responsive layout
  - scss media queries helpers
  - colors as variables
- Git for version control
  - Git flow to keep my branches nice and clean
  - to see how I coded this project run `git log`
  - to see all branches use `git branch`
  - deployment ready code is on the `master` branch

## Testing

First, I tried to test with Enzyme because that is what I was used to. Soon I ran into issues with testing Context API. I realised I should use React Testing Library instead, which is way more elengant and react friendly. All tests can be found in `tests` folder.

Features covered by tests:

- Routes
  - switching between the routes
- Navbar
- PeopleList component
  - initial rendering of PeopleList component
- Form
  - onChange event for every input

To run all the tests, simply run this command:

```
yarn test
```

## Deployment

[Project is deployed with Netlify](https://xenodochial-lamport-952060.netlify.app/). Master branch has production ready code. Deploys from master are published automatically.

## Acknowledgements

All icons are used from [FlatIcon](https://www.flaticon.com/)

## Coded by

[Antonija Šimić, React || Front end developer](https://github.com/tonkec) with :heart: and lots of :coffee:

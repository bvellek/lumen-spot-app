# Lumen Spot 📷 [![Build Status](https://travis-ci.org/bvellek/lumen-spot-app.svg?branch=master)](https://travis-ci.org/bvellek/lumen-spot-app)

[Lumen Spot](https://aeropress-me-app.herokuapp.com) is a server side rendered React Redux web application designed to help photographers find information about sunrise, sunset, and twilight times for desired locations. We also provide location based weather data and inspiration pictures to help our users prepare for the best photoshoots.

## Usage

In order to get started clone this repo. Enter the commands below in your terminal:
```bash
git clone https://github.com/bvellek/lumen-spot-app.git
cd lumen-spot-app
yarn install
```

- Development: to run the app locally use the command `yarn dev` and open your browser to 'localhost:8081'.

- Testing: to start the test suite, run `yarn test` or for continuous testing `yarn run test:watch`.

- Production: to prepare for production run `yarn run production`.


## Project Summary 🌅

Lumen Spot is a web application that I designed and developed to help inspire photographers. Light is the most important aspect of any photo. In order to find the light that best suits a photographer's vision, it is crucial to know the times at which the sun is rising and setting. This application helps users find out detailed sun times for a specific location and also provides current weather conditions. To further aid in the photographer's vision process, we provide example photos taken by other photographers at the same location.

<!--





## Screenshots 📷

| <img alt="Landing Page" src="https://github.com/bvellek/aeropress-me-app/blob/master/public/img/design/screen-desk-landing.jpg?raw=true" width="350"> | <img alt="Login Page" src="https://github.com/bvellek/aeropress-me-app/blob/master/public/img/design/screen-desk-login.jpg?raw=true" width="350"> | <img alt="Registration Page" src="https://github.com/bvellek/aeropress-me-app/blob/master/public/img/design/screen-desk-registration.jpg?raw=true" width="350"> |
|:---:|:---:|:---:|
| Landing Page | Login Page | Registration Page |


| <img alt="My Recipes Page" src="https://github.com/bvellek/aeropress-me-app/blob/master/public/img/design/screen-desk-myrecipes.jpg?raw=true" width="350"> | <img alt="All Recipes Page" src="https://github.com/bvellek/aeropress-me-app/blob/master/public/img/design/screen-desk-allrecipes.jpg?raw=true" width="350"> | <img alt="New Recipe Page" src="https://github.com/bvellek/aeropress-me-app/blob/master/public/img/design/screen-desk-newrecipe.jpg?raw=true" width="350"> | <img alt="Edit Recipe Page" src="https://github.com/bvellek/aeropress-me-app/blob/master/public/img/design/screen-desk-edit.jpg?raw=true" width="350"> |
|:---:|:---:|:---:|:---:|
| My Recipes | Top Recipes | New Recipe | Edit Recipe |


## Design Process
| ![User Flow Diagram](https://github.com/bvellek/aeropress-me-app/blob/master/public/img/design/UserFlow.jpg?raw=true) |
|:---:|
| User Flow Diagram |

In the design phase of this application, I started by writing user stories to determine what the user should and shouldn't be able to do. The primary user features are to view ranked recipes, add recipes, edit recipes, delete recipes, and upvote recipes. With these features in mind, I decided it would be important to add user authentication to prevent users from editing/deleting each other's recipes, but still offer a public landing page with all the ranked recipes for those who do not wish to signup. I then created a user flow diagram to map the possible routes through the application. I also created prototypes in [Sketch](https://www.sketchapp.com/) to visualize the final product.


## Development Process

### Summary

In the development phase of this application, I followed a strategy of progressive enhancement with a RESTful architecture. I started with an HTML first approach, which enabled me to discover what aspects could be enhanced by adding client-side JavaScript. All functionality of the application is usable with client-side JavaScript disabled, however I discovered the primary enhancement of enabling client-side JavaScript would be asynchronous upvoting of recipes. This enhances the user experience because it no longer relies on form posts that require a refresh of the page after each vote. I also developed this application with automated testing for all of the user endpoints to allow for simple modifications.

### Accessibility

| ![Screen Reader Accessibility](https://github.com/bvellek/aeropress-me-app/blob/master/public/img/design/screen-desk-voice.jpg?raw=true) |
|:---:|
| Screen Reader Title Context |

Using a progressive enhancement strategy with an HTML first approach and within the contraints of web standards offered an implicit level of accessibility. This application was also tested for screen reader accessibility. Other accessibility improvements:

- Keyboard Accessibility: `tabindex='0'` attributes were added to recipe titles so that tabbing through the pages was more intuitive.
- VoiceOver Context: as shown in the figure above (highlighted in red) the recipe title was added as context for people using VoiceOver. There are visual cues that imply context so I used a `.visually-hidden` class from the [A11Y Project](http://a11yproject.com/posts/how-to-hide-content/) to maintain visual styles while enhancing the experience for those navigating without sight.
- VoiceOver Rotor: the Rotor is a commonly used feature that allows for more efficient web browsing by listing common elements like headings, links, and images. To maximize this feature I ensured that all pages had proper heading structure.
- Details and Summary Elements: use of the details and summary elements provide interactivity without the use of JavaScript to hide content.
- Emoji: they are accessible to screen readers and also give AeroPress users who don't speak English some context for actions like upvoting recipes 👍. They also do not require any alt text or labels.


### Performance
With the majority of tasks running on the server, I was able to keep this application fairly light weight. Emojis offer a nice touch while costing 0kB. In order to keep the application fast and light, I removed all jQuery in favor of vanilla JavaScript. The minified, GZIPed `app.min.js` file is only 530B. The minified, GZIPed `main.min.css` file is only 2.21kB.  I also deferred font loading to keep initial page loads as fast as possible.
```
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('html > head').appendChild((function(){
    const link = document.createElement('link');
    link.setAttribute('href', 'https://fonts.googleapis.com/css?family=Lato:400,700,900%7CMontserrat:700');
    link.setAttribute('rel', 'stylesheet');
    return link
  })());
})
``` -->



## Tech Used

### Front-End

 - HTML5
 - CSS3
 - Saas
 - [React](https://facebook.github.io/react/)
 - [Redux](http://redux.js.org/)

### Back-End

 - [Node](https://nodejs.org)
 - [Express](https://expressjs.com/)
 - [Pug](https://pugjs.org) - template engine

### Testing and Deployment
 - [Jest](https://facebook.github.io/jest/) - testing framework
 - [Enzyme](http://airbnb.io/enzyme/) - testing framework
 - [Webpack](https://webpack.js.org/) - JS bundler
 - [Babel](http://babeljs.io/) - JS compiler
 - [Travis CI](https://travis-ci.org/) - continuous integration service
 - [Heroku](https://www.heroku.com/) - cloud PaaS
 - [Grunt](http://gruntjs.com/) - task runner


## Future Improvements

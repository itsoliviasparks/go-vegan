# Go Vegan 🌱
How can you tell if someone is vegan? Don’t worry, They’ll tell you.

<a href="https://itsoliviasparks-go-vegan.netlify.app">Live Site</a>

## About
Outside of tech, one of my passions is animal rights. And, in celebration of my 6 year vegan anniversary, I created this guilt inducing app that encourages the user to go vegan. The app utilizes two APIs to fetch and display data in response to user interaction.

## Use
- On app mount the user is presented with a setTimeout counter, a dropdown menu with vegan resources, and a cow photo & cow fact
- The user can click any of the checkboxes below the main photo to generate a new animal photo (via API call) & animal fact (via internal data structure)
- Under each animal fact is a "Try A Vegan Meal" button which, on click, generates an additional API call generating a link to a youtube video of a vegan recipe

## Features
- This project was created as an exercise in collecting user input, fetching data from APIs & manipulating the DOM accordingly
- I utilized 2 APIs, the jQuery library, JavaScript, CSS, and HTML in the creation of this project
- The site features data pulled from the <a href="https://unsplash.com/developers">Unsplash API</a> & <a href="https://www.themealdb.com/api.php">TheMealDB API</a>, a setTimeout function, a self-curated JS data structure, and a fully scoped JavaScript file
- The UI is fully responsive and features accessible buttons & a hamburger menu

## Limitations
- I've utilized TheMealDB in this project. Although TheMealDB is great resource, their database of vegan recipes (at time of upload) is limited to only 2 recipes, unfortunately this leads to a less than ideal user experience

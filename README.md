# Go Vegan 🌱
<a href="https://itsoliviasparks.github.io/go-vegan/">🔗 Live Site</a>

## About
How can you tell if someone is vegan? Don’t worry, They’ll tell you.

## Project Purpose & Goal
Outside of tech, one of my passions is animal rights. And, in celebration of my 6 year vegan anniversary, I created this guilt inducing app that encourages the user to go vegan. The app utilizes two APIs to fetch and display data in response to user interaction.

## Tech Stack
jQuery, JavaScript, CSS, HTML, <a href="https://unsplash.com/developers">Unsplash API</a>, & <a href="https://www.themealdb.com/api.php">TheMealDB API</a>

## Use
- Upon opening the app, the user will see a setTimeout counter, a dropdown menu with vegan resources, and a cow photo with a cow fact
- The user can click any of the `radio` buttons below the main photo to generate a new animal photo (via API call) & animal fact (via internal data structure)
- Under each animal fact is a "Try A Vegan Meal" `button` which, `on click`, generates an additional API call generating a link to a youtube video of a vegan recipe

## Problems Solved
My biggest challenge while developing was implementing my new learnings into an organized & concise project. I'm very proud of the `getRandomItemInArr function` that I utilized in multiple areas of my code. Coding the function to utilize the length of the argument array made the function reusable.
This logic is located in `script.js`
```
goVegan.getRandomItemInArr = (arr) => {
    const randomNumber = Math.floor(Math.random() * arr.length)
    return arr[randomNumber]
  }
```

## Limitations
- I've utilized TheMealDB in this project. Although TheMealDB is great resource, their database of vegan recipes (at time of development) is limited to only two recipes

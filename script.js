const goVegan = {}

let count = 0

goVegan.facts = {
    cows : [
        `Cows feel pain.`,
        `1,800 gallons (6,800 liters) of water is used to produce 1lb of beef.`,
        `36,163,973 cows are murdered for food annually in the USA.`,
        `Cows don't just spontaneously produce milk. Cows, like all mammals, make milk only to feed their babies. They must give birth in order to lactate`,
        `Like human mothers, cows carry their babies for nine months before giving birth. After a long and painful labour, their calves are immediately taken from them so that their milk can be used for human consumption.`,
        `After a 9mo long gestational period, dairy producers take calves away from their mothers within hours or days of birth in order to maximize milk profits.`,
        `Cows can see almost 360 degrees.`,
        `Cows are very social and don't like to be alone.`,
        `Cows have an acute sense of smell and can detect odors up to six miles away!`,
        `Cows have no upper front teeth. Therefore, when they’re eating food, they press their sharp bottom teeth against the top hard palate of their mouth to cut blades of grass.`
        ],
    chickens : [
        `Even on small farms, for every egg-laying female hen, approximately one male chick is killed as a newborn by suffocation, gassing, maceration, or electrocution, because male chicks are considered a “useless by-product” who can't lay eggs or grow large enough for meat.`,
        `Newborn chicks typically have 1/3 to 2/3 of their extremely sensitive beaks seared off without pain reliever. Debeaking is standard practice in the egg industry, including on most cage-free and free-range egg farms.`,
        `While their lifespan is eight to ten years, hens used for eggs are generally killed at 12 to 18 months when their egg production declines.`,
        `Chickens can distinguish between more than 100 faces of their own species. `,
        `Chickens have full-color vision.`,
        `Chickens feel pain.`,
        `8 by 10 inches(20 × 25 cm) is the amount of space in which battery caged egg-laying hens spend their entire lives, unable to spread their wings.`
        ],
    pigs : [
        `Because pigs are highly social and become easily distressed in an unfamiliar environment, group gassing with CO2 is frequently touted as the most “humane” method for stunning pigs. However, in actuality, CO2 stunning causes immense suffering in pigs.`,
        `Pigs are actually very clean animals. In fact, they're some of the cleanest animals around and refuse to defecate where they sleep and eat if given the choice. Even newborn piglets will leave their sleeping areas to relieve themselves!`,
        `“Sweating like a pig” is a misleading commonly used phrase since pigs can't sweat!`,
        `Pigs are navigators: they can find their way home over large distances. They can often trot long distances and can reach up to 11 miles per hour running!`,
        `Pigs love to stay connected with each other by sleeping close together, often making sure to touch their friends while they drift off to sleep! Few animals are more social than pigs, who form close bonds with other pigs and humans.`,
        `Pigs feel pain.`,
        `A pig's squeal can be as loud as 115 decibels - that's 3 decibels higher than the sound of a supersonic airliner!`,
        `2 by 6.6 feet (60 cm × 2 meters) is the average size of a gestation crate in which breeding pigs spend most of their adult life.`
        ],
    fish : [
        `Fish feel pain.`,
        'Contrary to popular belief, fish do have great memories!',
        `Fish can also learn how to use tools. Many fish, for example, use rocks to crack open bivalves such as clams, oysters and mussels for food.`,
        `Adult salmon living in saltwater environments migrate a vast distance to return to freshwater to spawn. Salmon can travel up to 50 km per day on their spawning journeys.`,
        `The oldest known age for a fish was an Australian lungfish. In 2003, it was still alive and well at 65 years old!`,
        `Most fish have taste buds all over their body.`,
        `An estimated one third of male fish in British waters are changing sex due to pollution in human sewage.`,
        `Most brands of lipstick contain fish scales.`,
        `A very thorough analysis completed by Counting Animals estimated that 3.8 billion finned fish and 43.1 billion shellfish were killed to support the U.S. food supply in 2013.`
        ],
    sheep : [
        `Sheep have rectangular pupils.`,
        `One way sheep communicate with each other and their surroundings is through scent. Sheep have scent glands in front of their eyes and between the digits of their hooves that produce smelly secretions used to communicate with one another!`,
        `Despite some popular beliefs, sheep are intelligent animals with great memories. Research has shown that sheep can recognize up to 50 other sheep faces, and remember them for two years. They are even able to recognize human faces! Other studies have shown that sheep are capable of remembering how to navigate complex mazes.`,
        `A group of sheep is called a flock.`,
        `Sheep feel pain.`,
        `Sheep do not have top front teeth.`,
        `Castrating male lambs is common in the UK, and is done to prevent them from breeding, to reduce aggression, and to make them easier to handle. Rubber rings or bands are fitted tightly round the neck of the scrotum. This cuts off the blood supply to the testes, causing them to die and drop off - a process that causes significant pain for the lambs. There are other methods - crushing or surgical removal. Pain relief may be used during the actual procedure but it is not mandatory and so is not always used.`,
        `The shearing process involves holding down the sheep which is a stressful procedure for these sensitive animals. Shearers are usually paid by the volume of wool they collect, rather than by the hour, which encourages fast work and little regard for the welfare of the animals.`
        ]
    }


goVegan.getRandomRecipe = $(".get-meal").click(() => {
    $.ajax({
        url:"https://www.themealdb.com/api/json/v1/1/search.php?s=vegan",
        method: "GET",
        dataType: "json"
    }).then((data) => {
        goVegan.randomRecipe = goVegan.getRandomItemInArr(data.meals)
        goVegan.randomRecipeVid = goVegan.randomRecipe.strYoutube
        goVegan.randomRecipeThumb = goVegan.randomRecipe.strMealThumb

            const recipeHTMLString = `
                <p class="click-here">Click Here</p>
                <a href="${goVegan.randomRecipeVid}" target="_blank">
                    <img class="recipe-thumb" src=${goVegan.randomRecipeThumb} alt="Thumbnail image of a Vegan recipe"/>
                </a>
            `
            $(".fact-recipe").html(recipeHTMLString)
        })
        .catch(() => {
            $(".fact-recipe").html(`<p class="click-here">Vegan recipes are not available at this time. Please try again later.</p>`);
        });
    })

goVegan.getRandomAnimalPhoto = (userAnimalChoice = "cows") => {
    $.ajax({
        url:"https://api.unsplash.com/photos/random/?client_id=U6bpb1gr_nfmgfjZ8EfTzpu2c37E47-E9vA4BHPOYDo",
        method: "GET",
        dataType: "json",
        data: {
            query: `${userAnimalChoice}`
        }
    }).then((data) => {
        goVegan.randomAnimalPhoto = data.urls.regular

    const imageHTMLString = `
    <img src=${goVegan.randomAnimalPhoto} alt="${userAnimalChoice}"/>
    `
    $(".image").html(imageHTMLString)
    })
    .catch(() => {
        $(".image").html(`<img src="/glenn-carstens-peters-IMRuLuNnFw4-unsplash.jpg" alt="corn field"/>`);
    });
}

goVegan.getRandomAnimalFact = (userAnimalChoice = "cows") => {
    goVegan.randomFact = goVegan.getRandomItemInArr(goVegan.facts[`${userAnimalChoice}`])
    const factHTMLString = `
        <p>${goVegan.randomFact}</p>
        `
        $(".fact-recipe").html(factHTMLString)
    }

goVegan.getUserAnimalChoice = function(){
    $("input[type=radio]").click(function(){
        let userAnimalChoice = $("input[type=radio]:checked").val();
        goVegan.getRandomAnimalPhoto(userAnimalChoice)
        goVegan.getRandomAnimalFact(userAnimalChoice)
    })
    }

goVegan.animalDeathCount = () => {
    setInterval(() => {
    $("span.count").text(count.toLocaleString('en-US'))
    count = count + (293)
    }, (1000 / 6))
  }

goVegan.getRandomItemInArr = (arr) => {
    const randomNumber = Math.floor(Math.random() * arr.length)
    return arr[randomNumber]
  }

goVegan.init = () => {
    goVegan.animalDeathCount()
    goVegan.getUserAnimalChoice()
    goVegan.getRandomAnimalPhoto()
    goVegan.getRandomAnimalFact()
}

$(() => {
    goVegan.init()
})

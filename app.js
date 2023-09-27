const locations = [
    '🏤', '🏥', '🏭', '🏢', '🏣'
]

const people = [{
    name: 'Jimbo',
    picture: '🤵',
    location: '🏤',
    isHunter: false

},
{
    name: 'Sammy',
    picture: '🙆‍♀️',
    location: '🏤',
    isHunter: false
},
{
    name: 'Michael',
    picture: '👷',
    location: '🏤',
    isHunter: false
},
{
    name: 'Robert',
    picture: '👷',
    location: '🏥',
    isHunter: false
},
{
    name: 'Terry',
    picture: '🤴',
    location: '🏥',
    isHunter: false
},
{
    name: 'Bill',
    picture: '🕵️',
    location: '🏥',
    isHunter: false
},
{
    name: 'Marie',
    picture: '👩‍🍳',
    location: '🏭',
    isHunter: false
},
{
    name: 'Mykeal',
    picture: '💂',
    location: '🏭',
    isHunter: false
},
{
    name: 'Phil',
    picture: '🧜‍♂️',
    location: '🏭',
    isHunter: false
},
{
    name: 'Wilson',
    picture: '🏐',
    location: '🏢',
    isHunter: false
},
{
    name: 'Wendy',
    picture: '👩‍⚕️',
    location: '🏢',
    isHunter: false
},
{
    name: 'Jeremy',
    picture: '🦹',
    location: '🏢',
    isHunter: false
}
]

function drawPeople() {
    locations.forEach(location => {

        const peopleAtLocation = people.filter(people => people.location == location)

        // console.log(peopleAtLocation)

        let stringOfPictures = ""

        peopleAtLocation.forEach(people => stringOfPictures += people.picture)

        // console.log(location, stringOfPictures)

        const locationElement = document.getElementById(location)
        locationElement.innerText = stringOfPictures
    })
}

function changePeopleLocations() {
    people.forEach(people => {

        const randomLocationIndex = Math.floor(Math.random() * locations.length)
        const randomLocation = locations[randomLocationIndex]
        people.location = randomLocation
    })

    drawPeople()
}

function makeAHunter() {
    const randomPeopleIndex = Math.floor(Math.random() * people.length)
    const randomPerson = people[randomPeopleIndex]
    randomPerson.isHunter = true
}

let userInput = ''

function attackPeople(location) {

    userInput += location
    const nonHunters = people.filter(people => !people.isHunter)
    const victims = people.filter(people => people.location == location && people.picture != "🦇" && nonHunters)

    console.log('this is the hunter', !nonHunters)

    const randomPeopleIndex = Math.floor(Math.random() * victims.length)

    const randomVictim = victims[randomPeopleIndex]

    console.log(location, 'these are the victims', victims)
    console.log(randomVictim)

    if (randomVictim) {
        randomVictim.picture = '🦇'
    }

    // console.log(location, 'bats', victims)


    drawPeople()
    // updateUserInput()

    // const potentialVictims = people.filter(people => people.location == nonHunters.location)

    // console.log(nonHunters)
    // console.log(potentialVictims)



}

// function updateUserInput() {
//     const userInputElement = document.getElementById('currentUserInput')
//     userInputElement.innerText = userInput
// }

drawPeople()
makeAHunter()
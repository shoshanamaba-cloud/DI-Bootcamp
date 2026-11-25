const robots = [
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            image: 'https://robohash.org/1?200x200'
          },
          {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            image: 'https://robohash.org/2?200x200'
          },
          {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            image: 'https://robohash.org/3?200x200'
          },
          {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
            image: 'https://robohash.org/4?200x200'
          },
          {
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
            image: 'https://robohash.org/5?200x200'
          },
          {
            id: 6,
            name: 'Mrs. Dennis Schulist',
            username: 'Leopoldo_Corkery',
            email: 'Karley_Dach@jasper.info',
            image: 'https://robohash.org/6?200x200'
          },
          {
            id: 7,
            name: 'Kurtis Weissnat',
            username: 'Elwyn.Skiles',
            email: 'Telly.Hoeger@billy.biz',
            image: 'https://robohash.org/7?200x200'
          },
          {
            id: 8,
            name: 'Nicholas Runolfsdottir V',
            username: 'Maxime_Nienow',
            email: 'Sherwood@rosamond.me',
            image: 'https://robohash.org/8?200x200'
          },
          {
            id: 9,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
            image:'https://robohash.org/9?200x200'
          },
          {
            id: 10,
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            email: 'Rey.Padberg@karina.biz',
            image:'https://robohash.org/10?200x200'
          }
          ];


const searchbar = document.getElementById("searchbar");
const container = document.getElementById("profiles");

class Robot {
    constructor(id, name, username, email, image) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.image = image;
    }

    createCard() {
        const card = document.createElement("div");
        card.classList.add("card");
        
        card.innerHTML = `
            <img src="${this.image}">
            <h2>${this.name}</h2>
            <p>${this.email}</p>
        `;

        return card;
    }
}

function displayRobots(robotList) {
    container.innerHTML = "";

    robotList.forEach(robot => {
        const newRobot = new Robot(
            robot.id,
            robot.name,
            robot.username,
            robot.email,
            robot.image
        );

        container.appendChild(newRobot.createCard());
    });
}

function getRobot() {
    const input = searchbar.value;
    const regex = new RegExp(input, "i");

    const matchingRobots = robots.filter(function(robot) {
        return regex.test(robot.name) || regex.test(robot.username);
    });

    displayRobots(matchingRobots);
}

searchbar.addEventListener("input", getRobot);

displayRobots(robots);
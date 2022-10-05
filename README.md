# Social Network API


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## Table of Contents
- [License](#license)
- [Description](#description)
- [Usage](#usage)
- [Installation](#installation)
- [Application in Action](#application-in-action)
- [Testing](#testing)
- [Questions?](#questions)
- [Contact Me](#contact-me)

---

## License
[MIT](https://opensource.org/licenses/MIT)
Read more about MIT

---

## Description
The objective of this project was to build an API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. Express.js was used for routing. MongoDB was used for the database, along with the Mongoose ODM. It also utilizes Moment.js to format timestamps. 

---

## Usage
This project is used to understand how to build and structure an API. It also shows how to test your database. 

---

## Installation
In the command line you will run node <code> server.js </code> to run the application.

---

## Application in Action

[Link to Video of my Application](https://drive.google.com/file/d/1TzPSVGIyWeGK6LVQETe5IvAxsqV0-jHB/view)


![Social Network API GIF](/assets/images/gif.gif)

Thoughts DB            |  User DB
:-------------------------:|:-------------------------:
![thoughts db img](/assets/images/Screenshot%202022-10-01%2002.23.32.png)  |  ![user db img](/assets/images/Screenshot%202022-10-01%2002.23.36.png)

Insomnia Example      |  Insomnia Example
:-------------------------:|:-------------------------:
![thoughts db img](/assets/images/Screenshot%202022-10-05%2001.25.26.png)  |  ![user db img](/assets/images/Screenshot%202022-10-05%2001.26.21.png)


---

## Testing
Tests run using Insomnia

#### User
- Get User: <code> GET /api/users </code>
- Get User by ID: <code>GET /api/users/:userId</code>
- Create User: <code>POST /api/users</code>
- Update User: <code>PUT /api/users/:userId</code>
- Delete User: <code>DELETE /api/users/:userId</code>

#### Thoughts
- Get Thoughts: <code> GET /api/thoughts</code>
- Get Thoughts by ID: <code>GET /api/thoughts/:thoughtId</code>
- Create Thoughts: <code>POST /api/thoughts</code>
- Update Thoughts: <code>PUT /api/thoughts/:thoughtId</code>
- Delete Thoughts: <code>DELETE /api/thoughts/:thoughtId</code>

#### Reactions
- Create Reaction: <code>POST /api/thoughts/:thoughtId/reactions</code>
- Delete Reaction: <code>DELETE /api/thoughts/:thoughtId/reactions/:reactionId</code>

#### Friends
- Add Friend: <code>POST /api/users/:userid/friends/:friendId</code>
- Delete Friend: <code>DELETE /api/users/:userid/friends/:friendId</code>
---

## Questions?
### Contact Me
- (https://github.com/JonCerruti)
- jonathancerruti@gmail.com

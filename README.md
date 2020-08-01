# teacher-stack.github.io

# About
This application came about from attempting to solve a real problem in education. As a teacher, particularly in Secondary Education, there are too many students, too much information, too many tasks, and too many other teachers to keep track of and stay organized. While we are not dealing with real students (because of HIPA rights) the idea is that only a students teacher would be able to access their information. The roster has icons that allows the teachers to quickly get information on students. A forum is available tor teachers to communicate with each other. As well as a place where teachers can see a list of their coworkers profiles with their strongest skills listed so the user can gain an idea of who to ask for advice.

# Running Application

User should, after cloning the repo, first run "npm i" to install dependencies. User is then able to run the script "npm run dev" to run the mongoDB server and the react server concurrently.

# Functions
User is able to make an account that has password encryption. Because the user will not have a profile made they will be directed to make a profile. They will input things like their room number, name, a bio, skills, and what subject they teach. A profile image is automatically generated using Faker API. User is then able to edit their profile, Add a todo to their todo list, and also generate a class. At this point in time the class is generated using dummy data. There is also a modal that can be brought up containing the student's profile. The last two functions are very similar. User is able to view all profiles and see a list of other teachers skills, as well as view the other teacher's profile. The forum is a palce where teachers are able to pose a question, comment, or concern that other teachers can then responsd too. 

# Heroku
App is deployed to heroku and uses MongoDB Atlas AWS free server.

https://protected-retreat-55339.herokuapp.com/

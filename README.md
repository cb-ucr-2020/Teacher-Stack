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

# Screenshots of Application

## Landing Page
Gives user the option to choose login/register.

![image](https://user-images.githubusercontent.com/59103609/90082467-b533e800-dcc4-11ea-94a1-6a2acf2fe691.png)

## Register Page
Has fields for user to input their name, password twice, and email. They are then redirected to a page where they are prompted to create a profile.

![image](https://user-images.githubusercontent.com/59103609/90082548-e44a5980-dcc4-11ea-8d62-3117daf3f92e.png)

![image](https://user-images.githubusercontent.com/59103609/90082596-07750900-dcc5-11ea-8ae6-4b01801d5f84.png)


## Profile Form
Page has fields where they input their name, bio, room number, skills, and subject they teach.

![image](https://user-images.githubusercontent.com/59103609/90082642-2b384f00-dcc5-11ea-9e29-dc60fab850bf.png)

## Login Page
Has fields where user enters their email and password to log in. They are then directed to the profile page.

![image](https://user-images.githubusercontent.com/59103609/90082571-f3310c00-dcc4-11ea-9e07-ac44de14cf77.png)


## Profile Page
Displays the users information and allows them to add a ToDo item to their ToDo list, create a class, and also edit their profile.

![image](https://user-images.githubusercontent.com/59103609/90082674-4905b400-dcc5-11ea-8f30-a2bb40e83e2b.png)

![image](https://user-images.githubusercontent.com/59103609/90082685-4dca6800-dcc5-11ea-9279-8a3784871ea1.png)

## All Profiles
Page has all of the teachers on that school site. Page is useful for new members of the site to get information on other teachers, which can allow them to be mentored.

![image](https://user-images.githubusercontent.com/59103609/90082716-6175ce80-dcc5-11ea-935e-b2af550d6963.png)


## Forum Page
Page that allows teachers to communicate with each other.

![image](https://user-images.githubusercontent.com/59103609/90082738-705c8100-dcc5-11ea-9266-51de4bd75078.png)

![image](https://user-images.githubusercontent.com/59103609/90082747-76eaf880-dcc5-11ea-93c5-5351cc3f52e9.png)



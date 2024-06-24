# TasteHub

TasteHub wants to bring food lovers together to share and find new recipes. It's here to make cooking fun and social. You can explore different recipes, like your favorites, and connect with others who love to cook. By letting you like, comment, and follow other users, TasteHub makes it easy to learn and enjoy cooking more.


#### [Live demo page](https://tastehub-c1a3a811ccbe.herokuapp.com/)


![Responsive Mockup](link)



# Features


test
    

## Upcoming Features

test



## Idea


TasteHub is a social recipe app where you can easily share, save, and like recipes. You can log in, post your own recipes, and find new ones with search and filter options. It’s got a simple design and lets you rate, comment, and follow other users, making it easy to manage all your cooking ideas.

# Components

test

# Planning

### Website owners goals


- Develop a social cooking platform
- Making it familiar and easy to use for users already using other social networks.


### User Goals

- Easily find new recipes from other cooks.
- Follow users and see their posts in a feed.
- Post your own recipes and receive feedback in the comments.
- Like your favorites and easily find back to them in a dedicated feed.


### Following user stories was implemeneted in the project:

- Epic: User Authentication and Profile Management
    - As a new user, I want to sign up with a username and password so that I can create an account.
    - As a registered user, I want to log in with my credentials so that I can access my account.
    - As a user, I want to view my and other users profile details so that I can check their stats and recipes.
    - As a user, I want to view and edit my profile details so that I can keep my information up to date.
    - As a user, I want to upload a profile picture so that my profile is personalized.
    - As a logged-in user, I want to log out so that I can end my session securely.
- Epic: Recipe Management
    - As a user, I want to create a new recipe by filling out a form so that I can share it with others.
    - As a user, I want to view a feed of recipes so that I can find new dishes to try.
    - As a user, I want to delete my recipes so that I can manage my content.
    - As a user, I want to format the ingredient list clearly so that others can follow the recipe easily.
    - As a user, I want to edit my existing recipes so that I can update information or correct mistakes.
- Epic: Social Feed
    - As a user, I want to see a global feed with all posts so that I can discover new recipes from all users.
    - As a user, I want to interact with posts directly from the feed by liking them
    - As a user, I want to see a feed with my own posts and the posts of users i follow.
- Epic: Social Interactions
    - As a user, I want to like recipes so that I can show my appreciation for them.
    - As a user, I want to comment on recipes so that I can share my thoughts or ask questions
    - As a user, I want to follow other users so that I can see their recipes in my feed.
    - As a user, I want to edit my comments to add context or fix typos.
    - As a user, I want the ability to delete my comment.
- Epic: Search and Filter
    - As a user, I want to search for recipes by title or ingredient so that I can find specific dishes.

[Github Projects](https://github.com/users/zimmoc/projects/3)




<hr>

___Proof of Concept___
- User Authentication
	- Registration and login functionality.
	- Basic session management.
- Basic Recipe Posting
	- Form to create and post a recipe.
	- Display a list of posted recipes.
- Global Feed
	- Display a global feed with all posted recipes.
	- Basic navigation between pages.

___Minimum Viable Product___
- User Authentication
	- User registration, login, and logout.
- Recipe Management
	- Create, edit, delete recipes.
	- Formatted ingredient list.
	- Tagging recipes for easy filtering.
- Feeds
	- Global feed with all recipes.
	- Personal feed with the user’s posts and followed users’ posts.
- Interactions
	- Like recipes directly from the feed.
	- Comment on recipes.
- Search and Filter
	- Search recipes by title, user or ingredients.
- Notifications
	- Notifications for likes, comments, saves, and new followers.


## Project structure

###### Page structure

![Page Structure](../tastehub/readme/page_structure.png)

##### Mockup

I created a mockup in Figma that uses a layout similar to popular social media sites. This design helps new users feel familiar and comfortable right away. This design structure is used across the site, no matter what components are showing.
<br>
![Mockup](../tastehub/readme/mockup.png)

##### Entity-Relationship Diagram

The final database schema is essentially the same, but with some changes to the types of fields due to the limitations of the website I used.

![erd](../tastehub/readme/erd.png)

##### Color schemes and why

The primary and secondary colors are warm shades within the orange palette, chosen for their energizing, passionate, and positive qualities. The neutral colors include a dark background for the main areas, creating a comfortable contrast. Text colors is a clean white for clear readability, while the secondary text colors are a light grey to maintain good readability. Borders and horizontal rules use a slightly lighter grey to create clear divisions without standing out too much.

These colors were selected to create a warm, welcoming atmosphere that fosters creativity and passion, with soft neutral colors serving as a backdrop to enhance this inviting ambiance. I opted for a dark theme because it’s currently popular and, based on my personal experience, I find dark mode to be much more preferable.

##### Typography
###### Roboto
I chose Roboto because it's a clean, modern font that's easily readable.


## Used Technologies

### Languages Used

- HTML, CSS, Python, JSX

### Framework, Libraries and Programs

##### Frameworks

- React: Utilized for building the user interface.
- Bootstrap: Applied for responsive design and styling.

##### Libraries

- axios: Used for making HTTP requests.
- jwt-decode: Used for decoding JSON Web Tokens.
- react-bootstrap: Integrated Bootstrap components with React.
- react-infinite-scroll-component: Implemented infinite scrolling.
- react-router-dom: Provided routing capabilities.
    
##### Programs
- [erdlab](https://erdlab.io/)
    - was used to create the entity relationship diagram
- GitHub
    - was used to store the project site
- VS Code
    - was used to write the code and commit it to GitHub
- Heroku 
    - was used to deploy the project 
- Grammarly
    - was used to fix my grammar
    

# Testing




##### Manual focused






### Validator

#### HTML

Tested HTML files through [w3c](https://validator.w3.org/nu/)


#### CSS

All custom css ran through [Jigsaw](https://jigsaw.w3.org/css-validator/validator)

![Jigsaw](/static/img/readme/css.png)

#### JS

All custom js ran through [JSHint](https://jshint.com/)


### Performance

- __Tests performed using [Lightouse](https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk)__

![lighthouse_scores](/static/img/readme/score.png)





# Heroku Deployment
The site was deployed to Heroku. The steps to deploy are as follows:




# Run Locally
Note that you need your own backend API

Clone the project

```bash
  git clone https://github.com/zimmoc/propertize.git
```

Go to the project directory

```bash
  cd propertize
```

Install dependencies
- Recommended to do this in a virtual python env


```bash
  pip install -r requirements.txt
```

Start the server

```bash
  python3 manage.py runserver
```

 

# Credits

All installed libraries have been implented with the help of their respective documentation and examples

Countless of stackoverflow posts whenever i had problems.

Random forum posts from 2010, found through googling problems

### Content 


- The icons used were taken from [Font Awesome](https://fontawesome.com/)
- Favicon/Logo by [Font Awesome](https://fontawesome.com/)

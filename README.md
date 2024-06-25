# TasteHub

TasteHub wants to bring food lovers together to share and find new recipes. It's here to make cooking fun and social. You can explore different recipes, like your favorites, and connect with others who love to cook. By letting you like, comment, and follow other users, TasteHub makes it easy to learn and enjoy cooking more.


##### [Live demo page](https://tastehub-c1a3a811ccbe.herokuapp.com/)


![Responsive Mockup](/readme/all-devices-black.png)



### Backend api

[tastehub-drf](https://github.com/zimmoc/tastehub-drf)

# Features

### Static Sidebar

The static sidebar is designed to follow the user throughout the site, providing easy access to key pages. It includes:

- **Profile Card:**
  - **Avatar**: Displays the user's profile picture.
  - **Display Name**: Shows the user's display name.
  - **Username**: Shows the user's username.
  - **Profile Button**: A button that takes the user to their profile page.

- **Navigation Links:**
  - **Home**: Access different feeds.
  - **My Recipes**: View the user's own recipes.
  - **Create Recipe**: Navigate to the page for creating a new recipe.
  - **Sign Out**: Sign out button.


The sidebar stays with you as you navigate the site, making it easy to switch between different sections. It provides quick links to your feeds, your recipes, the recipe creation page, and the sign-out button, ensuring everything you need is always accessible. Additionally, your profile card displays your avatar, display name, username, and includes a button to view your profile, keeping your personal info and profile access within easy reach.

![Sidebar](/readme/sidebar.png)


### Navbar for Smaller Devices

On smaller devices, the sidebar is replaced with a Navbar that includes the same features, but in a format optimized for smaller screens:

- **Home**: Access different feeds.
- **My Recipes**: View the user's own recipes in a feed just like the others.
- **Create a Recipe**: Navigate to the page for creating a new recipe.
- **Sign Out**: Log out of the application.
- **Profile Card**: Displays the user's avatar, which is clickable and sends the user to their profile page

The Navbar ensures all features remain easily accessible, providing a seamless experience on mobile and smaller devices.

![Navbar](/readme/navbar.png)

### Most Followed Creators

A sidebar component showcasing the top 5 most followed creators. Each entry in the list includes:

- **Avatar**: The creator's profile picture.
- **Display Name**: The creator's display name, or their username if no display name is set.
- **Followers Count**: The number of followers the creator has.
- **Follow Button**: A button that allows users to follow or unfollow the creator directly from the sidebar.

![Most Followed Creators](/readme/creators.png)


### Feeds

- **Like a recipe** directly from the feed
- **See the number of likes and comments** on each recipe
- **Follow button** to easily follow interesting creators
- **Search bar** to filter recipes by user and title

__Explore__
- A feed featuring all posted recipes, helping users discover new recipes and creators.

__Following__
- A feed showcasing recipes from creators the user follows.

__Liked__
- A feed containing all recipes that the user has liked.

![Feeds](/readme/feeds.png)

### Create Recipe

A form that allows users to create their own recipes with the following features:

- **Image Upload**: Add an image of the recipe.
- **Title Field**: Enter the title of the recipe.
- **Description Field**: Provide a description of the recipe.
- **Ingredients List**: Add ingredients one by one to build a list.
- **Instructions List**: Add instructions step by step, with each step automatically numbered based on the order added.

This form makes it easy for users to share detailed and visually appealing recipes.


![Create recipe](/readme/create_recipe.png)

### Recipe Page

A dedicated page for displaying a recipe in detail, building on the Recipe component used in the feeds. It includes:

- **Recipe Component**: Displays the recipe details as seen in the feeds.
- **Ingredients Sidebar**: A sidebar listing all the ingredients required for the recipe.
- **Instructions Card**: A card below the recipe with step-by-step instructions.
- **Comment Section**: A form at the bottom for users to read and post comments.

This layout provides a comprehensive view of the recipe, making it easy for users to follow along and engage with the content.

![Recipe](/readme/recipe_page.png)

### Profile Page

The profile page displays key information about the user, including:

- **Avatar**: The user's profile picture.
- **Display Name**: The user's chosen display name.
- **Username**: The user's unique username.
- **Stats**: 
  - **Following**: The number of users they are following.
  - **Followers**: The number of followers they have.
  - **Recipes Posted**: The total number of recipes they have posted.

If you are viewing another user's profile, there's a follow button to easily follow them. If you are viewing your own profile, there's a dropdown menu that allows you to edit your profile information.

Under the user's profile card, there is a feed containing all the recipes that the user has posted.

![Profile](/readme/profile.png)

    

## Upcoming Features


- **Sort Button for Feeds**: Allows users to sort feed content by various criteria such as date, popularity, or amount of comments.
- **Most Liked Recipes Sidebar Component**: A sidebar showcasing the recipes with the most likes.
- **Notification System**: Notifies users when they receive comments or new followers.

Additionally, while a rating system was considered, I decided against it for now to avoid making users feel judged by ratings. Instead, the number of likes and comments serves as an indicator of a recipe's popularity and quality. However, a rating system is not ruled out for future implementation.



# Planning

## Idea

TasteHub is a social recipe app where you can easily share, save, and like recipes. You can log in, post your own recipes, and find new ones with search and filter options. It’s got a simple design and lets you rate, comment, and follow other users, making it easy to manage all your cooking ideas.

### Website Owners' Goals

- Develop a social cooking platform.
- Make it familiar and easy to use for users already using other social networks.

### User Goals

- Easily find new recipes from other cooks.
- Follow users and see their posts in a feed.
- Post your own recipes and receive feedback in the comments.
- Like your favorites and easily find them in a dedicated feed.

### Following User Stories Were Implemented in the Project

<details>
<summary>Epic: User Authentication and Profile Management</summary>
- As a new user, I want to sign up with a username and password so that I can create an account.
- As a registered user, I want to log in with my credentials so that I can access my account.
- As a user, I want to view my and other users' profile details so that I can check their stats and recipes.
- As a user, I want to view and edit my profile details so that I can keep my information up to date.
- As a user, I want to upload a profile picture so that my profile is personalized.
- As a logged-in user, I want to log out so that I can end my session securely.
</details>

<details>
  <summary>Epic: Recipe Management</summary>
  - As a user, I want to create a new recipe by filling out a form so that I can share it with others.
  - As a user, I want to view a feed of recipes so that I can find new dishes to try.
  - As a user, I want to delete my recipes so that I can manage my content.
  - As a user, I want to format the ingredient list clearly so that others can follow the recipe easily.
  - As a user, I want to edit my existing recipes so that I can update information or correct mistakes.
</details>

<details>
  <summary>Epic: Social Feed</summary>
  - As a user, I want to see a global feed with all posts so that I can discover new recipes from all users.
  - As a user, I want to interact with posts directly from the feed by liking them.
  - As a user, I want to see a feed with my own posts and the posts of users I follow.
</details>

<details>
  <summary>Epic: Social Interactions</summary>
  - As a user, I want to like recipes so that I can show my appreciation for them.
  - As a user, I want to comment on recipes so that I can share my thoughts or ask questions.
  - As a user, I want to follow other users so that I can see their recipes in my feed.
  - As a user, I want to edit my comments to add context or fix typos.
  - As a user, I want the ability to delete my comment.
</details>

<details>
  <summary>Epic: Search and Filter</summary>
  - As a user, I want to search for recipes by title or ingredient so that I can find specific dishes.
</details>
<br>

[GitHub Projects](https://github.com/users/zimmoc/projects/3)

---

### Proof of Concept
- **User Authentication**
  - Registration and login functionality.
  - Basic session management.
- **Basic Recipe Posting**
  - Form to create and post a recipe.
  - Display a list of posted recipes.
- **Global Feed**
  - Display a global feed with all posted recipes.
  - Basic navigation between pages.

### Minimum Viable Product
- **User Authentication**
  - User registration, login, and logout.
- **Recipe Management**
  - Create, edit, and delete recipes.
  - Formatted ingredient list.
  - Tagging recipes for easy filtering.
- **Feeds**
  - Global feed with all recipes.
  - Personal feed with the user’s posts and followed users’ posts.
- **Interactions**
  - Like recipes directly from the feed.
  - Comment on recipes.
- **Search and Filter**
  - Search recipes by title, user, or ingredients.


## Project structure

#### Page structure

![Page Structure](/readme/page_structure.png)

#### Mockup

I created a mockup in Figma that uses a layout similar to popular social media sites. This design helps new users feel familiar and comfortable right away. This design language is used across the site, no matter what components are showing.
<br>
![Mockup](/readme/mockup.png)

#### Entity-Relationship Diagram

The final database schema is essentially the same, but with some changes to the types of fields due to the limitations of the website I used.

![erd](/readme/erd.png)

#### Color schemes

The primary color is a warm shade of orange, chosen for its energizing, passionate, and positive qualities. The neutral colors include a dark background for the main areas, creating a comfortable contrast, and a lighter grey for all the content cards to make them stand out. Text color is a clean white for clear readability, while the secondary text color is a light grey to maintain good readability but not draw attention. A shade between the main background color and the secondary grey color is used to create a slight shadow effect, making the components pop a little more.

These colors were selected to create a warm, welcoming atmosphere that fosters creativity and passion, with soft darker colors serving as a backdrop to enhance the overall design. I opted for a dark theme because it’s currently very popular and, based on my personal experience, I find dark mode to be **much** more preferable.

#### Typography
__Roboto__
I chose Roboto because it's a clean, modern font that's easily readable.


## Used Technologies

### Languages Used

- HTML, CSS, JSX

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
- stylelint
- eslint
- prop-type
    
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
All returned with no errors or warnings to show
<details>
<summary>Tests</summary>

[Home page](https://validator.w3.org/nu/?doc=https%3A%2F%2Ftastehub-c1a3a811ccbe.herokuapp.com%2F)

[Sign in](https://validator.w3.org/nu/?doc=https%3A%2F%2Ftastehub-c1a3a811ccbe.herokuapp.com%2Fsignin)

[Sign up](https://validator.w3.org/nu/?doc=https%3A%2F%2Ftastehub-c1a3a811ccbe.herokuapp.com%2Fsignup)

[Profile](https://validator.w3.org/nu/?doc=https%3A%2F%2Ftastehub-c1a3a811ccbe.herokuapp.com%2Fprofiles%2F2)

[Recipe page](https://validator.w3.org/nu/?doc=https%3A%2F%2Ftastehub-c1a3a811ccbe.herokuapp.com%2Frecipes%2F11)
</details>


#### CSS

All custom css ran through [Stylelint](https://www.npmjs.com/package/stylelint) with no errors.

![stylelint](/readme/stylelint.png)

#### JSX

All custom JSX ran through [ESLint](https://eslint.org/) with no errors.

![eslint](/readme/eslint.png)


### Performance

- __Test performed using [Lightouse](https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk)__

![lighthouse_scores](/readme/score.png)





# Heroku Deployment
The site was deployed to Heroku. The steps to deploy are as follows:

Prerequisites:
- Create 'Procfile' in your project folder(Note caps and no file tag)
- Add our web worker: 'web: serve -s build'

<hr>

- Navigate to heroku and create an account
- Click the new button in the top right corner
- Select create new app
- Enter app name
- Select region and click create app
- Click the deploy tab
- Scroll down to Connect to GitHub and sign in / authorize when prompted
- In the search box, find the repositoy you want to deploy and click connect
- Scroll down to Manual deploy and choose the main branch
- Click deploy

The app should now be deployed.




# Run Locally
Note that you need your own backend API

Open up your preffered IDE

Clone the project:
```bash
  git clone https://github.com/zimmoc/tastehub.git
```

Install dependencies:
```bash
  npm install
```

Run application

```bash
  npm start
```

 

# Credits

All installed libraries have been implented with the help of their respective documentation and examples

Countless of stackoverflow posts.

Random forum posts found through googling problems

### Content 


- The icons used were taken from [Font Awesome](https://fontawesome.com/)
- Favicon/Logo by [Logo](https://logo.com/)
- Demo pfp images [Profile pictures](https://www.pexels.com/collections/profile-pictures-oak37r2/)
- The celebrity chefs images were taken from their respective wikipedia pages
- Demo recipes taken from random recipe sites

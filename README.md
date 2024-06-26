# TasteHub

TasteHub wants to bring food lovers together to share and find new recipes. It's here to make cooking fun and social. You can explore different recipes, like your favorites, and connect with others who love to cook. By letting you like, comment, and follow other users, TasteHub makes it easy to learn and enjoy cooking more.


##### [Live demo page](https://tastehub-c1a3a811ccbe.herokuapp.com/)


![Responsive Mockup](/readme/all-devices-black.png)



## Backend api

[tastehub-drf](https://github.com/zimmoc/tastehub-drf)

## Features

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


## Planning

### Idea

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

#### Reusable Components

__Recipe__
- **Purpose**: Fetch and display a specific recipe.
- **Usage**: 
  - **HomePage.js**: Used to display recipes in the feed.
  - **ProfilePage.js**: Shows recipes specific to a user.
  - **RecipePage.js**: Displays detailed information about a selected recipe.
- **Potential Uses**: 
  - Can be used to display a list of the most liked or most commented recipes.


__Avatar__
- **Purpose**: Display user avatars with customizable size and optional text. But keeping the profile picture styling the same accross the application.
- **Usage**: 
  - **Profile.js**: Used to show the user's profile picture.
    - ProfileEditForm.js
    - ProfilePage.js
  - **Comment.js**: Displays the avatar of the user who made the comment.
    - CommentCreateForm.js
  - **NavBar.js**: Shows the current user's avatar with Profile text
  - **SideBar.js**: Shows the current user's avatar if logged in, else display Logo.
- **Potential Uses**: 
  - Can be used anywhere in the application where a user's profile picture needs to be displayed, such as in lists of followers, user search results etc..

__MoreDropDown__
- **Purpose**: Provide a dropdown menu to display buttons that navigate users to edit pages.
- **Usage**: 
  - Displays a three-dot menu that users can click to reveal links to edit forms.
  - Used in:
    - **Comment.js**: Allows users to edit or delete comments.
    - **Recipe.js**: Allow users to edit or delete recipes.
    - **ProfilePage.js**: Displays navigation to profile edit forms.
- **Potential Uses**: 
  - Can be used wherever a dropdown menu is needed to display links for actions such as editing, deleting, or navigating to other pages.


__NavBar__
- **Purpose**: Display a navigation bar at the top of the page containing navigation links.
- **Usage**: 
  - Renders on all pages when the screen size is too small to display the sidebar.
- **Potential Uses**: 
  - Can be used in any part of the application where a top navigation bar is needed to provide navigation links, especially for mobile or smaller screen sizes.


__SideBar__
- **Purpose**: Serve as the primary navigation bar when the screen size allows it. It contains all navigation links and a profile card that displays the logged-in user's profile picture, username, and display name, along with a button to their profile.
- **Usage**: 
  - Used on all pages, provided the screen size is large enough to display it.
- **Potential Uses**: 
  - Can be used as the main navigation interface for larger screens, providing easy access to navigation links and user profile information.


__PopularProfiles__
- **Purpose**: Display the top 5 most followed users with a follow button.
- **Usage**: 
  - **HomePage.js**: Shows the top followed users on the home page,
  - **ProfilePage.js**: Displays the top followed users on the profile page,
- **Potential Uses**:
  - Can be used in any part of the application where showcasing popular users is beneficial, such as in a sidebar or a dedicated section for user recommendations.


__Asset__
- **Purpose**: Display a loading spinner, an image, or a message based on the provided props.
- **Usage**: 
  - Used across the app, primarily to display a spinner while content is being fetched or loaded.
- **Potential Uses**:
  - Can be used to indicate loading states, display images with associated messages, or show standalone messages in various parts of the application.


__Comment__
- **Purpose**: Display a comment.
- **Usage**: 
  - Used on RecipePage.js to display comments associated with the recipe.
- **Potential Uses**:
  - Can be used in any part of the application where user comments need to be displayed, such as a blog post, a forum, or a user profile page.



#### Page structure

![Page Structure](/readme/page_structure.png)

#### Mockup

I created a mockup in Figma that uses a layout similar to popular social media sites. This design helps new users feel familiar and comfortable right away. This design language is used across the site, no matter what components are showing.
<br>
![Mockup](/readme/mockup.png)

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

- **axios**: Used for making HTTP requests.
- **jwt-decode**: Used for decoding JSON Web Tokens.
- **react-bootstrap**: Integrated Bootstrap components with React.
- **react-infinite-scroll-component**: Implemented infinite scrolling.
- **react-router-dom**: Provided routing capabilities.
- **stylelint**: A CSS linter that helps you avoid errors and enforce conventions in your styles.
- **eslint**: A static code analysis tool for identifying and fixing problems in JavaScript code, used specifically for linting JSX in this project.
- **prop-types**: Runtime type checking for React props, ensuring components use the correct data types.
    
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
    

## Testing

### Automated testing

<details>
<summary>NavBar</summary>

<hr />

### Summary
These tests cover the essential functionalities of the NavBar component, ensuring that it displays the correct links based on the user's authentication status and that the navbar toggler functions as expected. By validating these functionalities, we can be confident that the navigation experience for users is consistent and reliable.

<hr />

#### Test: `renders NavBar`
- **Purpose**: To verify that the NavBar component renders correctly.
- **What was tested**:
  - Rendering the NavBar component.
  - Checking if the "Sign in" link is present.
- **Why**: To ensure that the NavBar component is correctly displayed with the "Sign in" link for unauthenticated users.

<hr />

#### Test: `renders link to the user profile for a logged in user`
- **Purpose**: To verify that the NavBar displays the profile link for authenticated users.
- **What was tested**:
  - Rendering the NavBar component within the `CurrentUserProvider`.
  - Checking if the "Profile" link is present.
- **Why**: To ensure that authenticated users can access their profile through the NavBar.

<hr />

#### Test: `renders Sign in and Sign out buttons on logout`
- **Purpose**: To verify the functionality of the Sign out button.
- **What was tested**:
  - Rendering the NavBar component within the `CurrentUserProvider`.
  - Clicking the "Sign out" link.
  - Checking if the "Sign in" and "Sign up" links are present after logging out.
- **Why**: To ensure that users can log out and see the appropriate navigation options for unauthenticated users.

<hr />

#### Test: `renders "Create recipe" link for logged in user`
- **Purpose**: To verify that the "Create recipe" link is displayed for authenticated users.
- **What was tested**:
  - Rendering the NavBar component within the `CurrentUserProvider`.
  - Checking if the "Create recipe" link is present.
- **Why**: To ensure that authenticated users have access to the "Create recipe" functionality.

<hr />

#### Test: `does not render "Create recipe" link for logged out user`
- **Purpose**: To verify that the "Create recipe" link is not displayed for unauthenticated users.
- **What was tested**:
  - Rendering the NavBar component.
  - Checking if the "Create recipe" link is absent.
- **Why**: To ensure that only authenticated users have access to the "Create recipe" functionality.

<hr />

#### Test: `navbar expands and collapses when toggler is clicked`
- **Purpose**: To verify that the navbar toggler expands and collapses the navbar.
- **What was tested**:
  - Rendering the NavBar component.
  - Clicking the navbar toggler button.
  - Checking if the navbar has the 'show' class after toggling.
  - Clicking the navbar toggler button again to collapse.
  - Checking that the navbar does not have the 'show' class after toggling.
- **Why**: To ensure that the navbar toggler functionality works correctly, providing a responsive navigation experience.

</details>

<details>
<summary>SideBar</summary>

### Summary

These tests cover the essential functionalities of the SideBar component, ensuring that it displays the correct navigation options based on the user's authentication status. Specifically, they verify that logged-out users see options to sign in and sign up, while logged-in users have access to their profile, followed and liked items, and recipe creation. Additionally, the tests confirm that the logout functionality works correctly, transitioning the sidebar to display login options upon user logout. By validating these functionalities, we can be confident that the sidebar provides a consistent and reliable navigation experience for users.

<hr />

#### Test: `renders SideBar`
- **Purpose**: To verify that the `SideBar` component renders correctly.
- **What was tested**:
  - Rendering the `SideBar` component.
  - Checking if the "Sign in" link is present.
- **Why**: To ensure that the `SideBar` component loads correctly and contains the expected elements.

<hr />

#### Test: `displays login options for logged-out users`
- **Purpose**: To verify that the `SideBar` displays login options for logged-out users.
- **What was tested**:
  - Rendering the `SideBar` component.
  - Checking if the "Sign in" and "Sign up" links are present.
- **Why**: To ensure that logged-out users see the correct navigation options.

<hr />

#### Test: `displays profile and navigation options for logged-in users`
- **Purpose**: To verify that the `SideBar` displays profile and navigation options for logged-in users.
- **What was tested**:
  - Rendering the `SideBar` component within the `CurrentUserProvider`.
  - Checking if the "My profile", "Following", and "Liked" links are present.
- **Why**: To ensure that logged-in users see the correct navigation options.

<hr />

#### Test: `handles logout functionality correctly`
- **Purpose**: To verify that the logout functionality works correctly.
- **What was tested**:
  - Rendering the `SideBar` component within the `CurrentUserProvider`.
  - Clicking the "Sign out" link.
  - Checking if the "Sign in" and "Sign up" links are present after logout.
- **Why**: To ensure that users are logged out correctly and see the appropriate navigation options.

<hr />

</details>

<details>
<summary>Recipe</summary>

#### Test: `renders Recipe component`
- **Purpose**: To verify that the `Recipe` component renders correctly.
- **What was tested**:
  - Rendering the `Recipe` component.
  - Checking if the mockRecipe content is present.
- **Why**: To ensure that the `Recipe` component loads correctly and contains the expected elements.

</details>

### Manual testing


<details>
<summary>Feeds</summary>

### Test: Retrieve Recipes List on Homepage
- **Purpose**: To verify that the list of recipes is retrieved and displayed on the homepage.
- **Expected Result**: A list of recipes is loaded and displayed correctly.
- **Method**:
  1. Access the homepage of the application.
  2. Verify that recipes are fetched and displayed.
  3. Check the rendering of each recipe card to ensure all necessary details (title, description, image, etc.) are present and correctly formatted.
- **Result**:
  - Recipes are displayed without errors or missing data.
  - Each recipe card contains all expected information.

### Test: Following Feed on Homepage
- **Purpose**: To verify that the following feed on the homepage displays recipes from users you follow.
- **Expected Result**: Only recipes from users that the current user follows are shown in the feed.
- **Method**:
  1. Log in with a user who follows specific users.
  2. Access the homepage and navigate to the following feed section.
  3. Verify that only recipes from followed users are displayed.
  4. Check that no recipes from users who are not followed by the current user appear in the feed.
- **Result**:
  - The following feed displays recipes exclusively from followed users.

### Test: Liked Feed on Homepage
- **Purpose**: To verify that the liked feed on the homepage displays recipes that the user has liked.
- **Expected Result**: Only recipes that the current user has liked are shown in the liked feed.
- **Method**:
  1. Log in with a user who has liked specific recipes.
  2. Navigate to the homepage and check the liked feed section.
  3. Verify that only recipes that the user has liked are visible in the feed.
  4. Ensure that recipes that the user has not liked do not appear in the feed.
- **Result**:
  - The liked feed displays recipes that the user has liked.

</details>

<details>
<summary>Profile</summary>
  ### Test: View Profile Information
  - **Purpose**: To verify that the profile page displays user information correctly.
  - **Expected Result**: Profile details including name, bio, recipe count, followers, and following are shown accurately.
  - **Method**:
    1. Navigate to a profile page.
    2. Check for profile image, name, bio (if available), and stats.
    3. Verify the follow/unfollow button functionality.
  - **Result**:
    - Profile information is displayed as expected, with correct stats and options to follow/unfollow.
  
  ### Test: Edit Profile Information
  - **Purpose**: To verify that users can edit their profile information.
  - **Expected Result**: Changes made to profile information (bio, image) are saved and reflected on the profile page.
  - **Method**:
    1. Navigate to the profile edit section.
    2. Modify the profile bio or image.
    3. Save changes and confirm they are updated on the profile page.
  - **Result**:
    - Profile changes are saved successfully and displayed correctly.
  
  ### Test: Infinite Scroll Functionality
  - **Purpose**: To verify that infinite scroll works correctly on recipe or comments lists.
  - **Expected Result**: Additional recipes or comments load as the user scrolls down the page.
  - **Method**:
    1. Scroll to the bottom of a long recipe or comments list.
    2. Confirm that the loader appears briefly and new content is loaded.
  - **Result**:
    - Infinite scroll loads new comments smoothly without breaking the page layout.
    - Infinite scroll loads new recipes smoothly without breaking the page layout.
</details>

<details>
<summary>Navigation</summary>
  ### Test: Navigate to Pages from Sidebar
  - **Purpose**: To verify navigation to different pages from the Sidebar.
  - **Expected Result**: Clicking on respective links in the Sidebar navigates to the correct pages.
  - **Method**:
    - **Home Link**:
      1. Navigate to any page other than the Home page.
      2. Click on the "Home" link in the Sidebar.
      3. Verify that the application redirects to the Home page.
      4. Check that the "Home" link is styled as active.
  
    - **Sign In Link**:
      1. Navigate to any page.
      2. Click on the "Sign In" link in the Sidebar.
      3. Ensure that the application redirects to the Sign In page.
      4. Verify that the "Sign In" link is styled as active.
  
    - **Sign Up Link**:
      1. Navigate to any page.
      2. Click on the "Sign Up" link in the Sidebar.
      3. Ensure that the application redirects to the Sign Up page.
  
    - **Profile Link** (Logged In):
      1. Ensure the user is logged in.
      2. Click on the profile link in the Sidebar.
      3. Verify that the application redirects to the User Profile page.
  
    - **Sign Out Link** (Logged In):
      1. Ensure the user is logged in.
      2. Click on the "Sign Out" link in the Sidebar.
      3. Verify that the application logs the user out and redirects to the Home page.
      4. Ensure that after signing out, the Sidebar shows links for signing in and signing up.
  
  ### Test: Navigate to Pages from Navbar
  - **Purpose**: To verify navigation to different pages from the Navbar.
  - **Expected Result**: Clicking on respective links in the Navbar navigates to the correct pages.
  - **Method**:
    - **Home Link**:
      1. Navigate to any page other than the Home page.
      2. Click on the application logo or the "Home" link in the Navbar.
      3. Verify that the application redirects to the Home page.
      4. Check that the "Home" link is styled as active.
  
    - **Create Recipe Link** (Logged In):
      1. Ensure the user is logged in.
      2. Click on the "Create Recipe" link in the Navbar.
      3. Verify that the application redirects to the Create Recipe page.
      4. Check that the "Create Recipe" link is styled as active.
  
    - **Following Link** (Logged In):
      1. Ensure the user is logged in.
      2. Click on the "Following" link in the Navbar.
      3. Verify that the application redirects to the Following page.
      4. Check that the "Following" link is styled as active.
  
    - **Liked Link** (Logged In):
      1. Ensure the user is logged in.
      2. Click on the "Liked" link in the Navbar.
      3. Verify that the application redirects to the Liked page.
      4. Check that the "Liked" link is styled as active.
  
    - **Profile Link** (Logged In):
      1. Ensure the user is logged in.
      2. Click on the user avatar or profile link in the Navbar.
      3. Verify that the application redirects to the User Profile page.
      4. Check that the profile link is styled as active.
  
    - **Sign Out Link** (Logged In):
      1. Ensure the user is logged in.
      2. Click on the "Sign Out" link in the Navbar.
      3. Verify that the application logs the user out and redirects to the Home page.
      4. Ensure that after signing out, the Navbar shows links for signing in and signing up.
</details>


<details>
<summary>Recipe</summary>

### Test: View Recipe Details
- **Purpose**: To verify that the recipe details page displays recipe information correctly.
- **Expected Result**: Recipe ingredients, instructions, and comments are displayed accurately.
- **Method**:
  1. Navigate to a recipe page.
  2. Check for recipe title, ingredients list, and cooking instructions.
  3. Verify the comments section renders correctly.
- **Result**:
  - Recipe details are shown correctly, including ingredients and instructions.
  - Comments section is shown correctly.

### Test: Add a Comment to a Recipe
- **Purpose**: To verify that users can add comments to a recipe.
- **Expected Result**: Comment is successfully added and displayed on the recipe page.
- **Method**:
  1. Navigate to a recipe page.
  2. Find the comment form and enter a new comment.
  3. Submit the comment and verify it appears in the comments section.
- **Result**:
  - Comment is added without errors and appears immediately in the list of comments.

### Test: Edit a Comment on a Recipe
- **Purpose**: To verify that users can edit their comments on a recipe.
- **Expected Result**: Edited comment is successfully updated and displayed correctly.
- **Method**:
  1. Navigate to a recipe page with existing comments.
  2. Find the comment to edit and locate the edit option.
  3. Modify the comment text and save the changes.
  4. Verify the edited comment appears correctly in the comments section.
- **Result**:
  - Comment is edited without errors and the updated text is displayed.

### Test: Delete a Comment on a Recipe
- **Purpose**: To verify that users can delete their comments on a recipe.
- **Expected Result**: Deleted comment is removed from the comments section.
- **Method**:
  1. Navigate to a recipe page with existing comments.
  2. Find the comment to delete and locate the delete option.
  3. Confirm the deletion action.
  4. Verify the comment is no longer visible in the comments section.
- **Result**:
  - Comment is deleted without errors and disappears from the comments list.

### Test: Like a Recipe
- **Purpose**: To verify that users can like a recipe.
- **Expected Result**: The recipe's like count increases, and the UI indicates the recipe is liked.
- **Method**:
  1. Navigate to a recipe page.
  2. Find the like button or icon associated with the recipe.
  3. Click on the like button to like the recipe.
  4. Verify that the like count increments.
  5. Check that the like button/icon changes its appearance to indicate it's liked.
- **Result**:
  - The recipe is liked successfully without errors.
  - The like count updates correctly.
  - The UI reflects the recipe as liked.

### Test: Unlike a Recipe
- **Purpose**: To verify that users can unlike a recipe.
- **Expected Result**: The recipe's like count decreases, and the UI indicates the recipe is unliked.
- **Method**:
  1. Navigate to a recipe page where the recipe is already liked.
  2. Find the like button or icon associated with the recipe.
  3. Click on the like button again to unlike the recipe.
  4. Verify that the like count decrements.
  5. Check that the like button/icon returns to its original appearance indicating it's unliked.
- **Result**:
  - The recipe is unliked successfully without errors.
  - The like count updates correctly.
  - The UI reflects the recipe as unliked.

### Test: Create a Recipe
- **Purpose**: To verify that users can successfully create a recipe.
- **Expected Result**: The recipe is submitted and stored in the database, and the user is redirected to the recipe details page.
- **Method**:
  1. Navigate to the recipe creation page.
  2. Fill in all required fields including title, description, ingredients, and instructions.
  3. Upload an image for the recipe.
  4. Submit the form.
  5. Verify that the user is redirected to the newly created recipe's details page.
- **Result**:
  - The recipe is successfully created without errors.
  - The user is redirected to the recipe details page where the new recipe is displayed.

  ### Test: Delete a Recipe
- **Purpose**: To verify that users can delete a recipe.
- **Expected Result**: The recipe is successfully deleted from the database, and the user is redirected to the home page.
- **Method**:
  1. Navigate to a recipe details page.
  2. Locate and click on the delete button or link associated with the recipe.
  3. Verify that the recipe is no longer accessible on the site.
  4. Check that the user is redirected after deletion.
- **Result**:
  - The recipe is deleted successfully without errors.
  - The recipe is no longer listed on the site.
  - The user is redirected after deletion.

### Test: Edit a Recipe
- **Purpose**: To verify that users can edit an existing recipe.
- **Expected Result**: The recipe details are updated with the new information provided by the user, and the changes are reflected on the recipe details page.
- **Method**:
  1. Navigate to the edit page of a specific recipe.
  2. Verify that the current details of the recipe are pre-populated in the edit form fields.
  3. Modify the title, description, ingredients, instructions, or image as required.
  4. Submit the form to save the changes.
  5. Confirm that the updated information is displayed after getting redirected back.
- **Result**:
  - The recipe is successfully updated without errors.
  - The updated details (title, description, ingredients, instructions, and image) are correctly saved.
  - The changes are reflected on the recipe details page upon redirection.

</details>




### Validators

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

- __Tests performed using [Lightouse](https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk)__

![lighthouse_scores](/readme/score.png)


## Heroku Deployment
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




## Run Locally
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

 

## Credits

All installed libraries have been implented with the help of their respective documentation and examples

Countless of stackoverflow posts.

Random forum posts found through googling problems

### Content 


- The icons used were taken from [Font Awesome](https://fontawesome.com/)
- Favicon/Logo by [Logo](https://logo.com/)
- Demo pfp images [Profile pictures](https://www.pexels.com/collections/profile-pictures-oak37r2/)
- The celebrity chefs images were taken from their respective wikipedia pages
- Demo recipes taken from random recipe sites

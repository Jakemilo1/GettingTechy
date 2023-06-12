# CMS-Style Blog Site

This is a readme file for a CMS-style blog site. The site allows users to create an account, log in, create blog posts, view existing posts, leave comments, and perform various actions related to managing their blog posts. Below is an overview of the features and functionality provided by the site.

## Table of Contents
- [Features](#features)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

The CMS-style blog site provides the following features:

- User Authentication:
  - Users can create an account and log in.
  - User credentials (username and password) are securely stored.
  - User sessions are maintained for persistent login.

- Homepage:
  - The homepage displays existing blog posts (if any).
  - Navigation links for the homepage, dashboard, and login/logout options are available.
  - Users can access the homepage at any time to view blog posts.

- Navigation:
  - Users can navigate through the site using the navigation links.
  - Clicking on any link prompts users to sign up or sign in if not already authenticated.

- User Signup:
  - Users can sign up for an account by providing a username and password.
  - User credentials are saved securely.

- User Login:
  - Existing users can log in with their username and password.
  - User credentials are authenticated before granting access to protected resources.

- Homepage (Authenticated):
  - Authenticated users see navigation links for the homepage, dashboard, and logout option.
  - The homepage displays existing blog posts with the post title and date created.

- Blog Post Details:
  - Clicking on an existing blog post displays its title, contents, post creator's username, and date created.
  - Users can leave comments on blog posts.

- Comment Submission:
  - Authenticated users can submit comments on blog posts.
  - Comments are saved and associated with the respective blog post.
  - Comments display the username of the comment creator and the date created.

- Dashboard:
  - The dashboard presents blog posts created by the logged-in user.
  - Users can add new blog posts from the dashboard.
  - Existing posts can be updated or deleted.

- Blog Post Creation:
  - Users can create new blog posts by providing a title and contents.
  - Created posts are saved and associated with the user's account.
  - Users are redirected to an updated dashboard after creating a new post.

- Blog Post Management:
  - Users can manage their existing blog posts from the dashboard.
  - Options to update or delete a post are available for each blog post.

- Logout:
  - Users can log out from their account to end the session.

- Session Timeout:
  - If a user is idle for a specified time, they are prompted to log in again for certain actions.
  - Viewing comments is allowed, but actions like adding, updating, or deleting comments require re-authentication.

## Usage

To use the CMS-style blog site, follow these steps:

1. Clone the project repository to your local machine.

2. Install the necessary dependencies by running `npm install` in the project directory.

3. Set up the database by executing the provided SQL schema files.

4. Configure the database connection settings in the application.

5. Start the server by running `npm start`.

6. Access the site by visiting the provided URL in your web browser.

7. Explore the various features of the site, including creating an account, logging in, creating blog posts, viewing posts, leaving comments, managing posts, and logging out.
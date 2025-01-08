## Project Title: Random Cursor: Personalized Cursor Animation Extension

## Project Overview

Random Cursor is a web extension that makes user interaction even more engaging through changing the cursor to a randomly animated design with every refresh or when navigating to a new page. Users are allowed to sign up and sign in to save favorite cursors, create playlists, and more. Users can upload personally animated cursors, pick from a gallery, and sort favorite cursors into playlists. This extension is built on top of the MERN stack - MongoDB, Express.js, React, Node.js for both the back-end and front-end application. This extension is built with the user in mind to give users a seamless experience on whatever device they might use, keeping the data synced between multiple devices.


## Important Features

1. Dynamic Cursor Animation: A random animated cursor is applied every time a page is refreshed or when navigating to a new page.
2. User Authentication (Sign In/Sign Up): Users will have a secure way of creating an account, log in, and save their favorite cursors.
3. Favorite Cursors: Users can save cursors to a favorites list and create a personalized cursor playlist.
Users will be able to upload personal animated cursors- e.g. cur, gif- to a profile.
 4. Cursor Playlists : User can favourite some cursors, organize these favourites into lists or playlists for quick switching.
5. Cross Device Synchronization- data, from the user-end perspective (cursors, playlists preferences, etc are synched, cross-device from the backend.).
6. User Profile Page: It will be a specific page where a user can manage his cursor playlists, preferences, and account settings.
7. Cursor Gallery: A collection of pre-defined animated cursors ready for the users to explore and add to the user's playlist.


## Tech Stack:

### 1. Front-end:
- React: Used to build the sign-up/sign-in pages, Cursor Gallery, and profile page.
For designing the extension and UI components using CSS/SCSS to have a responsive design and look;
- Axios will be used to make HTTP requests to the server backend for user data and information of the cursor;
Browser Extension APIs to perform the functionality related to changing cursors and then apply them over web pages.

### 2. Backend :
- Node.js: Server-side logic for the request and keeping up with functionality in the backhand.
Express.js : This will create RESTful APIs which manages the authentication of user as well as the cursor data or playlist.
- MongoDB: It's NoSQL database which holds information related to user and favourite cursors as well as playlist. Flexible schema in MongoDB provides for the dynamic storage of content which comes from users.
- Mongoose: A MongoDB object modeling library that provides easy-to-use schema definitions and query functions.
- JWT (JSON Web Tokens): Secure user authentication and token-based session management.

### 3. Authentication and Data Management:
- Passport.js: For secure user authentication.
- JWT (JSON Web Tokens): For stateless authentication and making sure user data is securely stored and retrieved.


## Why This Project:

### Personalization: 
This project will provide a very customizable web experience, enabling users to change their cursor and create a personalized browsing experience.
### Learning Opportunities:
- MERN Stack Development: This project will enable me to build full-stack applications using the MERN stack, consisting of MongoDB, Express.js, React, and Node.js, which is one of the modern, widely used stacks for web application development.
- Browser Extension Development: I will learn by doing and get hands-on experience with browser extension APIs; how extensions can interact with web pages and modify their behavior.
Implementing secure user authentication using JWT and Passport.js: Now, I will understand how to manage users safely.
- Real-time data syncing: Using MongoDB to store user data and syncing it across multiple devices will give insight into handling user preferences and managing cloud data.
- Full-Stack Development: I will learn building both the backend and the frontend using the MERN stack, handling everything from the database to the end-user interface, learning both back-end and front-end development.
- Browser API Integration: I will learn how to create and deploy a browser extension that interacts with the DOM and affects the user's browsing experience.
- Cloud Data Management: MongoDB, and Express - will enable me to learn how real-time data synching is working, and learn the ways how the cloud stores and retrieves a user's specifics.

## Value of this project
This project provides both entertainment and utility, offering users a fun and personalized way to interact with web pages while learning about modern web technologies. It combines browser extension development, user authentication, and cloud-based data management in a single project. The skills learned will be useful for building a wide range of web applications, from simple extensions to complex full-stack solutions.
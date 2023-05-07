Name                  : Meo Angelo Z. Alcantara
Course Code & Section : ITE18 - GP1

Title: Next.js Login with Strapi User Authentication Step-by-Step Process

Introduction: In this tutorial, we will walk through the process of setting up user authentication in a Next.js app using Strapi as the back-end. Strapi is a headless CMS that allows for easy API creation and management.

Prerequisites:

-   Basic knowledge of JavaScript and Next.js
-   Familiarity with Strapi
-   Node.js and NPM installed on your system
-   Strapi project set up with user roles and permissions configured
-   Next.js project initialized


Title 1: Configuration Strapi Project
Step A. Prerequisite Requirements 
Install Strapi Project to your Computer Device with prerequisite that the nodes > 14 but less than 16 version.
Preffered Package Manager: npm

Step B: Installation 
//Create a directory and install the dependencies of strapi api
- npx create-strapi-app@latest strapi-project
//To Run Strapi and Produce Localhost link for further configuration
- npm run develop
    - localhost:1337/admin //admin panel
    - localhost:1337/       //server side link

Step C: Configuration of API Contents in Strapi
A. Content Manager
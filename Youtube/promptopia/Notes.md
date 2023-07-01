# Notes

1. started with:

    ```
   npx create-next-app@latest ./  
   ```
   
2. added bcrypt (to hash passwords), mongodb, mongoose (to manage db), next-auth
    
   ```
   npm install bcrypt mongodb mongoose next-auth
   ```
   
3. delete the entire app directory and create a new clean app dir

4. things done once downloaded

   1. delete "app" dir and create a new clean "app" folder (outside webstorm)
   2. delete "public" dir and create a new clean "public" folder (outside webstorm)
   3. add "components" folder
   4. add "styles" folder
   5. add "utils" folder
   6. add "models" folder
   7. add ".env" file
   8. made changes to the "tailwind.config.js" file
   9. add assets needed for the project (public/assets/etc...)

5. "rsc" and tab will give you boilerplate for a REACT jsx 

6. Stopped at 1:15:50 (Starting the Auth Part)

7. To create an auth, build directories under app: api->auth->[...nextjs]->route.js

   - Next, you'll need to build out the rout.js code
   - To start the application in the cloud: console.cloud.google.com
   - Select "New Project"
   - Name the project
   - Select Project
   - From Side Menu, select "API and Services"
   - Select "Oauth consent screen"
   - Select "Create"
   - Enter app name ... & your email
   - Next add "Authorized domain"... since this is a home project, enter "http://localhost:3000"
     - cool thing... you can enter your logo
   - once again, enter your dev email
   - Now click save and select the "Credentials" tab on the left
   - Click the above tab "+Create Credentials" and select "OAuth client ID" from drop down menu
   - Choose the application type as "web application"
   - Add the "Authorized JavaScript origins" as "http://localhost:3000"
   - In the "Authorized redirect URIs", type in "http://localhost:3000"
   - Click Create
     - 5 minute wait...
     - Pop up shows the client id and client secret
     - You want to copy these and place them ".env" file as environmental variables

8. 

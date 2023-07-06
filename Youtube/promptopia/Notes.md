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

8. To start the MongoDB database

   - Go to mongodb.com/atlas
   - sign in
   - create cluster
   - from the three boxes at the top, switch from "dedicated" to "share" and click "Create Cluster" at the bottom
   - On the left menu, select "Database Access" and check to see if you know the password to your account (otherwise you can edit the pw)
     - I found some problems with this because the account comes with a free "cluster0" 
     - So, click this and continue by editing the pw to whatever (perhaps the same as the going in pw?)
       - Side, side PRO note: past this variable in the ".env" file to be used in the later steps below
   - Next select "Network Access" from the left menu. A pop-up will give you the IP Access List Entry.  You can change the IP to "0.0.0.\0 by clicking the button that says something about "Make available everywhere"
   - Next select "database" from the left menu.  A pop-up will give you the drivers ("3. Add your connection string into your application code" area)
   - Copy this and paste it into the ".env" file as a "MONGODB_URI" variable
     - Make sure you change the "<password>" to the pw you made earlier 

9. To understand how to build the route for user auth:
   - http://next-auth.js.org
   - Select "Getting Started"
   - This page also gives you instructions on how to get the NEXTAUTH_SECRET string:
   ```
      openssl rand -base64 32
   ```
   
## Restarted

1. The jsconfig.json has a syntax problem.  It looks like this at first...

   ```
   "@/*": ["./*"]
   ```
   But it needs to look like this...
   ```
   "@*": ["./*"]
   ```
2. If the images are not showing up, check to see if they are in the "Public" folder!

3. Fixed access to sign in with the ```http://localhost:3000/api/auth/callback/google``` inside the Authorized redirect URIs (1:44:30)

4. Broke on the sign in to google portion.  video time 1:45:08

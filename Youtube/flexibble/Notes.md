# Notes

## To Start

1. ```npx create-next-app@latest ./```
    - typescript? Yes
    - ESLint? No
    - Tailwind? Yes
    - src/? No
    - router? Yes
    - import alias? No

2. additionally 
   - ```npm install @headlessui/react```  <- Used for combo box and dropdown e lements
   - ```npm install cloudinary```  <- Used for image uploads
   - ```npm install jsonwebtoken @types/jsonwebtoken```  <- Used for authentication
   - ```npm install graphql-request```  <- Used to make graph action 
   - ```npm install next-auth```  <- Used for auth
   - Or install all at once: ```npm install @headlessui/react cloudinary jsonwebtoken @types/jsonwebtoken graphql-request next-auth```
   
3. additionally, install a dev library:
   - ```npm install @grafbase/sdk --save-dev```  <- Used to speed up our workflow ith grafbase

4. To start a new Grafbase Project for this application
   - ```npx grafbase init --config-format typescript```

5. 
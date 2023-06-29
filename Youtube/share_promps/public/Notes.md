# Notes

Tutorial located: https://www.youtube.com/watch?v=wm5gMKuwSYk&t=236s

1 - To get started, create a next.js application with the following typed in the CLI:
```
npx create-next-app@latest ./   
```
- This starts a next.js application within the folder you're in
- Would you like to use TypeScript with this project? … Yes
- Would you like to use ESLint with this project? … No
- Would you like to use Tailwind CSS with this project? … Yes
- Would you like to use `src/` directory with this project? … No
- Use App Router (recommended)? … Yes
- Would you like to customize the default import alias? …  Yes
- What import alias would you like configured? … @/*  <- Enter

2 - Read the following for help:  https://nextjs.org/docs

3 - To start the server:
```angular2html
npm run dev
```

4 - New special structures in next.js
- [pageId] <- Directory
- layout.js
- error.js
- loading.js

5 - Data Fetching

    1. Server Side Rendering (SSR)
    2. Static Site Generation (SSG)
    3. Incremental Static Genaration (ISR)

6 - You cannot have a route.js and page.js file within the same directory.  As such, use the backend related (route.js) objects within the api\users directory (top level)

7 - Next.js supports the following HTTP methods:

    1. **GET**: Retrieves data or resources from the server.
    2. **POST**: Submits data to the server to create a new resource.
    3. **PUT**: Updates or replaces an existing resource on the server.
    4. **PATCH**: PartialLy updates an existing resource on the server.
    5. **DELETE**: Removes a specific resource from the server.
    6. **HEAD**: Retrieves the headers of a resource without fetching its body.
    7. **OPTIONS**; Retrieves the supported HTTP methods and other communication options for a resource.

8 - SEO: 

    1. Static Metadata
    2. Dynamic Metadata
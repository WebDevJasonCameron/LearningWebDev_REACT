# Notes from Udemy

## Starting a new react app

1. create a react app

```
npx create-react-app my-app-name
cd my-app
npm start
```

2. move into the folder

```
cd my-app-name
```

3. start react app server

```
npm-start
```

## To stop server

To stop server, use `command + c`

## If duplicating the blank project

Run `npm install`. It looks into the folder and downloads all the packages required for this app to run. I think I should need this because this blank_project is based on a download of the react starter app, with folders copied from the tutorial. However, if you want to build an app without being online (at first), this might be a good thing to do. Only need to do this once. [BTW, the missing files are called semp files, I think]

It also caused some severe vulnerabilities. `npm audit` looks like if fixed things. Not sure what though...

## Note, react custom component

Must start with a capital letter. So, `<ExpenseItem></ExpenseItem>` will work instead of `expenseItem`

Also, there can only be one main element that wraps all other elements.

## CSS Download

The link to his CSS code is in GH: https://github.com/academind/react-complete-guide-code/blob/03-react-basics-working-with-components/extra-files/ExpenseItem.css

## Learning styls

use https://styled-components.com/

## Wrapppers

These are awsome!

`<> blah blah </>`
and
` <React.fragment> </React.fragment>`

## Console Log

I had to dive into the node modules -> react-dom -> react-dom.development.js and search for disableLog. After commenting out everything after `Object.defineProperties`, I might have gotten back my CL. I hope!

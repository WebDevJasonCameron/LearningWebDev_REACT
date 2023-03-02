# REACT Initial Training

## 2023 03 02 | Next Step

We started this tutorial with a focus on classes. This is unlike the previous tutorial which focussed on hooks. While I understand the need to distinguish the differences between the programming instructions, I did find the class OOP aproach more familiar because I come from a acedimic approach. I wish I really understood which is more parallel to what the industry works in... I think the class approach is relational. Yeah, I am not suprised at my biosness. Fight me! LOL.

## 2023 02 23 | ZTM Course

Yes, I wanted to jump into this one because the other course seems to be missing some things (like, why cant I console log?). Let's see how this works.

## 2022 12 16 | Caught Up

Oh, hey all! I'm back in react. It's been busy at work. I've been learning a lot about many different tech. On my free time I was doing so fun pygame stuff to help me read python better. I do a lot of that at work. Now, I've got plans on quite a few web apps that require skills in the MERN stack. Sooo, here I am back in React. I've redone the lessons I did prior to jumping into so many other things to prepare me to actually be employed. Now, lets rock the socks off of anyone who wants to steal me away from my employer with all the awesome skills I'm acquiring!!! LOL (^.^)

I'm also thinking about re-naming this readme to log. I'll need to add a diff readme that shows some of the things I've been doing. That and describing what my goals are and list what tuts I've been involved with. That should be coming soon. I know that's far from actually showing great skills in programming. And yet, much like food, code represented well is pleasantly enjoyed.

---

## 2022 10 17 | What is next

I need to work on the rest of the tut that I started. First I want to record the YT vid that helped me through the API problem: https://www.youtube.com/watch?v=-18m0rCpr4E . The original https://www.youtube.com/watch?=OML9f6LXUUs&t=436s .

---

## 2022 10 16 | Figured

To get this to work for the API, I need to open a terminal and type `mongod`. That should start the mongodb server. Then, I can start npm inside the api folder with `npm start`. Afterwards, I should be able to return to the actual tut I originally began with.

---

## 2022 10 08 | API Setup

Using MongoDB free version. There is a lot here to remember. First, you need to make sure you have node_modules, package.json, and yarn.lock inside your actual api folder. After that, you should run `npm start` within the terminal and inside the api dir. This will ask you a bunch of questions. You can answer them or just press enter all the way through. This will modify your package.json doc. From their you can change the "scripts" "test" to "start." The following line can be changed to just "node index.js." Also remember to add the index.js inside the api dir. To see what needs to be in there, check out the doc here. Finally, within the same terminal we run `yarn start`. This broke because I forgot that we ran the line below (in 2022 10 03). This lets us include a ip address while hiding it. It also lets us include pictures later!

## 2022 10 03 | api

To add the api libraries, we used `yarn add express mongoose dotenv multer` . This is using yarn to add express mongo db called mongoose. Then dotenv does something for us so we can later hide username and password connection to mongodb.

## 2022 09 30 | Again

Relearning some of these things. To create a react app, you first use `npx create-react-app .` This pulls the react files from the server and places them in the current directory. Once all is downloaded, you can use `npm start` to run a stock html on "http://localhost:3000".

## 2022 09 24 | Resource

Check out reactrouter.com for helpful code. One thing that seems to fairly recent is that change from using the word "switch" to the word "routes" within this code. "Switch" is no longer supported. It took some thought (Go Brain!) to realize that it isn't that complicated. You have "router," then "routes" then "route." The instructor also broke the code into three lines when it really could be done in just one. That line should look like: `<Route path='/pathName' element={<Register />} />` .

---

## 2022 09 23 | Library added

Using `yarn add react-router-dom` I downloaded a library for the YT course on creating a blog app. This was used for the top menu. This required me to install yarn using the `sudo npm install --global yarn` command. Afterwards, the router took a few minutes to download.

## 2022 09 19 | Continuing

Completing small stuff for the topbar. I have some much more to do.

---

## 2022 09 17 | Back with YT Lessons

I'm doing a "quick" lesson with a YouTuber called Lama Dev. Tutorial... Lets do this!

---

## 2022 06 30 | State

Best thing I learned today was how useState works within your application. The instructor is very helpful in explaining why running an onclick command does not actually redraw the DOM. The site is drawn by REACT moving through the components once and then twice. However, once the site is completed, there isn't anything (in the beginning) that forces the site to redraw existing components. This is where useState comes into play. Even more interestingly, this function is a hook that first needs to be imported into your page. Then, it needs to called within your component (Function). It provides you an array of two elements. The existing state, and the state you will change too.

---

## 2022 06 29 | Small Beginnings

Today we worked through the structure of REACT. It is very different from the normal flow of HTML, CSS and JS. Yet, it is still very familiar. What is immediately nice about the workflow is the fact that you're building the page with components rather than structuring the HTML and hooking into those tags so you can have your design (CSS) or action (JS). You still get that, but it is the JS that is building the components. It's like having your own brick layer peace the site rather than having the site built and then trying to and functionality later. That is pretty clever

---

## 2022 06 28 | Start

I've started the "React - The Complete guide" instruction by Maximilian Schwarzmuller. It is a course on Udemy. While I go through this course, I' will be using VSC. My work can be found here. This is not meant to be a structured project. Rather, it is a series of notes, sandboxes and mini-exercises that will help me become an incredible React Developer.

---

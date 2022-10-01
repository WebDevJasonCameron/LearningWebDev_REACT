# REACT Initial Training

# 2022 09 30 | Again

Relearning some of these things. To create a react app, you first use `npx create-react-app .` This pulls the react files from the server and places them in the current directory. Once all is downloaded, you can use `npm start` to run a stock html on "http://localhost:3000".

# 2022 09 24 | Resource

Check out reactrouter.com for helpful code. One thing that seems to fairly recent is that change from using the word "switch" to the word "routes" within this code. "Switch" is no longer supported. It took some thought (Go Brain!) to realize that it isn't that complicated. You have "router," then "routes" then "route." The instructor also broke the code into three lines when it really could be done in just one. That line should look like: `<Route path='/pathName' element={<Register />} />` .

---

# 2022 09 23 | Library added

Using `yarn add react-router-dom` I downloaded a library for the YT course on creating a blog app. This was used for the top menu. This required me to install yarn using the `sudo npm install --global yarn` command. Afterwards, the router took a few minutes to download.

# 2022 09 19 | Continuing

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

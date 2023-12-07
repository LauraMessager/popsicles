# Popscicle Calculator!

This projet cover a few **Frontend** (HTML, CSS, JS) and **Backend** (NodeJs, Express) concepts. Its main purpose is to get a better understanding of the interaction between front and back.

 The popsicle calculator was first coded on my cellphone using <ins>Java</ins> language. Then when I started learning the basics of  <ins>HTML</ins>,  <ins>CSS</ins>,  <ins>JavaScript</ins>, it helped me understand how the three interact with each other. Its structure, style and function being quite simple, I thought it would be a good project to re-use to cover newer concepts such as  <ins>NodeJS</ins>,  <ins>Express</ins>, <ins>GET/POST methods</ins>,  <ins>HTTP routes</ins>.

## How does the code work?
In this code you have n siblings and n popsicles. 
You want to know if the popsicles can be evenly distributed among the siblings (with no leftover).

The user enters the amount of popsicle and how many siblings they have, clicks on "Find Out!" button. If the popsicle can evenly be distributed among the siblings a message "Oh No! Give Away" will tell you to share the popsicles. Else, this message will appear: "Eat Them All!" meaning you get to keep all the popsicles for yourself!

## Frontend

<ins>index.html</ins>
>It contains the structure and the web page content. 
>What text, input box, link, images the users will see.

<ins>style.css</ins>
>It contains the style of the page,  the animation, responsive web.

<ins>clientside.js</ins>
> It contains DOM elements. Utilising the DOM manipulation, the `addEventListener` method is employed to detect a click event. On the click of the button "Find Out!", the Fetch APIS initiates a POST request to the backend then convert the result into a json file. Then display the result for the end user by updating the textContent property of the DOM element.


## Backend 

<ins>index.js</ins>
> It includes my HTTP routes with both POST and GET methods, along with my function `calculatePopsicle()`. Creating these HTTP routes is essential to facilitate the integration of backend functions into the frontend, ensuring they can be utilized by the end user.
	
> e.g. 
> The end user inputs the number of popsicles and siblings through a POST request. When clicked on the "Find Out!" button allows the backend function to process the received values. The result is then sent to the frontend via Fetch API's POST method which converts it into json (although the end user does not directly see the JSON file). Finally, the result is displayed for the end user to see by updating a `textContent` element, presenting only the final expected outcome.
	 
<ins>package-lock.json</ins>
> Gives information about the projet for the machine to read.
	
<ins>package.json</ins>
> Is a configuration file that contains useful information about the project, dependencies, scripts, the developper can manage all those informations by modifying the file.
	
<ins>.gitignore</ins>
>Useful for avoiding the inclusion of heavy or unnecessary files in your Git repository.
	
<ins>node modules folder</ins>
> Contains all the the dependencies downloaded for the project (e.g. Express). It is a very heavy folder that will not appear in the git repository due to gitignore file (see above).


## What did I learn from this project ?

- Understand the overall structure of a frontend/backend project.
- Get a better understanding of the interaction between frontend and backend.
- Understand the use of GET/POST methods.
- Familiarised myself with git, by learning how to create repositories, commit/push on them.
- create HTTP routes
- create a markdown file

## What to do next to improve this project ?

- Make CSS nicer, improve de design for better user experience, improve responsive design.
- Learn how to organise routes.
- Learn about Postman.

## Sources
[Express Doc](https://expressjs.com)
[NPM Doc](https://www.npmjs.com)
[Stackoverflow](https://stackoverflow.com)
[Learn Git](https://learngitbranching.js.org/?locale=fr_FR)
[Happyhues](https://www.happyhues.co/palettes/3)
[Cors](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#)
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
[NodeJs video](https://www.youtube.com/watch?v=Oe421EPjeBE)
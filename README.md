# 🌟 Sable Client Project 🩺

The Sable Client Project is a project that was completed during the training at _Nology with the Sable group. 

Our team of 9 worked collaboratively to develop a Clinical Administrative Website. Over the course of 2 weeks, we divided our work into 3 sprints of 3 days each, with pairs of developers utilizing peer programming and switching roles every 25 minutes. We also switched partners every new sprint to ensure a fresh perspective on the project.

To work on the project we have used *Agile Methodology*. Agile is a collaborative approach to software development that emphasizes iterative development, frequent feedback, and flexibility to changing requirements.

The Sable Client Project provides a comprehensive platform that includes all clients and staff of the dental clinic. The Admin can book new appointments and assign them to staff members, and resources available in the clinic are visible, allowing the Admin to manage resource levels and auto-purchase if necessary. Additionally, the admin can easily add or update client and booking information.

On the technical side, we implemented authentication and hosting of the website with <a href="https://firebase.google.com/">Firebase</a>. Two team members served as Project Owners, using <a href="https://trello.com/">Trello</a> to distribute tickets to the rest of the development team. We created the website based on a Figma design from the _Nology training program.

The primary goal of this project was to learn how to work together effectively and efficiently as a team on the same project. We are proud of the hard work and collaboration that went into developing the Sable Client Project.

## ⚙️ Features

The Sable Client Project includes the following features:

- Authentification with Firebase
- Hosting with Firebase
- JSON Document Model Database where each object has relationships
- Booking with Calendar and Time.
- Displaying Data Cards and Filtering it with a **Searchbar**, a **Sorting** button and **Filters** dropdown menu.
- Displaying Staff/Client/Ressource details routing
- Editing Data 
- Login Out

## ⚗️ Testing 

- This project utilises Jest with React Testing Library (RTL), which are built into Create React App (CRA).

- All component folders will have an associated test file within the same folder. Each component is tested independently (unit testing) to ensure they work in isolation and aren't affected by external factors(such as other components).

- Any test that would use the 'render' function from RTL, use the 'customRender' function from testUtils.js. This adds routing by default so we can easily test components that include route/link logic.

## 🔮 Demo  

If you would like to try the website, please log in with the following details:   
  - Email: **testemail@gmail.com**
  - Password: **test1234**
  
<div align="center">

  [Live Demo](https://sable-client-project-61725.web.app/)
  
  ![Website Demo](http://g.recordit.co/WIwfRH8vX0.gif)
</div>



## 💾 Installation and Usage 
To install and use the Sable Client Project, follow these steps:

1. Clone the project from Github using ```git clone https://github.com/tomas-trls/Sable-client-project.git```.
2. Install dependencies by running ```npm install```.
3. Start the development server by running ```npm run start```.
4. Navigate to localhost:3000 in your browser to view the project.

## ⚡️ Technologies used ⚡️
<p align="center">
<a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="80" height="80"/> </a> 
 <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="80" height="80"/> </a> <a href="https://sass-lang.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/sass-lang/sass-lang-icon.svg" alt="sass" width="80" height="80"/> </a>
 <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt="react" width="80 height="80"/></a>
<a href="https://firebase.google.com/" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="Firebase" width="80 height="80"/></a>
<a href="https://trello.com/" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/trello/trello-icon.svg" alt="Trello" width="80 height="80"/></a>

</p>



## 💻 Code Quality 

- This project uses prettier and ESlint to increase code readability and consistency.

## 🗂️ File Structure 

- Components contains all generic components that are shared across pages. They should be generic and reusable, and testable in isolation.

- Pages contains our different application views. Generally any requests should be activated here so that any children components don't have to, e.g. If we have a 'User Details' view, we should dispatch our network requests for user information from here.

## 💎 Contributors 💎
The Sable Client Project was developed by the _Nology Sable Team.

- [@TristanPere](https://github.com/TristanPere) | Project Owner for First Week / Buddy for last Sprint
- [@hannahmitchell99](https://github.com/hannahmitchell99) | Project Owner for Second Week
- [@DexterFreeman](https://github.com/DexterFreeman) | Buddy for First Sprint
- [@bajserowiczMikolaj](https://github.com/bajserowiczMikolaj) | Buddy for Second Sprint
- [@BeckyRushton](https://github.com/BeckyRushton) | 🐱‍👤
- [@Joshua-Tucker](https://github.com/Joshua-Tucker) | 🐱‍👓
- [@jjy0u](https://github.com/jjy0u) | 🐱‍💻
- [@navina321](https://github.com/navina321) | 🐱‍🚀
- [@tomas-trls](https://github.com/tomas-trls) | tomast25@hotmail.com









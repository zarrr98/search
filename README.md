This app is designed to let users search among a list of items in a file using React js and Express.

you can find two directories 'server' and 'src' that show server side and client side respectfully.

server side : 

-in api/routes you see the file apis.js which containes APIs of the app. Here we have only one API which returns the
contents of the text file we want to search in. This ApI simply goes through the file and push each line into an array.
At the end, it returnes the array in the response.

-app.js and server.js in server folder, initializes the things we need for our server .e.g  determinig the port that the server is listening to, server path, determinig how the server should answer a request with unrecognized path (it returns 500) , etc.


client side

as we said before, in src we have the client side codes:

-assets folder containes images (we have used one background image for the app) as well as scss and css files (we have used SASS to style our app. the compiled sass filed will be saved in css folder).
you can see that we have separate files for variables , mixins , general styles and main page styles in scss folder.

-js folder containes JavaScript files which has two folders : screens and components. in components folder we have implemented reusable components that could be used anywhere.
components like SearchSegment (shows the search bar and the search button), ListComponent(shows a list of the given items), Load(shows a spinner when the data is being fetched from server) and Empty(shows a text that says "there is no item to show". it is used when the file is empty or you search for a text which does not exist in the list).
screens folder containes screens that put together components and build the web page. Here we have only one screen (main page).

-utils folder containes js files like configs.js (some constant configurations that may get accessed from different parts of the app. For example we put server URL in this file, so if the URL changes we only have to change this file, not all the files that requests to server.), services.js(containes some functions that can be used to request to the server. Here we have just one fuction which fetches the information from the given URL.) and
strings.js(containes constant string values that we want to use in our app. like texts on buttons and so on).

-App.js shows differet pages in the web app. We use react-router to be able to navigate from one page to another. (in this app we only have one page so react-router wasn't really needed.) 

note : we have used react-bootstrap in this project.


How to run this app?

1. In order to run this app you need to have Node js installed on your computer. So if you don't have it already, go to address https://nodejs.org/en/download/ and download and install it.
2. In proj1 directory, run "npm install". This command installs the depencencies.
3. In proj1 directory, run "node server/server.js". This command will run the server side.
4. In some other command prompt (not in the one you used in number 3 and the server is running ),In proj1 directory, run "npm start". This command will run the client side.
5. wait till the app get opened in http://localhost:3000/ .



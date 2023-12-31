# React + TypeScript + Vite

I will describe the code here:
We are using chakra ui for this website so we went to charka ui and did the npm install and imported it in the main.tsx. Then in the app.tsx we decided to divide the
page into sections using grids and then we made it responsive .We make use f the chaakra ui components like hstack which will stack the elements inside that tag 
horizontally. We needed to pass an image inside that so how did we pass it we passed it dynamically by importing it at the top. Now we need to make the page dark so 
what we do is we make a theme.ts in src folder and include it in the main.tsx with some modification in the main.tsx ,now we need to toggle between the dark and 
light mode so we build a component on the navbar to switch between the states colormodeswitch, what we do inside the colormodeswitch we access a custom hook of 
chakra ui and destructure it .Now we go to rawg games and get the api key from there and install axios for sending the http requests .Now we put the api key in the
api-client.ts with this configuration the key will be included in the query string of every http request we send to our backend ,we set the base url .Now we make use 
of uses state and use effect in the GameGrid.tsx to access the path directly to games  through the api,now onece we get the games we need to put it in the setGames
array for that we need to define the properties of the game we will get so create an interface then we use useEffect to get the data from the api key and then we 
return the data .Now we have a problem our gamegrid component knows about our request our endpoint and in the future it should also know about cancelling requests 
using abort controller this is not what we want in our components because components should be primarily responsible for returning markup and handling user 
interactions at high level, So we create a custom hook to organise our code and we take the usestates and effects to the hook useGames.ts. Now we return the things 
we want from here and import it into the gamegrid now in useGames we set an abort controller to cancel the network requests and the signal is used to associate the 
controller with the get request. Now we need the images to display on the cards so we create a new component GameCard.tsx where we define all the properties of the 
cards and the css and we render the columns in the gamegrid section dynamically by setting it as an object. Now we need to add the icons which the game is compatible
in so we access the property platform of the game we create a new component for the icons platformiconlist.tsx and now we import the logos form react icons
libraries, now we map the react icons to the slug of the platform ,now we want to define the game rating criticscore so we get that from the  game props we define a
new component for it CriticScore.tsx and we make changes to it according to our prefrences. Now we need to reduce the image loading time so we crop the image with a 
service that takes the url and return the cropped image url.Now we are adding a loading skeleton to our interface so we define a usestate in useGames and we define a
new component for that GameCardSkeleton.tsx. Skeleton tag defined in chakra is a placeholder for image skelton, we should the skeleton just like our game card. Now
we want to remove the duplicated styles so we define a new component GameCardComponent.tsx and we define interface children here and pass to the GameCard and 
GameCardSkeleton. Now we are done with the main part now we have to build the genre to filter the games based on the genres .So we create a component GenreList.tsx .
Now to fetch the genre we need to create a custom hook similar to the one used for the games, this is going to be almost same like the useGames hook so we just copy
the main function part and make the changes to the GenreList.tsx and then we just go to the app component and fill the aside section with the GenreList.tsx . The 2 
custom hooks we created are almost similar so we need to create a generic data fetching hook so what we do is we copy paste the entire useGenre.ts into the 
useData.ts and we make generic modifications wherever required, but there is still a problem once we make changes to the genreList.tsx we still have the route 
endpoint as we saw earlier our components should not have any idea about making the http requests.Now we have to import the images for the genres so we do that in 
the GenreList.tsx .But now we have a problem our gamecards are crumpled with less space available so we go to the App.tsx and define the the template columns areas 
which are main and aside elements can take .Now we add a spinner to the loading genre .Now we have to render the genre such that when we select on any genre the 
desired games appear .If we want to share state between 2 components what do we do , we lift it up to the nearest parent, so what is the parent of the genreList and 
the gameGrid the app component. So we have to go to our ap component and declare a state variable to store the selected genre. We come to our genreList component and
we create a interface prop there which has a property which will store the details of the genre which we selected ,next we need to pass this to our gameGrid so that
it can be passed to the backend while fetching the games  ,now we come in our gameGrid component we define a interface property there and pass it to the useGames now
we go to the useGames and we define the argument that the useGames can accept in the gameGrid component, now we go inside the useData hook and we pass a second 
argument of axios request config and make it optional, to filter games by genre we need to pass the genre as query string parameter, so now we can pass 2 arguments 
in the useGames so we pass the second argument as a params which will take the id of the selected genre now we have initialized the useEffect with a single array 
that means it will only take the data once (for game and for genre) so now we declare a third argument  dependency in the useData. Now to improve the user experience
we are going to highlight the selected genre. Now we have to build a platform list which will have a dropdown  and show us the compatible game list so we create a 
new component PlatfromSelector.tsx . So in order to access the platforms we need to access the endpoint of platforms for that we will need a hook. Once we access the 
endpoint route we will have what we need then we just have to map it onto the list items. Now to filter the games by the platforms we declare a state variable in app 
component to keep a track of the selected platform and then pass that platform in the gameGrid for filtering. Now we want the name of our platform to be dynamically 
rendered depending upon what we click so we define another prop in platformList. Now there are too much variables in our code so we have  to make them organised, we 
should pack related variables inside a object use a query object pattern. Now we see what is making a mess in our project that is the useState variables so we will 
replace them by creating an interface and making a useState out of that called [gameQuery ,setGameQuery], now instead of selectedGenre we pass gameQuery.genre ,now 
we have to do this changes in gameGrid also. Now we have to render a new component sortSelector which will sort the games according to different parameters for that 
we will visit the ordering section of the rawg api, so now we create an array according to the order and then map it onto the menu item list now we create a new 
property in sortSelector for the selection of menu items and and render it in app component so we pass that as a property in gameQuery object, now once we have our
app component rendered we need to render the gameGrid component but we can see that gameGrid depends on the gameQuery object so it doesn’t need to be rendered so we 
go to the useGames and and modify the params. So now we have everything we need to render the interface so we create a function currentSortOrders which will find the
an entry inside the array of sortOrders which is equal to the data which we got from the app component .Now there are many games without an image so we download an 
image and keep it in the assets folder from google to show at the parts where there are no images ,we import the image as a component. Now we have to create a 
searchbar to search for games so we create a new component SearchBar.tsx and  render it now we want a logo to the left of the search bar so we  group the elements in 
inputgroup and define a inputleftelementchildren. So now we have to render our search box when we type something and press enter this component notifies the app 
component ,the app component then will take the search text store it in our query object and pass it down to the gamegrid so first we have to create a form in the 
searchbar.tsx ,so now we have to deny the default process of the form that is submitting data to the backend so we will declare an event on submit such that it will 
prevent the default then we refrence the input element with the useref then we create a prop such that the data we enter in the search bar should be send to the app 
component but the problem here was that the searchbar is not directly accessible in the app component so we have to import the same prop to the navbar .Now we have
to make a dynamic heading so we create a new component gameHeading.tsx so if we want a dynamic heading we should import thee gameQuery from app component and access 
the genre and platfrom from there such that the heading shows the platfrom first then the genre and only games if nothing accessed. So we create a heading and pass 
the platform first and then the genre dynamically as gameQuery object .Now we are almost done and need a darker theme for our webpage so we go to smartswatch in 
chakra ui we will have to change our entire color palete. Now we are done so go to the terminal and type npm run build now we deploy it to vercel .DONE 







This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

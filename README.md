# NYT-React
# :newspaper: New York Times ReactJS App :pencil:
A `NodeJS`, `MongoDB`, `Express`, and `ReactJS` application where users can query based on years, display 10 articles, and save articles from the [New York Times Article Search API](http://developer.nytimes.com/). Users can remove saved articles that they read or no longer are interested in.

You can check out the deployed version in Heroku [here](https://ma-nyt-react.herokuapp.com/)!

Click on the View Article button to be re-directed to the full New York Times articles.


## Functionality
On the backend, the app uses `express` to serve routes and `mongoose` to interact with a `MongoDB` database.

On the frontend, the app uses `ReactJS` for rendering components, `axios` for internal/external API calls, and `Bootstrap` as a styling framework.

In order to transpile the JSX code, `webpack` and `babel` were utilized. All of the JSX  code in the `/app` folder was transpiled into the `bundle.js` file located in the `/public` folder.


## Cloning down the repo
If you wish to clone the app down to your local machine...
  1. Ensure that you have MongoDB set up on your laptop
    * An amazing repo to get you started with that can be found [here](https://github.com/dannyvassallo/mongo_lesson).
  2. Once you are set up, `cd` into this repo and run `npm install`.
  3. Then open another bash or terminal window and run `mongod`
  4. Run the script with `node server.js`.
  5. Navigate to `localhost:3000` in your browser.

Note that if you made changes to the JSX code in the `/app` folder, you must transpile it to see your changes. 
When `cd`-ed into this repo, enter `webpack -d` in the command line to compile into JSX code and render components.


## Screenshots
#### Users are able to submit a topic, start year, and end year to query the New York Times
![Query Articles](/screenshots/query.PNG)

#### Press the green, save button and the article is bookmarked via an `/api/saved` post route
![Results](/screenshots/results.PNG)

#### Press the red, remove button and the bookmarked article is removed via an `/api/delete/:id` post route
#### You can view the articles you've saved in this route
![Bookmarked](/screenshots/saved.PNG)

#### Note that the get routes include an **internal route** to `/api/saved` for querying and displaying all the bookmarked articles from the Mongo database.

#### Note that the get routes also include an **external route** to `https://api.nytimes.com/svc/search/v2/articlesearch.json` for querying the New York Times.
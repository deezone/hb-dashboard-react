# Hydrobytes Dashboard

### Development
- To start the application in "dev" (development) mode

```
npm run start:dev

> hb-dashboard-react@0.0.1 start:dev /Users/dee/projects/hydrobytes/dashboard/hb-dashboard-react
> webpack-dev-server --mode development

ℹ ｢wds｣: Project is running at http://localhost:3000/
ℹ ｢wds｣: webpack output is served from http://localhost:3000/dist/
ℹ ｢wds｣: Content not from webpack is served from /Users/dee/projects/hydrobytes/dashboard/hb-dashboard-react/public/
```

Built files never show up in your dist directory. `webpack-dev-server` is actually serving the bundled files from 
memory — once the server stops, they’re gone.

### Build

- Production: `webpack --mode production`
Build files are in `/dist`

### Optional

Images aren’t set up to be processed by Webpack by default. There’s a loader for that:
[file-loader](https://webpack.js.org/loaders/file-loader/).

### Packages

- **Webpack**
A module bundler. Its main purpose is to bundle JavaScript files for usage in a browser.

- **Webpack dev server**
Used along with webpack. It provides a development server that provides live reloading for the client side code. This
should be used for development only.



### References

##### Setup Basic React.js Site
- **[learn concepts step by step](https://reactjs.org/docs/hello-world.html)**
- **[Tutorial: Intro to React - how to build an interactive tic-tac-toe game with React.](https://reactjs.org/tutorial/tutorial.html#before-we-start-the-tutorial)**
- **[Creating a React App… From Scratch.](https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658)**
- **[How to Create a React app from scratch using Webpack 4](https://medium.freecodecamp.org/part-1-react-app-from-scratch-using-webpack-4-562b1d231e75)**
  - **[pinglinh/tutorial-the-guardian-search-app](https://github.com/pinglinh/tutorial-the-guardian-search-app/tree/functional-app)**
- **[KleoPetroff/react-webpack-boilerplate](https://github.com/KleoPetroff/react-webpack-boilerplate)**
- **[Setting up a Node.js Express server for React](https://medium.com/@maison.moa/setting-up-an-express-backend-server-for-create-react-app-bc7620b20a61)**

##### Test Coverage
- **[How to Test React Components using Jest and Enzyme](https://blog.bitsrc.io/how-to-test-react-components-using-jest-and-enzyme-fab851a43875)**

##### Tab UI

- **[Building a Tabs Component with React](https://alligator.io/react/tabs-component/)**
- **[How To Create Bootstrap Tab Component In React](https://appdividend.com/2018/07/02/how-to-create-bootstrap-tab-component-in-react/)**

##### GET from remote API

- **[How to fetch data in React (axios)](https://www.robinwieruch.de/react-fetching-data/)**
- **[Fetching API Data with React.JS](https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2)**
- **[AJAX Requests in React: How and Where to Fetch Data (axios)](https://daveceddia.com/ajax-requests-in-react/)**
- **[Using data in React with the Fetch API and axios](https://css-tricks.com/using-data-in-react-with-the-fetch-api-and-axios/)**

##### Forms (POST)

- **[How to handle forms with just React](https://medium.com/@everdimension/how-to-handle-forms-with-just-react-ac066c48bd4f)**
- **[Building forms using React — everything you need to know](https://www.codementor.io/blizzerand/building-forms-using-react-everything-you-need-to-know-iz3eyoq4y)**
- **[How to Test React Components using Jest and Enzyme](https://blog.bitsrc.io/how-to-test-react-components-using-jest-and-enzyme-fab851a43875)**

##### Dockerize

- **[So you want to Dockerize your React app?](https://medium.com/greedygame-engineering/so-you-want-to-dockerize-your-react-app-64fbbb74c217)**
- **[Dockerizing React Applications for Continuous Integration](https://www.telerik.com/blogs/dockerizing-react-applications-for-continuous-integration)**

##### HydroBytes Icon Ideas

- **[Pinterest - Garden Gnomes](https://www.pinterest.ca/pin/365143482274430866)**

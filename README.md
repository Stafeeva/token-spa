### Tokens SPA ###

Install the dependencies:

```
npm i
```

Start the app:

```
npm start
```

Go to 'http://localhost:8080' or 'http://localhost:8080/tokens'

### Built using the following libraries ###

- React
- Redux for data management
- Antd components
- Axios for API calls to fetch countries
- Uuid to generate unique token ids
- Moment library to handle dates

### Notes ###

- No boilerplate used. The project is created from scratch with npm and Webpack.

- All the interactions with localStorage are in the 'src/middleware/token.js' file, and it can be updated with API calls to fetch data from a server instead.

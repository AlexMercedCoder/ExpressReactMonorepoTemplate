# Express & React Monorepo Template

This template is meant to have an Express Backend and React Frontend within one repo.

After generating this project the first thing you should do is `npm run setup` to install all dependencies
## Commands

- npm run start: installs express and react dependencies
- npm run prod: builds the react project and kickstarts the express server
- npm run dev:react: kickstarts the React dev server
- npm run dev:express: kickstarts express dev server

**note: `npm start` and `npm run build` are scripts made for heroku deployment primarily**

## Notes

- Add all api routes through the api controller in controllers/api
- EJS installed to use templating (use public folder for CSS/JS files)
- proc file determines startup command for heroku
- dotenv installed, so can create a .env file
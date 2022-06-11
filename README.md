# sketch-challenge

### Tools I used:

- Create React App
- TypeScript
- React Router 
- Styled Components
- Apollo Client
- Jest and React Testing Library for unit tests
- Cypress for e2e tests

### How to run

- Clone the project and install dependencies using

    `npm i`

- Start the app by running

    `npm start`

- Run unit tests using

    `npm test`

- Run e2e tests using

    `npm run e2e`

### How it looks

Upon running the app the Document Page will be shown.

By default it loads the document named `Code Test` (id `e981971c-ff57-46dc-a932-a60dc1804992`) at `http://localhost:3000/`
 
<img width="1436" alt="image" src="https://user-images.githubusercontent.com/6271380/173193180-5549c56b-d7cc-4963-bef2-f2f8647350ee.png">

You can change the document shown by modifying the id in the url. For example, here we are loading the document Code test (bonus) (id `40432a93-5434-4059-87b9-545fd1ad6ee0`) at `http://localhost:3000/documents/40432a93-5434-4059-87b9-545fd1ad6ee0`

![2022-06-10 20 22 34](https://user-images.githubusercontent.com/6271380/173193198-12d5f95b-a1dc-46a3-8832-2ba55954ae71.gif)

If you click on any artboard thumbnail, you will be sent to the Artboard page. Here you can navigate through the artboards using the navigation bar at the top.

![2022-06-10 20 26 08](https://user-images.githubusercontent.com/6271380/173193215-083149e1-3c18-47ea-87ff-1ab7573e7c46.gif)


If you want to go back to the Document page, you can simply click on the Close button.

![2022-06-10 20 26 42](https://user-images.githubusercontent.com/6271380/173193241-d7bf2473-1cc3-4f1a-8e96-01066f673fce.gif)


### Implementation details

I chose `Create React App` to bootstrap the project as it provides a very simple yet robust way to create and configure the project leaving everything ready to start coding. I added `TypeScript` and also configured `Prettier` to format the code automatically in a pre-commit hook using Husky.

In terms of folder structure, I don't have a strong preference on it. For this project I intended to keep things simple by grouping components together according to the place they appear in. There is also a shared folder for components that are reused in several places.

For styling I chose `styled-components`. As it was a somewhat simple project, I wanted to keep things simple so I didn't add any other css libraries. 

In order to obtain the data from the API, my choice was `Apollo Client` which has a very efficient caching mechanism. By storing the result of the GraphQL query in the local, in-memory cache, we're able to move through artboard and document pages without having to refetch the data. This provides a very smooth and fast navigation. 

I think it's very important to have good coverage of the codebase in order to deliver a robust application. For this reason I implemented both unit tests using `Jest` and e2e tests using `Cypress`. Two very powerful testing libraries.


### Future Improvements

- The data types could be generated automatically using Apollo Codegen. I didn't do it in this project because there were simple interfaces but as the model grows bigger I believe that would be a better option.
- More styling should be added to handle responsive views.

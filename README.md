# **IDEA 10 Year Anniversary** :tada:

IDEA's anniversary website is the only 10 year interactive journey map that integrates testimonials and data visualizations from the past, present, and future fro student leaders, potential investors, entrepreneurs, deans and influential partners in the global entreprenuer ecosystem who are curios and motivated by IDEA's mission in an era of global diversity, innovation and excellence.

[![Netlify Status](https://api.netlify.com/api/v1/badges/ad89c199-fc46-4c84-9e0c-89d9e91d59df/deploy-status)](https://app.netlify.com/sites/infallible-lamport-7aa8ff/deploys)
## **Getting Started**

Clone the repository:

```bash
git clone git@github.com:Scout-NU/idea-anniversary.git
```

Install the npm modules

```bash
# Inside the project directory
npm install
```

Setting up Takeshape environment variables

```bash
#Create a .env file inside the project directory
touch .env
```

Add the following lines to the `.env` file with you favorite command line editor(vim,nano, etc.) Please use the API key you recieved from Takeshape

```sh
DOCUMENT_TITLE="IDEA Anniversary"
TAKESHAPE_API_KEY=SECRET_TAKESHAPE_API_KEY
TAKESHAPE_GRAPHQL_URL=https://api.takeshape.io/project/a2597671-169d-4d16-9c56-9528619268c9/graphql
```

Run the server

```bash
npm start
```

Go to http://localhost:8080 to access the website.

## **Technology** :sunglasses:

**Client**
- React > 16.8, Hooks
- GraphQL
- Parcel bundler

**Backend**
- TakeShape Headless CMS

**Testing**
- Jest
- @testing-library/react


## **Deployment** :raised_hands:
The website is currently live [here](https://infallible-lamport-7aa8ff.netlify.com/)

To deploy, run:
```sh
make deploy
```

## **Commands**
There are convenient commands built into the `Makefile`

To create a new React component:
```sh
make component NAME=<COMPONENT_NAME> DIR=<COMPONENT_DIRECTORY>

# For example
make component NAME=Homepage DIR=pages
```

To run tests:
```sh
make test
```


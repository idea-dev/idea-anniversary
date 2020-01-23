# **IDEA 10 Year Anniversary** :tada:

IDEA's anniversary website is the only 10 year interactive journey map that integrates testimonials and data visualizations from the past, present, and future fro student leaders, potential investors, entrepreneurs, deans and influential partners in the global entreprenuer ecosystem who are curios and motivated by IDEA's mission in an era of global diversity, innovation and excellence.

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
The website is currently live [here](https://idea-anniversary.netlify.sh)

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


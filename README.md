# task-app

## Running the App

To run the app on your local machine, follow these steps:

1. Clone this repository to your local machine.
2. Open a terminal and navigate to the task-app directory.

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your machine.

## Environment Variables
There are different variables for client and server

#### you can use this api token in `.env` for testing
```
64e8520399cf45b15fdf5ec6
```

In client folder
Inside the `client` folder, you can set environment-specific variables in a `.env` file. Create a `.env.development` file for development settings and a `.env.production` file for production settings. Define your environment variables in these files.

```
REACT_APP_API_TOKEN=
```
api token you can get from mockapi.io
1. go to https://mockapi.io/
2. create project
3. create new resource in project and name it users
4. add name, avatar, age and location in schema
5. copy api token and paste in `.env` file


Inside the `server` folder, you can set environment variables in a `.env` file.
```
PORT=
```


## Deploying the App using script
In root directory run
```
bash deploy.sh
```



## Installation

1. Install client dependencies
```
cd client
npm install
```

2. Install server dependencies
```
cd server
npm install
```

## Starting the App manually
### Starting development server
In the project's cient directory, you can use the following command to start development server:

```
npm run start
```

### Deploy the app
In client directory run
```
npm run build
```
Then in server directory run
```
node index.js
```



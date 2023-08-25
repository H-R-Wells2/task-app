git pull origin main

cd client
npm install
npm run build

cd ../server
npm install

node index.js

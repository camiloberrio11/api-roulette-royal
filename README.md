# 🃏♥️♣️ API ROULETTE 🎰🎩♦️

### Linter ☑️💥
- StandarJs (Use for Nodejs - https://standardjs.com/)

### Characteristics 🔨

- NodeJs
- Express
- Postgres
- Deploy app in heroku CI (https://api-roulette-royal.herokuapp.com/)
- Db stored in Google Cloud

### Routes services 🚀

#### 1. Route - start - Get deployed version - (GET: https://api-roulette-royal.herokuapp.com/)
#### 2. Route - create roulette():idroulete - (POST: https://api-roulette-royal.herokuapp.com/api/addroulette)
#### 3. Route - update status (openroulette) roulete(): boolean -  (PUT/: https://api-roulette-royal.herokuapp.com/api/openroulette/:idroulette)
#### 4. Route - update status (closeroulette) roulete(): boolean - (PUT/: https://api-roulette-royal.herokuapp.com/api/closeroulette/:idroulette)
#### 5. Route - List of all roulettes with their status - (GET: https://api-roulette-royal.herokuapp.com/api/roulettes)
#### 6. Route - Betting service on a number and a color, or one of the two options - (POST: https://api-roulette-royal.herokuapp.com/api/betroulette)



### Performance aprox  📊

- https://api-roulette-royal.herokuapp.com/api/addroulette (Users 5 - Request 1000) -> 12 req/seg
- https://api-roulette-royal.herokuapp.com/api/roulettes (Users 5 - Request 1000) -> 11 req/seg


### Generate brand and Hash git
#### Generate hash for versioning: in your terminal / powershell / cmd enter command **node server.js git**





## By Camilo Berrio ⚽
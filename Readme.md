## Laravel Vue Jwt Example Project

# Setup

```
composer install
npm install
```

make a .env file and set your db

then
```
php artisan key:generate
php artisan jwt:secret
php artisan migrate --seed

```

# Usage

Run the backend
```
php artisan serve
```

Run the front-end
```
npm run watch
```
Credentials
username: admin
password: admin

Browse the website using
http://localhost:8000
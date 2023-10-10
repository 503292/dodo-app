Планер +

deploy:

on master:

- netlify init

- netlify deploy --dir=./build --prod
- git push

OR

- npm run build
- git add .
- git ci "build name"

npm -v -> 6.14.18

node -v -> v14.21.3

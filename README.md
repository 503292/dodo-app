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

// global

- node v14.21.3
- npm 6.14.18

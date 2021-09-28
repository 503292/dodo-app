Планер +

deploy:

- netlify init
- netlify deploy --dir=./build --prod

on master

- npm run build
- git add .
- git ci "build name"

# ReactJs API

## Git
```sh
git init 
git add .
git commit -m "react init"
git remote add origin  GİTHUB_URL
git branch              <! -- for the branch control  --> 
git push -u origin main
```

## Git pull
```sh
git remote -v
git clone https://github.com/Mervegulatly/Techcareer_2025_11_ReactJs_Blog.git
git pull
git pull origin master/main
```

## useful links
```sh
React Developer Tools ==>  https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?pli=1

Redux DEvTools ==> https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd


React datasheet ==> https://react.dev/
React datasheet ==> https://tr.react.dev/
```
## ReactJs Install
```sh
npx create-react-app [projectName]

npx create-react-app blog
cd blog
npm start

// Toast
npm i react-hot-toast

// edit
npm install lucide-react

// icon
npm install react-icons

toast ekle
npm i react-hot-toast

pdf excel eklemek
npm i xlsx jspdf jspdf-autotable

npm i axios react-router-dom zustand jwt-decode

npm install axios --save 
npm install react-router-dom --save
npm install i18next --save
npm install react-i18next --save


npm install nodemon --save-dev
npm install nodemon -D
```

## Npm Komutları
```sh
node -v
npm  -v

# package.json oluşturmak dikkat proje ismi:
# 1-) küçük harflerle
# 2-) boşluklar olmamalıdır bunun yerine (-)
# 3-) üğşçö kullanma
npm init
npm init -y

# package.json içindeki kütüphaneleri proje dahil etmek için kullanıyoruz.
npm install
npm i

# local npm'e neler yüklemişim
npm list   => LOCAL

# Global npm'e neler yüklemişim
npm list -g  => GLOCAL

# Global npm'e neler yüklemişim
# --depth=0 sadece ana yüklediğim dosyaları göster
npm list -g --depth=0

# npm Localde nereye yüklenmiş
npm root

# npm Globalde nereye yüklenmiş.
# C:\Users\90553\AppData\Roaming\npm\node_modules
npm root -g

# SEARCH
# npm üzerinde arama yapmak için kullanıyoruz.
npm search express
npm search mocha

# INSTALL
# --save (Production ortamında kurulması gerekiyor)
npm install -g bower --save
npm install  express --save
npm install  express@4.18.1 --save # Semantic Version: 4.18.1

# -dev (Test ortamında kurulması)
npm install mocha --save-dev
npm install tailwindcss -D

# DELETE
npm unistall express

# UPDATE
npm update # Bütün bağımlılıkları güncellemek
npm update express
```
## Nodemon
```sh
normalde: node index
nodemonla birlite: nodemon index otomatikleştiriyoruz.
npm install
npm search nodemon
npm install nodemon --save

-g: global
-q: terminalde az açıklamalar görünsün

npm install -g nodemon --save
nodemon index.js
nodemon -q index.js

"scripts": {
    "nodemon": "nodemon index.js",
    "nodemon_q": "nodemon -q index.js", }

npm run nodemon
npm run nodemon_q
```



`npm start`
`npm test`
`npm run build`  <!-- If we write our own script, we would use: `npm run build` or `npm run start`-->
`npm run eject`





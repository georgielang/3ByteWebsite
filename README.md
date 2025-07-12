Wesite Setup:

1. Install GitHub app (I think this will make things a lot easier for us)

2. Install node.js

3. cmd as administrator

4. cd into directory you want to have the files

5. run command "npx create-react-app <insert name here>(Cant have caps)"

6. run command "npm install --save gh-pages"

7. locate "packages.json

8. inside packages.json at the top of the file add: "homepage": "<link-to-website>"

9. under scripts add: 
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

10. in GitHub app, add a local directory, add this one, and create create a GitHub repo for the files, push all as it already makes a gitignore for us



to start the website locally:

cmd as admin -> cd into dir of website -> npm start

to deploy it to the git:

cmd as admin -> cd into dir of website -> npm run deploy
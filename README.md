Wesite Setup:

1. Install GitHub app (I think this will make things a lot easier for us)

2. Install node.js

3. cmd as administrator

4. cd into directory you want to have the files

5. run command "npx create-react-app <insert name here>(Cant have caps)"

6. run command "npm install --save gh-pages"

7. run command "npm install react-router-dom"

8. run command "npm install react-icons"

9. locate "packages.json

10. inside packages.json at the top of the file add: "homepage": "<link-to-website>"

11. under scripts add: 
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

12. in GitHub app, add a local directory, add this one, and create create a GitHub repo for the files, push all as it already makes a gitignore for us



to start the website locally:

cmd as admin -> cd into dir of website -> npm start

to deploy it to the git:

cmd as admin -> cd into dir of website -> npm run deploy


workflow will be:

1. create branch off of master

2. make changes commit changes throughout build to your branch

3. BEFORE running npm run deploy - attempt to merge to master branch

4. merge code to master branch

5. run "npm run deploy"

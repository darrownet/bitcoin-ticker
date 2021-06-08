# BitCoin BlockChain Ticker

----

### Developer Requirements
+ Node 10.15.3 or higher  
+ NPM 6.10.3 or higher  
+ Operating System: Mac OSX 10.10 or higher/Windows 7 or higher  

----

### Installation
Open a terminal, navigate to the root directory of this repository, and type the command **npm install**.

----

### Development
##### Scripts
+ **npm start:** Starts webpack dev server on localhost port 3005
+ **npm run server:** Starts the Application Server on localhost port 8080
+ **npm run clean-build:** Deletes the build folder
+ **npm run build:** Runs the **clean-build** script and then creates a new build folder
+ **npm test:** Runs the Jest test runner (currently ~75% total client side test coverage)

##### Workflow
###### development mode (mostly for developing the Client Side React Application)
- Run the command **npm start**
- A browser window should open at http://localhost:3005
- The react application should run
- As you you work on the application, changes are instantly propagated to the browser.

###### production mode
- Run the command **npm run build** (VERY IMPORTANT! You will not be able to test a production scenario if you don not run a build first.)
- Run the command **npm run server**
- Open a web browser window at http://localhost:8080

----

### Running The Simulation
- open a terminal and navigate to this repository's directory
- type the command **npm run build**
- once the build is completed type the command **npm run server**
- open up a web browser and navigate to http://localhost:8080
- bitcoin transactions will streamed to the browser interface for display

----

### Troubleshooting:
Kills all node processes: pkill -f node

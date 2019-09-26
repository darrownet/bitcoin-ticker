# Food Delivery Order Tracker
This Food Delivery Order Tracker displays a feed of orders streamed from a server in real-time. Each order contains; a unique uuid, order id, order name, order destination, the second the order was sent from the start of the server and the status of the order. The user may view these orders in various ways. It is composed of 2 software applications - a Node Web Server and a Client Side React Application.

----

### Node Web Server
The Node Web Server is written using the Express web application framework in conjunction with SocketIO. These two technologies were chosen for their simplicity as well as their adoption within the wider web development community. The uuid package is also implemented as to provide each order with a unique Id.

----

### Client Side React Application
The Client Side React Application uses Redux for state management and implements SocketIO-Client to communicate with the Node Web Server via Web Sockets. Redux was chosen for its vast adoption, implementation of Flux architecture, and simple implementation of a single immutable store representing state.  

The interface is comprised of a tabbed global navigation which allows the streamed orders to be view by...
- Active Orders (order status of CREATED, COOKED, DRIVER_RECEIVED)
- Delivered Orders (order status of DELIVERED)
- Cancelled Orders (order status of CANCELLED)
- Updated Orders (any order that has been modified on the client side)
- Order History (all orders streamed from the server)

Each of the above groupings can be further filtered by; Order Id, Order Destination, and Order Item Name.  

The orders grouped under the Active Orders tab can be further filtered bu Order Status (CREATED, COOKED, DRIVER_RECEIVED). When the COOKED status filter is selected the resulting order list can be further filtered by the last N seconds they were received from the server.

Selecting an order displays a detail window in which the order can be edited by selecting the edit icon. Once in edit mode the order item name, destination and all associated status events can be modified. In addition a map of the order destination can be viewed by selecting the 'Show Map' button. The icon on the map pin indicates the order status. Mapbox is the framework used to display the map.

----

### Developer Requirements
+ Node 10.15.3 or higher  
+ NPM 6.10.3 or higher  
+ Operating System: Mac OSX 10.10 or higher/Windows 7 or higher  

----

### Installation
Open a terminal, navigate to the root directory of this repository, and type the command **npm run install**.

----

### Development
##### Scripts
+ **npm start:** Starts webpack dev server on localhost port 3005 and the Application Server on localhost port 8080
+ **npm run server:** Starts the Application Server on localhost port 8080
+ **npm run clean-build:** Deletes the build folder
+ **npm run build:** Runs the **clean-build** script and then creates a new build folder
+ **npm test:** Runs the Jest test runner (currently ~70% total client side test coverage)

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
- When making/saving changes to server.js the server should restart automatically

----

### Running The Simulation
- open a terminal and navigate to this repository's directory
- type the command **npm run build**
- once the build is completed type the command **npm run server**
- open up a web browser and navigate to http://localhost:8080
- the orders will streamed to the browser interface and will be available for interaction
- the state of the orders persist on the server so refreshing the browser will not restart the simulation
- to restart the simulation, quit the server in the terminal window (control + c), type the command **npm run server** and refresh the browser

----

### Troubleshooting:
Kills all node processes: pkill -f node  

When working in development mode on the Client Side React Application and the Node Web Server at the same time, the data may, under rare circumstances, appear duplicated. Simply refresh your browser and the data displayed in the browser will represent what has streamed from the server.

----

##### Font Awesome Icon Attribution
This application uses graphics designed by Font Awesome (https://fontawesome.com). No changes were made to any of the icons used. These icons are made available for free by Font Awesome under a Creative Commons license which can be viewed here - https://fontawesome.com/license/free.

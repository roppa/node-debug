#Debugging with [node inspector](https://github.com/node-inspector/node-inspector)

Follow [the instructions on Nodejitsu](https://docs.nodejitsu.com/articles/getting-started/how-to-debug-nodejs-applications) for more detailed instructions.

##Overview

Install [node inspector](https://github.com/node-inspector/node-inspector) globally:

```
npm install node-inspector -g
```

Run your app in debug mode using the ```--debug``` flag:

```
node --debug index.js
```

Run the inspector in a new terminal specifying the port of your app:

```
node-inspector --web-port=8080
```

The port is whatever port you are running your app on, the example above is 8080.

Visit the debugger app by visiting ```http://127.0.0.1:8080/```
# ReactJS Facebook messenger

The goal of this exercise is to learn how to use Redux in a React app.

## To get started

### Step 1

If you haven't already set up your project, head here and follow the instructions https://github.com/leanjscom/fb-messenger/blob/master/README.md


### Step 2
```sh
 git checkout redux
 ```

### Step 3
```sh
 npm i
 ```

## Exercise

1) Create a logger middleware to log in the console every action that is dispatched

2) Thunk middleware:
	1. `git checkout advanced-redux-part2`
	2. When you run `yarn start` you'll get the following error: "Actions must be plain objects. Use custom middleware for async actions." To fix it you must create a thunk middleware in store/index.js.
	3. When your thunk middleware works you should see the list of Threads on http://localhost:300X/messages

3) Refactor the logger and think middlewares:
	1. `git checkout advanced-redux-part3`
	2. Refactor your logger and thunk middleware so you can use them along with `{ applyMiddleware } from 'redux'` in the createStore function. Documentation [https://redux.js.org/api/applymiddleware](https://redux.js.org/api/applymiddleware).

4) In configureStore.dev.js, replace the addLoggerMiddleware and addPromiseSupportToDispatch that you've created with the ones in npm: `redux-logger` and `redux-thunk`. Note, we already did `yarn add redux-logger` and `yarn add redux-thunk`.

5) Using thunk:
	1. `git checkout advanced-redux-part5`
	2. Add loading indicators to the conversation component by implementing the fetchConversation action creator in /actions/conversation.js

6) Selectors:
	1. `git checkout advanced-redux-part6`
	2. Create a simple selector in the conversation reducer and use it in the ConversationContainer
	3. Replace your selector in the conversation reducer with reselect

### Bonus

## Links

- [https://egghead.io/courses/building-react-applications-with-idiomatic-redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).

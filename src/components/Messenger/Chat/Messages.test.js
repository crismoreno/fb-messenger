import React from "react";
import { shallow, mount } from "enzyme";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import waitForExpect from "wait-for-expect";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, wait } from "@testing-library/react";

import { configureStore } from "../../../store";
import ComposedMessages, { Messages, MessageBox, Message } from "./Messages";

const Root = ({ children }) => {
  const store = configureStore();
  return <Provider store={store}>{children}</Provider>;
};

describe("<Messages />", () => {
  it(`should send a message (unit test)`, async () => {
    // 1. shallow the <Messages /> component
    // You can use console.log(wrapper.debug()) to console.log the component that you are testing
    // 2  Mock the api. Hint, the api functions are passed as a defaultProp (look at the bottom of Messages.js),
    // you can override that prop by doing <Messages api={my_mocked_api_object} />
    // 3. Find the button -> you have an example here http://airbnb.io/enzyme/#shallow-rendering
    // 4. Click on the button -> you have an example here http://airbnb.io/enzyme/#shallow-rendering
    // 5. Assert the 'message was sent' ->
    //      You can use toHaveBeenCalled on the my_mocked_api_object you passed.
    //      toHaveBeenCalled needs a mock function https://jestjs.io/docs/en/mock-functions, is your sendMessage a mock?
    //      You have an example here http://airbnb.io/enzyme/#shallow-rendering heads-up!
    //      Enzyme expectations are not camel case,
    //      Jest expectations are camel case (for when you copy&paste :)
    // Final questions:
    // - Is this black-box testing or white-box testing?
    // - If I remove Redux from my application and put all the state in React, do I need to update this test?
    // - What's your level of confidence that the user will be able to send a message?
  });

  it(`should send a message (integration test with Enzyme)`, async () => {
    // 1. shallow or mount the <Messages /> component ?
    //    A) which component, Messages or ComposedMessages?
    //    B) If you mount the component then all the children are rendered. Hint: you need to provide a store.
    // 2  Mock the api. Hint, the api functions are passed as a defaultProp (look at the bottom of Messages.js),
    // you can override that prop by doing <Messages api={my_mocked_api_object} />
    // 3. Add some text to the input
    // Hint: wrapper.find(MessageBox).props().onChange({ target: { value: 'hi!' }})
    // 4. Find the button -> you have an example here http://airbnb.io/enzyme/#shallow-rendering
    // 5. Click on the button -> you have an example here http://airbnb.io/enzyme/#shallow-rendering
    // Heads-up! you need to use await on the click button. Or even better use https://www.npmjs.com/package/wait-for-expect
    // 6. You need to update the rendered component using http://airbnb.io/enzyme/docs/api/ShallowWrapper/update.html
    // 7. Assert the 'message was sent' -> you can just validate the message you sent is on the Messages list
    // Final questions:
    // - Is this black-box testing or white-box testing?
    // - If I remove Redux from my application and put all the state in React, do I need to update this test?
    // - What's your level of confidence that the user will be able to send a message?
  });

  it(`should send a message (integration test with React Testing Library)`, async () => {
    const api = {
      sendMessage: jest.fn(message => Promise.resolve(message))
    };

    // TODO. Replace the following h1 with the component/s you are testing
    // Hint: It's very (very very) similar to what you did in the previous integration test
    const { queryAllByTestId, getByText, getByPlaceholderText } = render(
      <h1>Replace this h1 with the component/s you are testing</h1>
    );

    // TODO. It expects to have zero messages in the chat
    // Hint: You might need to add something to the Message component to facilitate this

    // TODO. Fire an on change event on the input message with the text "Hi!"
    // Hint: You might want to use the placeholder to find the input

    // TODO fire the click event on the send message button
    // https://testing-library.com/docs/dom-testing-library/api-events#fireevent-eventname
    // Question: What do you think is the best way to find the UI element that executes the send message action?

    // https://testing-library.com/docs/dom-testing-library/api-async#wait
    await wait(() => {
      // TODO. Write the following expectations:
      // 1) It expects to have 1 message in the chat
      // 2) It expects the last message on the chat to be "Hi!"
      //    Hint: You might want to use the '(some component).toHaveTextContent(some text)' to facilitate this
      //          .toHaveTextContent() comes from jest-dom's assertions -> import "@testing-library/jest-dom/extend-expect";
    });
  });
});
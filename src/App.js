import React, { useState } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/pages/shared/Layout';
import Dashboard from './components/pages/dashboard/Dashboard';
import CardCreate from './components/pages/cardCreate/CardCreate';
import Profile from './components/pages/userProfile/Profile';
import TransactionHistory from './components/pages/transactionHistory/TransactionHistory';
import Home from './components/pages/home/Home';
import GetStarted from "./components/pages/getStarted/GetStarted";
import Register from "./components/pages/getStarted/Register";
import Login from "./components/pages/getStarted/Login";


import { PAGE_DASHBOARD, PAGE_CREATE_CARD, PAGE_CARD, PAGE_USER_PROFILE, PAGE_TRANSACTIONS_HISTORY, BASE, PAGE_HOME, PAGE_REGISTER, PAGE_LOGIN } from './assets/constants/appConstants';


const mockCards = [
  { id: 1, type: "mastercard", cardNumber: 321321, cardHolderName: "Bojan", exparationDate: Date.now(), cvv: 255 },
  { id: 2, type: "visa", cardNumber: 555321, cardHolderName: "Marko", exparationDate: Date.now(), cvv: 256 },
  { id: 3, type: "mastercard", cardNumber: 666321, cardHolderName: "Pera", exparationDate: Date.now(), cvv: 266 },
  { id: 4, type: "revolut", cardNumber: 777321, cardHolderName: "Djole", exparationDate: Date.now(), cvv: 235 },
  { id: 6, type: "visa", cardNumber: 321888, cardHolderName: "Zuga", exparationDate: Date.now(), cvv: 271 },
  { id: 7, type: "visa", cardNumber: 321888, cardHolderName: "Miljan", exparationDate: Date.now(), cvv: 272 },
  // { id: 8, type: "visa", cardNumber: 321888, cardHolderName: "Miljan", exparationDate: Date.now(), cvv: 273 },
  // { id: 9, type: "visa", cardNumber: 321888, cardHolderName: "Miljan", exparationDate: Date.now(), cvv: 274 },
  // { id: 10, type: "visa", cardNumber: 321888, cardHolderName: "Miljan", exparationDate: Date.now(), cvv: 275 },
  // { id: 11, type: "visa", cardNumber: 321888, cardHolderName: "Miljan", exparationDate: Date.now(), cvv: 276 },
  // { id: 12, type: "visa", cardNumber: 321888, cardHolderName: "Miljan", exparationDate: Date.now(), cvv: 277 },
  // { id: 13, type: "visa", cardNumber: 321888, cardHolderName: "Miljan", exparationDate: Date.now(), cvv: 278 },
  // { id: 14, type: "visa", cardNumber: 321888, cardHolderName: "Miljan", exparationDate: Date.now(), cvv: 279 }

]

const getRandomId = () => { // TO DO: move in func file
  return Math.floor(Math.random() * 10000);
}

// const loggedIn = () => {
//   const user = JSON.parse(sessionStorage.getItem('loggedInUser'));
//   return user !== null && user !== undefined && user.id
// }

// function requireAuth(nextState, replace) {
//   console.log("loggedIn", loggedIn());
//   if (!loggedIn()) {
//     replace({
//       pathname: `/${PAGE_LOGIN}`
//     })
//   }
// }

const App = () => {
  const [cards, setCards] = useState(mockCards)

  const handleDeleteCard = id => {
    setCards(cards.filter(r => r.id !== id))
  }

  const handleCreateCard = newCard => {
    const newId = getRandomId();
    setCards([...cards, { ...newCard, id: newId }])
  }

  const isLoggedIn = () => {
    const user = JSON.parse(sessionStorage.getItem('loggedInUser'));
    console.log("loggedIn", user !== null && user !== undefined && user.id);

    return user !== null && user !== undefined && user.id
  }

  // const requireAuth = (nextState, replace) => {
  //   console.log("loggedIn", loggedIn());
  //   if (!loggedIn()) {
  //     replace({
  //       pathname: `/${PAGE_LOGIN}`
  //     })
  //   }
  // }

  return (
    <Layout>
      <Switch>
        <Route exact path={`/`}>
          <GetStarted />
        </Route>
        <Route path={`/${PAGE_REGISTER}`}>
          <Register />
        </Route>
        <Route path={`/${PAGE_LOGIN}`}>
          <Login />
        </Route>
        <Route path={`/${PAGE_CARD}`} render={() => (
          !isLoggedIn() ? (
            <Redirect to={`/${PAGE_LOGIN}`} />
          ) : (
              <Dashboard onDelete={handleDeleteCard} cards={cards} />
            )
        )} />

        <Route path={`/${PAGE_DASHBOARD}`} render={() => (
          !isLoggedIn() ? (
            <Redirect to={`/${PAGE_LOGIN}`} />
          ) : (
              <Dashboard />
            )
        )} />

        <Route path={`/${PAGE_CREATE_CARD}/:type`} render={() => (
          !isLoggedIn() ? (
            <Redirect to={`/${PAGE_LOGIN}`} />
          ) : (
              <CardCreate onCreate={handleCreateCard} />
            )
        )} />

        <Route path={`/${PAGE_USER_PROFILE}`} render={() => (
          !isLoggedIn() ? (
            <Redirect to={`/${PAGE_LOGIN}`} />
          ) : (
              <Profile />
            )
        )} />

        <Route path={`/${PAGE_TRANSACTIONS_HISTORY}`} render={() => (
          !isLoggedIn() ? (
            <Redirect to={`/${PAGE_LOGIN}`} />
          ) : (
              <TransactionHistory />
            )
        )} />

      </Switch>
      <Route path={`/${PAGE_HOME}`} render={() => (
        !isLoggedIn() ? (
          <Redirect to={`/${PAGE_LOGIN}`} />
        ) : (
            <Home />
          )
      )} />

    </Layout >
  );
}

export default App;

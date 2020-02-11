import React, { useState } from 'react';

import { Switch, Route } from 'react-router-dom';

import Layout from './components/pages/shared/Layout';
import Dashboard from './components/pages/dashboard/Dashboard';
import CardCreate from './components/pages/cardCreate/CardCreate';
import Profile from './components/pages/userProfile/Profile';
import TransactionHistory from './components/pages/transactionHistory/TransactionHistory';
import Home from './components/pages/home/Home';
import GetStarted from "./components/pages/getStarted/GetStarted";

import { PAGE_DASHBOARD, PAGE_CREATE_CARD, PAGE_CARD, PAGE_USER_PROFILE, PAGE_TRANSACTIONS_HISTORY, BASE, PAGE_HOME, PAGE_REGISTER, PAGE_LOGIN } from './assets/constants/appConstants';


const mockCards = [
  { id: 1, type: "mastercard", cardNumber: 321321, cardHolderName: "Bojan", exparationDate: Date.now(), cvv: 255 },
  { id: 2, type: "visa", cardNumber: 555321, cardHolderName: "Marko", exparationDate: Date.now(), cvv: 256 },
  { id: 3, type: "mastercard", cardNumber: 666321, cardHolderName: "Pera", exparationDate: Date.now(), cvv: 266 },
  { id: 4, type: "revolut", cardNumber: 777321, cardHolderName: "Djole", exparationDate: Date.now(), cvv: 235 },
  // { id: 6, type: "visa", cardNumber: 321888, cardHolderName: "Miljan", exparationDate: Date.now(), cvv: 271 },
  // { id: 7, type: "visa", cardNumber: 321888, cardHolderName: "Miljan", exparationDate: Date.now(), cvv: 272 },
  // { id: 8, type: "visa", cardNumber: 321888, cardHolderName: "Miljan", exparationDate: Date.now(), cvv: 273 },
  // { id: 9, type: "visa", cardNumber: 321888, cardHolderName: "Miljan", exparationDate: Date.now(), cvv: 274 },
  // { id: 10, type: "visa", cardNumber: 321888, cardHolderName: "Miljan", exparationDate: Date.now(), cvv: 275 },
  // { id: 11, type: "visa", cardNumber: 321888, cardHolderName: "Miljan", exparationDate: Date.now(), cvv: 276 },
  // { id: 12, type: "visa", cardNumber: 321888, cardHolderName: "Miljan", exparationDate: Date.now(), cvv: 277 },
  // { id: 13, type: "visa", cardNumber: 321888, cardHolderName: "Miljan", exparationDate: Date.now(), cvv: 278 },
  // { id: 14, type: "visa", cardNumber: 321888, cardHolderName: "Miljan", exparationDate: Date.now(), cvv: 279 }

]

const getRandomId = () => {
  return Math.floor(Math.random() * 10000);
}

const App = () => {
  const [cards, setCards] = useState(mockCards)

  const handleDeleteCard = id => {
    setCards(cards.filter(r => r.id !== id))
  }

  const handleCreateCard = newCard => {
    const newId = getRandomId();
    console.log("newId", newId);
    console.log("newCard", newCard);
    setCards([...cards, { ...newCard, id: newId }])
  }

  return (
    <Layout>
      <Switch>
        <Route exact path={`/${BASE}/`}>
          <GetStarted />
        </Route>
        <Route path={`/${PAGE_REGISTER}`}>
          <Home />
        </Route>
        <Route path={`/${PAGE_LOGIN}`}>
          <Home />
        </Route>
        <Route path={`/${PAGE_CARD}`}>
          <Dashboard onDelete={handleDeleteCard} cards={cards} />
        </Route>
        <Route path={`/${PAGE_DASHBOARD}`}>
          <Dashboard />
        </Route>
        <Route path={`/${PAGE_CREATE_CARD}/:type`}>
          <CardCreate onCreate={handleCreateCard} />
        </Route>
        <Route path={`/${PAGE_USER_PROFILE}`}>
          <Profile />
        </Route>
        <Route path={`/${PAGE_TRANSACTIONS_HISTORY}`}>
          <TransactionHistory />
        </Route>
      </Switch>
      <Route path={`/${PAGE_HOME}`}>
        <Home />
      </Route>
    </Layout >
  );
}

export default App;

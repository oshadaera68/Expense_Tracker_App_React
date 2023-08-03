import React from 'react';
import Header from './components/Header.js';
import Balance from './components/Balance.js';
import IncomeExpenses from './components/incomeExpenses.js'
import TransactionList from './components/TransactionList.js';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState.js';

import './App.css';

export default function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}
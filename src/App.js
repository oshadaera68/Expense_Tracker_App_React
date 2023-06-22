import React from 'react';
import Header from './components/Header.js';
import Balance from './components/Balance.js';
import IncomeExpenses from './components/incomeExpenses.js'
import TransactionList from './components/TransactionList.js';
import AddTransaction from './components/AddTransaction';

import './App.css';

export default function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}
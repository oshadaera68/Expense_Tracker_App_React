import React from 'react'

function TransactionList() {
    return (
        <>
            <h3>History</h3>
            <ul id="list" class="list">
                <li className="minus">
                    Cash <span>-$400</span><button class="delete-btn">x</button>
                </li>
            </ul>
        </>
    )
}

export default TransactionList

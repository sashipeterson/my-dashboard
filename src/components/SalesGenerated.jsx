import { mockTransactions } from '../data2/mockData.js'

export default function SalesGenerated() {
    const totalSales = mockTransactions.reduce((accumulator, transaction) => {
        return accumulator + parseFloat(transaction.cost);
    }, 0);

    return (
        <div>
            <p>${totalSales.toFixed(2)}</p>
        </div>
    );
}
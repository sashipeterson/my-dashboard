import { mockTransactions } from '../data2/mockData.js'

export default function NewClients () {

    const newClients = new Set(mockTransactions.map(transaction => transaction.user)).size;

    return (
        <div>
        {newClients}
        </div>
    );

}
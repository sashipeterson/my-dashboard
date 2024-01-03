import { mockTransactions } from '../data/mockData.js'

export default function NewClients () {

    const newClients = new Set(mockTransactions.map(transaction => transaction.user)).size;

    return (
        <div>
        {newClients}
        </div>
    );

}
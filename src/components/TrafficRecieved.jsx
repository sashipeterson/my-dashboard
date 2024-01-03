import { mockTransactions } from '../data/mockData.js'

export default function TrafficRecieved () {
    const transactionCount = mockTransactions.length

    return (
        <>
        
        <p>{transactionCount}</p>

        </>
    )
}
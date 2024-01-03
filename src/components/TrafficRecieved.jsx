import { mockTransactions } from '../data2/mockData.js'

export default function TrafficRecieved () {
    const transactionCount = mockTransactions.length

    return (
        <>
        
        <p>{transactionCount}</p>

        </>
    )
}
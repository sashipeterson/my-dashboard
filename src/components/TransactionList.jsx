import { mockTransactions } from '../data/mockData.js'
import Grid from '@mui/material/Grid';

export default function TransactionList() {
    return (
        <>
            <div>
                <h3>Transaction Details</h3>
                <Grid container spacing={2}>
                    {mockTransactions.map((transaction) => (
                        <Grid item xs={12} key={transaction.txtId}>
                            <div class="recenttransactions">
                            <Grid container spacing={1}>
                                <Grid item xs={4}>
                                    <p>User: {transaction.user}</p>
                                </Grid>

                                <Grid item xs={4}>
                                    <p>Date: {transaction.date}</p>
                                </Grid>

                                <Grid item xs={4}>
                                    <p>Cost: ${transaction.cost}</p>
                                </Grid>
                            </Grid>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    );
}
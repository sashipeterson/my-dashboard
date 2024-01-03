import Grid from '@mui/material/Grid';

import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import TrafficIcon from '@mui/icons-material/Traffic';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';

import TransactionList from './TransactionList';
import SalesGenrated from './SalesGenerated';
import TrafficRecieved from './TrafficRecieved';
import NewClients from './NewClients';

import '../App.css'

export default function MainGrid() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div style={{ padding: '10px', textAlign: 'left', marginTop: '50px' }}>
            <WbSunnyOutlinedIcon />
            <h2>Dashboard</h2>

          </div>
        </Grid>

        <Grid item xs={4}>
          <div style={{ backgroundColor: '#E8E8E8', padding: '10px' }}>
            <PointOfSaleIcon />
            <p>Sales Generated</p>
            <TrafficRecieved />
          </div>
        </Grid>

        <Grid item xs={4}>
          <div style={{ backgroundColor: '#E8E8E8', padding: '10px' }}>
            <PersonAddAlt1Icon />
            <p>New Clients</p>
            <NewClients />
          </div>
        </Grid>

        <Grid item xs={4}>
          <div style={{ backgroundColor: '#E8E8E8', padding: '10px' }}>
            <TrafficIcon />
            <p>Traffic Recieved</p>
            <TrafficRecieved />
          </div>
        </Grid>

        <Grid item xs={6}>
          <div style={{ backgroundColor: '#E8E8E8', padding: '10px' }}>
            <p>Revenue Generated</p>
            <SalesGenrated />
          </div>
        </Grid>

        <Grid item xs={6}>
          <div style={{ backgroundColor: '#E8E8E8', padding: '10px', maxHeight: '300px', overflowY: 'auto'}}>
            <h2>Recent Transactions</h2>
            <TransactionList />
            </div>
        </Grid>

      </Grid>
    </>
  )
}
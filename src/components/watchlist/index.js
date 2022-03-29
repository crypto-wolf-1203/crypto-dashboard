import { Tab } from 'bootstrap';
import { useState } from 'react';
import { Button, Card, Table, Tabs } from 'react-bootstrap';
import { Info } from '../icons';
import './index.scss';

const WatchList = () => {
  const [key, setKey] = useState('watch');
  return (
    <div className='watchlist-container pb-4'>
      <Tabs
        id='watch-tab'
        activeKey={key}
        onSelect={(key) => setKey(key)}
        className='watchlist'
      >
        <Tab eventKey='watch' title='WATCHLIST'>
          <Card>
            <h5>My Watchlist - Portfolio</h5>
            <Table className='default-table' responsive>
              <thead>
                <tr>
                  <th>Alert</th>
                  <th>Token</th>
                  <th className='text-end'>Price</th>
                  <th className='text-end'>Balance <Info className='i-info' width='16px' height='16px' /></th>
                  <th className='text-center'>Address</th>
                  <th className='text-end'>Control</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={6} className='text-center pt-5 pb-4'>
                    <h6>Your Watchlist - Portfolio is empty</h6>
                    <p>Please search and add a token to get started.</p>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Tab>
        <Tab eventKey='wallet' title='WALLET'>
          <Card className='text-center'>
            <div className='pt-5 pb-4'>
              <p>Connect your wallet to see your tokens.</p>
              <Button className='token-connect'>CONNECT</Button>
            </div>
          </Card>
        </Tab>
        <Tab eventKey='history' title='HISTORY'>
          <Card className='text-center'>
            <p className='pt-5 pb-4 empty-text'>Empty history</p>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}

export default WatchList;

import { Button, Card, Col, Container, Form, FormControl, InputGroup, Row, Table } from 'react-bootstrap';
import { Search, Down } from '../../components/icons';

import './index.scss';
import { tokens } from './dummy.js'
import { minifyAddress, numberWithCommas } from '../../plugins';
import { useNavigate } from 'react-router-dom';
import WatchList from '../../components/watchlist';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <Container fluid className='layout'>
      <Row className='dashboard-container'>
        <Col>
          <Card>
            <div className='search-box'>
              <h5>Price chart (BSC)</h5>
              <Form onSubmit={(event) => handleSubmit(event)}>
                <InputGroup className='mb-4'>
                  <FormControl
                    placeholder='Enter a token name / address (BSC)'
                  />
                  <Button variant='link' className='btn-search'><Search width='24px' height='24px' /></Button>
                </InputGroup>
              </Form>
            </div>
            <div className='search-result'>
              <h5>Top tokens by 24h volume <div className='living'></div></h5>
              <Table className='token-table' responsive>
                <thead>
                  <tr>
                    <th>Token</th>
                    <th className='text-center'>Network</th>
                    <th className='text-end'>Volume, 24h</th>
                    <th className='text-end'>Liquidity</th>
                    <th className='text-end pr-0'>Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {tokens && tokens.data.map((token, index) => (
                    <tr key={index}>
                      <td>
                        <div className='token-link' onClick={() => {navigate(`token/${token.address}`)}}>
                          <img src={token.logoURI} alt={token.symbol} className='token-logo' />
                          <div>
                            <p>{token.name}</p>
                            <span>{minifyAddress(token.address)}</span>
                          </div>
                        </div>
                      </td>
                      <td className='text-center'>
                        <span className='network'>{token.network}</span>
                      </td>
                      <td className='text-end'>${numberWithCommas(Math.round(token.volume24hUSD))}</td>
                      <td className='text-end'>${numberWithCommas(Math.round(token.liquidityUSD))}</td>
                      <td className='text-end pr-0'>${numberWithCommas((Math.round(token.priceUSD * 100) / 100).toFixed(2))}</td>
                      <td className='last-cell'>{token.priceUSDChange24h > 0 ? (
                        <span className='price-up'>
                          <Down width='12px' height='12px' />{(Math.round(token.priceUSDChange24h * 10000) / 100).toFixed(2)}%
                        </span>
                        ) : (
                        <span className='price-down'>
                          <Down width='12px' height='12px' />{(Math.round(token.priceUSDChange24h * 10000) / 100).toFixed(2).replace('-', '')}%
                        </span>
                      )}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card>
        </Col>
        <Col>
         <WatchList />
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;

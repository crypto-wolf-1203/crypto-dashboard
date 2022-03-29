import { Button, Card, Col, Container, Form, FormControl, InputGroup, Row, Table } from 'react-bootstrap';
import { Search, Down, Rise, Star, Alert, Reload } from '../../components/icons';

import './index.scss';
import { swap, token } from './dummy.js'
import { numberWithCommas, convertTime, removeHttp, minifyAddress } from '../../plugins';
import { TVChartContainer } from '../../components/tradingview';
import { useEffect, useState } from 'react';
import WatchList from '../../components/watchlist';

const Token = () => {
  const etherscan = 'data:image/png;base64,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'
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setNow(new Date());
    }, 1000);
    var configuration = {
      from: 'USDC',
      to: 'BNB',
      fromChain: 'BSC',
      toChain: 'BSC',
      amount: 1,
      iframe: 'flex',
      hideSelectionFrom: false,
      hideSelectionTo: false,
      theme: 'light',
      background: '#FFFFFF',
      injectTokens: {},
      slippagePercent: {
          instantTrades: 2,
          crossChain: 5
      },
      fee: 0.075,
      feeTarget: '0xC4680dd4CFEBF00fAB779c98020fEf247802213F',
      promoCode: 'w9uX8jkP'
    }

    // prevent accidental changes to the object, for example, when re-creating a widget for another theme
    Object.freeze(configuration);

    // create widget
    // eslint-disable-next-line no-undef
    rubicWidget.init(configuration);
  }, [])
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <Container fluid className='layout'>
      <Row className='token-container'>
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
              <div className='token-info'>
                <div className='token-title token-grid'>
                  <div className='token-img'>
                    {token && <img src={token.image.large} alt={token.name} />}
                  </div>
                  <span className='token-name'>Wrapped Ether (WETH)</span>
                  <span className='token-eth'>ETH</span>
                  <div className='living'></div>
                </div>
                <div className='token-price token-grid text-end'>
                  <span className='token-usd'>$3,101.8917</span>
                  <span className='token-rise'><Rise height='24px' width='24px' />3.84%</span>
                </div>
              </div>
              <div className='token-info pt-4'>
                <div className='token-grid'>
                  <p className='token-contact'><span>Website</span><Button className='token-link' href={token.links.homepage[0]} target='_blank'>{removeHttp(token.links.homepage[0])}</Button></p>
                  <p className='token-contact'><span>Explorer</span><Button className='token-link' href={token.links.blockchain_site[0]} target='_blank'><img src={etherscan} alt='etherscan' />etherscan</Button></p>
                  <p className='token-contact'><span>Contract</span><Button className='token-link'>{minifyAddress('0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2')}</Button></p>
                </div>
                <div className='token-grid d-flex flex-column align-items-end'>
                  <Button className='token-cta add-to'><Star /><span>ADD TO WATCHLIST</span></Button>
                  <Button className='token-cta add-alert'><Alert /><span>ADD ALERT</span></Button>
                </div>
              </div>
              <div className='token-details my-4'>
                <p>Total Supply: <strong>6,522,767</strong></p>
                <p>Market Cap: <strong>$20,441,347,411.32</strong></p>
                <p>Liquidity: <strong>$3,757,548,579.37</strong></p>
              </div>
              {/* <p className='clock text-end'>{now.toUTCString()}</p> */}
              <h5>Swap (beta)</h5>
              <div id="rubic-widget-root" className='pb-4'></div>
              <h6>Trading History<div className='living'></div></h6>
              <div className='swap-display'>
                <Table className='swap-table' responsive>
                  <thead>
                    <tr>
                      <th></th>
                      <th className='text-end'>Tokens</th>
                      <th className='text-end'>Price</th>
                      <th className='text-end'>Time</th>
                      <th className='text-center'>Tx</th>
                    </tr>
                  </thead>
                  <tbody>
                    {swap && swap.data.map((transaction, index) => (
                      <tr key={index} className={transaction.amount1Out > 0 ? 'price-up' : 'price-down'}>
                        <td>Buy</td>
                        <td className='text-end'>{transaction.amount1Out > 0 ? numberWithCommas((Math.round(transaction.amount1Out * 1000) / 1000).toFixed(3)) : numberWithCommas((Math.round(transaction.amount1In * 1000) / 1000).toFixed(3))}</td>
                        <td className='text-end'>${numberWithCommas((Math.round(transaction.amountUSD * 100) / 100).toFixed(2))}</td>
                        <td className='text-end'>{convertTime(transaction.timestamp)}</td>
                        <td className='text-end price-up'>{transaction.transactionAddress.substring(0, 6)}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </Card>
        </Col>
        <Col>
          <WatchList />
          <TVChartContainer symbol='0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2' />
        </Col>
      </Row>
    </Container>
  );
}

export default Token;

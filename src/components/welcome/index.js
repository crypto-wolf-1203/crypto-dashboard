import { Card } from 'react-bootstrap';
import { Dot, Information } from '../icons';
import './index.scss'

const Welcome = () => {
  return (
    <Card className='welcome-container mb-4'>
      <div className='welcome-icon'>
        <Information width='24px' height='24px' />
      </div>
      <div className='welcome-details'>
        <h4>Welcome to <strong>meo.tools</strong></h4>
        <h2>The ultimate combination between MetaMask, PooCoin, PancakeSwap, and Alert tool to only one platform including desktop, mobile, and app version.</h2>
        <h3>Features:</h3>
        <ul className='pl-0'>
          <li>Track your token Watchlist - Portfolio in real-time.</li>
          <li>
            Never miss an opportunity with token alerting.
            <ul>
              <li>A maximum of 10 tokens can be created for your Watchlist - Portfolio</li>
              <li>A maximum of 5 alerts can be created for a token.</li>
              <li>A maximum of 20 alerts can be created for all tokens.</li>
            </ul>
          </li>
        </ul>
        <div className='position-relative'>
          <Dot width='20px' height='24px' className='dot' />
          <p>A kindly notice that the current version has just supported alerting when you open the browser (may on a tab). Please see more at <a href='' target='_blank'>https://t.me/meo_tools/49</a></p>
        </div>
      </div>
    </Card>
  )
}

export default Welcome;

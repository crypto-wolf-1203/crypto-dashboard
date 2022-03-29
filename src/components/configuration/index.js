import { useState } from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';
import { Step, StepSuccess } from '../icons';
import './index.scss';

const Configuration = () => {
  const [active, setActive] = useState(true);
  const [step, setStep] = useState(1);

  return (
    <Card className='config-container mb-4'>
      <h5>Configuration</h5>
      <hr className={!active ? 'mb-0' : ''} />
      <Accordion defaultActiveKey={0}>
        <Accordion.Item eventKey={0}>
          <Accordion.Header onClick={() => {setActive(!active)}}>Alert via Telegram</Accordion.Header>
          <Accordion.Body>
            <div className='alert-container'>
              <div className='alert-step'>
                <div className='step-desc'>
                  <div className={`step-title ${step === 1 ? 'active' : ''}`}>
                    {step > 1 ? <StepSuccess /> : <Step number={1} />}
                    <span>Open the Meo.tools BOT</span>
                  </div>
                  <div className='step-info'>
                    {step === 1 && (
                      <>
                        <p className='step-text'>
                          Click on the link below to open Meo.tools BOT (you need to install Telegram and log in to your account)<br />
                          <a href='https://t.me/meotools_bot?start=2htEb6qYWnTvwenpukSb1g' target='_blank' rel="noreferrer">
                            https://t.me/meotools_bot?start=2htEb6qYWnTvwenpukSb1g
                          </a>
                        </p>
                        <div className='step-btn-group'>
                          <Button className='back' disabled>BACK</Button>
                          <Button className='next' onClick={() => {setStep(2)}}>NEXT</Button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className='step-blank' />
              </div>
              <div className='alert-step'>
                <div className='step-desc'>
                  <div className={`step-title ${step === 2 ? 'active' : ''}`}>
                    {step > 2 ? <StepSuccess /> : <Step number={2} />}
                    <span>Start Bot</span>
                  </div>
                  <div className='step-info'>
                  {step === 2 && (
                    <>
                      <p className='step-text'>
                        Click <strong>Start</strong> button on Telegram
                      </p>
                      <div className='step-btn-group'>
                        <Button className='back' onClick={() => {setStep(1)}}>BACK</Button>
                        <Button className='next' onClick={() => {setStep(3)}}>NEXT</Button>
                      </div>
                    </>
                  )}
                  </div>
                </div>
                <div className='step-blank' />
              </div>
              <div className='alert-step'>
                <div className='step-desc'>
                  <div className={`step-title ${step === 3 ? 'active' : ''}`}>
                    {step > 3 ? <StepSuccess /> : <Step number={3} />}
                    <span>Connect to the Meo.tools BOT</span>
                  </div>
                  <div className='step-info'>
                    {step === 3 && (
                      <>
                        <p className='step-text'>
                          Click on the <strong>CONNECT</strong> button below to connect to the Meo.tools BOT
                        </p>
                        <div className='step-btn-group'>
                          <Button className='back' onClick={() => {setStep(2)}}>BACK</Button>
                          <Button className='next' onClick={() => {setStep(4)}}>CONNECT</Button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className='step-blank' />
              </div>
              <div className='alert-step'>
                <div className='step-desc'>
                  <div className={`step-title ${step === 4 ? 'active' : ''}`}>
                    {step > 4 ? <StepSuccess /> : <Step number={4} />}
                    <span>Send a test message</span>
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Card>
  );
}

export default Configuration;

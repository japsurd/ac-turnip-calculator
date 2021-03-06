import React, { useState } from 'react';
import Turnip from './icon/turnip.png';
import RottenTurnip from './icon/turnip_rotten.png';
import './App.css';
import TurnipCalculator from './component/TurnipCalculator';
import GitHubCorner from './component/vendor/GitHubCorner';
import TipDisplay from './component/TipDisplay';

import { css } from 'emotion';

function App() {
  const [turnipImgSrc, setTurnipImgSrc] = useState(Turnip);
  const [turnipImgAlt, setTurnipImgAlt] = useState('Turnip');
  const [buyPrice, setBuyPrice] = useState(0);
  const [tip, setTip] = useState(0);

  function onPriceCalculated(
    buyPrice: number,
    turnipPrice: number,
    numTurnips: number,
  ) {
    if (turnipPrice > 0 && turnipPrice < 100) {
      setTurnipImgSrc(RottenTurnip);
      setTurnipImgAlt('Rotten Turnip');
    } else {
      setTurnipImgSrc(Turnip);
      setTurnipImgAlt('Turnip');
    }
    setBuyPrice(buyPrice);
  }

  function onTipCalculated(tip: number) {
    setTip(tip);
  }

  return (
    <div
      className="App"
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <GitHubCorner />
      <header className="App-header">
        <img src={turnipImgSrc} className="App-logo" alt={turnipImgAlt} />
      </header>
      <h1>Animal Crossing Turnip Calculator</h1>
      <div
        className="content"
        style={{
          flexGrow: 1,
        }}
      >
        <TurnipCalculator
          onPriceCalculated={onPriceCalculated}
          onTipCalculated={onTipCalculated}
        />
        {(() => {
          if (buyPrice > 0) {
            return (
              <>
                <label>
                  Buy Price will be: <b>{buyPrice}</b> bells
                </label>
                <br />
                <TipDisplay tip={tip} />
              </>
            );
          } else {
            return <></>;
          }
        })()}
      </div>
      <footer
        className={css`
          background-color: #f8eebc;
          font-size: 12px;
          padding: 10px;
        `}
      >
        <span>&copy; 2020 James Cote</span>
        <br />
        <span>
          All rights reserved. Animal Crossing and Nintendo are registered
          trademarks of Nintendo of America.
        </span>
      </footer>
    </div>
  );
}

export default App;

import React from 'react'
import "./coin.css"


function Coin(props) {
  var volume=props.volume
  var priceChange=props.priceChange
  var marketCap=props.marketcap
  return (
    <div className='coin-container'>
        <div className='coin-row'>
            <div className='coin'>
                <img src={props.image} alt='crypto' />
                <h1>{props.name}</h1>
                <p className='coin-symbol'>{props.symbol}</p>
            </div>
            <div className='coin-data'>
                <p className='coin-price'>₹{props.price}</p>
                <p className='coin-volume'>₹{volume.toLocaleString()}</p>
                {priceChange < 0 ? (
                  <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
                ) : (<p className='coin-percent green'>{priceChange.toFixed(2)}%</p>)}
                <p className='coin-marketcap'>
                  Mkt Cap: ₹ {marketCap.toLocaleString()}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Coin
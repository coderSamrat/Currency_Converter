import React, { usaState, useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo';
import InputBox from './components/InputBox';
function App() {
      const [amount, setAmount] = useState(0);
      const [from, setFrom] = useState('usd');
      const [to, setTo] = useState('inr');
      const [convertAmount, setConvertAmount] = useState(0);
      const currencyAmount = useCurrencyInfo(from);
      const options = Object.keys(currencyAmount);
      const swap = () => {
            setFrom(to);
            setTo(from);
            setConvertAmount(amount);
            setAmount(convertAmount);
      }
      const calculate = () => {
            setConvertAmount(amount * currencyAmount[to]);
      }
      return (
            <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" style={{background: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` , backgroundPosition: 'center' , backgroundSize: 'cover'}}>
                  <div className="w-full">
                        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 ">
                              <h1 className='text-3xl mb-4 text-center font-bold'>Currency Converter</h1>
                              <form onSubmit={(e) => {
                                    e.preventDefault(); 
                                    calculate();
                              }}>
                                    <div className="w-full mb-1">
                                          <InputBox label="From" amount={amount} currencyOptions={options} onCurrencyChange={(currency) => setAmount(amount)} selectCurrency= {from} onAmountChange={(amount) => setAmount(amount)} />
                                    </div>
                                    <div className="relative w-full h-0.5">
                                          <button type="button" className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5" onClick={swap}>Swap</button>
                                    </div>
                                    <div className="w-full mt-1 mb-4">
                                          <InputBox label="To" amount={convertAmount} currencyOptions={options} selectCurrency= {to} onCurrencyChange={(currency) => setAmount(currency)}/>
                                    </div>
                                    <button type="submit" className="w-full text-white px-4 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-violet-300 outline-none text-xl font-semibold select-none" onClick={calculate} >Convert {from.toUpperCase()} to {to.toUpperCase()} </button>
                              </form>
                        </div>
                  </div>
            </div>
      );
}
export default App

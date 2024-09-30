import React, { useState } from 'react';

function FinanceCalculator() {
  const [formValues, setFormValues] = useState({
    year: '',
    interest: '',
    price: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const calculate = (price, year, interest) => {
    const months = Number(year) * 12;
    const monthlyInterestRate = Number(interest) / 100 / 12;
    const principal = Number(price);
    
    if (monthlyInterestRate === 0) {
      return principal / months;
    }

    const monthlyPayment = (principal * monthlyInterestRate) / (1 - Math.pow((1 + monthlyInterestRate), -months));
    return monthlyPayment.toFixed(2); // Format to 2 decimal places
  };

  const [result, setResult] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    const { price, year, interest } = formValues;
    const payment = calculate(price, year, interest);
    setResult(`Monthly Payment: $${payment}`);
  };

  return (
    <form className='w-[600px] border border-gray-300 shadow-lg mt-10 p-6' onSubmit={handleSubmit}>
      <h1 className='text-2xl font-bold mb-4'>Finance Calculator</h1>
      <div className='grid grid-cols-2'>
        <div>
          <label htmlFor="price" className='block text-sm mb-1'>Price</label>
          <input className='border border-gray-300' type="text" id='price' name='price' value={formValues.price} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="interest" className='block text-sm mb-1'>Interest Rate (%)</label>
          <input className='border border-gray-300' type="text" name='interest' value={formValues.interest} onChange={handleChange} />
        </div>
        <div className='mt-4'>
          <label className='block text-sm mb-1' htmlFor="year">Payment Years</label>
          <input className='border border-gray-300' type="text" required name='year' value={formValues.year} onChange={handleChange} />
        </div>
      </div>
      <button type='submit' className='bg-indigo-900 rounded-lg px-4 py-1 text-white hover:text-black hover:bg-transparent transition mt-4'>Calculate</button>
      <p className='mt-4 font-semibold'>{result}</p>
    </form>
  );
}

export default FinanceCalculator;

import React from 'react';
import './AddressComponent.css'; // Import CSS file

const AddressComponent = ({ isGBAddress }) => {
  const [line1, setLine1] = React.useState('');
  const [line2, setLine2] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [postcode, setPostcode] = React.useState('');
  const [error, setError] = React.useState('');

  const validateGBPostcode = (postcode) => {
    const regex = /^[A-Za-z]{1,2}\d{1,2}[A-Za-z]?\s?\d[A-Za-z]{2}$/;
    return regex.test(postcode);
  };

  const validateFRPostcode = (postcode) => {
    const regex = /^\d{5,7}$/;
    return regex.test(postcode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!country.trim()) {
      setError('Country cannot be blank.');
      return;
    }
    if (!postcode.trim()) {
      setError('Postcode cannot be blank.');
      return;
    }
    if (isGBAddress) {
      if (!validateGBPostcode(postcode)) {
        setError('Invalid GB postcode format.');
        return;
      }
    } else {
      if (!validateFRPostcode(postcode)) {
        setError('Invalid FR postcode format.');
        return;
      }
    }
    // Here you can proceed with sending the address data to the server or other actions
    setError('');
    console.log('Address submitted:', { line1, line2, country, postcode });
  };

  return (
    <form className="address-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Line 1:</label>
        <input type="text" value={line1} onChange={(e) => setLine1(e.target.value)} />
      </div>
      {isGBAddress && (
        <div className="form-group">
          <label>Line 2:</label>
          <input type="text" value={line2} onChange={(e) => setLine2(e.target.value)} />
        </div>
      )}
      <div className="form-group">
        <label>Country:</label>
        <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Postcode:</label>
        <input type="text" value={postcode} onChange={(e) => setPostcode(e.target.value)} />
      </div>
      {error && <div className="error-message">{error}</div>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddressComponent;

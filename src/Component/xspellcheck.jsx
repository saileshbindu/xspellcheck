import React, { useState, useEffect } from 'react';

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

const XSpellCheck = () => {
  const [inputText, setInputText] = useState('');
  const [suggestion, setSuggestion] = useState('');

  useEffect(() => {
    checkSpelling(inputText);
  }, [inputText]);

  const checkSpelling = (text) => {
    const words = text.toLowerCase().split(' ');
    for (let word of words) {
      if (customDictionary.hasOwnProperty(word)) {
        setSuggestion(`Did you mean: ${customDictionary[word]}?`);
        return;
      }
    }
    setSuggestion('');
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '500px', margin: '20px auto' }}>
      <h1 style={{ textAlign: 'left', marginBottom: '20px' }}>Spell Check and Auto-Correction</h1>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text..."
        rows={5}
        style={{ 
          width: '100%', 
          padding: '10px', 
          marginBottom: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }}
      />
      {suggestion && (
        <p style={{ marginTop: '10px', fontWeight: 'normal', color:'black' }}>{suggestion}</p>
      )}
    </div>
  );
};

export default XSpellCheck;
import React, { useEffect, useState } from 'react';
import clsx from "clsx";

export default function Search({ onSearchSubmit, clearResults }) {

  const [term, setTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [icon, setIcon] = useState(true);


  // Update search term after 1 second of non-interaction
  useEffect(() => {
    debouncedTerm.length === 0 ? setIcon(false) : setIcon(true);
    const timer = setTimeout(() => setTerm(debouncedTerm));
    return () => clearTimeout(timer);
  }, [debouncedTerm]);

  // Search only if above 3 chars long
  useEffect(() => {
    if (term !== '' && term.length >= 3) {
      onSearchSubmit(term);
    } else {
      clearResults();
    }
  }, [term]);

  const onInputChange = (e) => {
    setDebouncedTerm(e.target.value);
  }

  const reset = () => {
    clearResults();
    setDebouncedTerm('');
  }

  const iconStyles = clsx({
    searchbar__icon: true,
    hide: icon
  })


  return (
    <div className='searchbar'>
      <div className={iconStyles}></div>
      <input
        id='search'
        placeholder=''
        type='text'
        spellCheck='false'
        autoCapitalize='none'
        autoCorrect='off'
        onChange={onInputChange}
        value={debouncedTerm} />
      {debouncedTerm && <button onClick={reset} className='searchbar__close'></button>}
    </div>
  )
}
import React, { useEffect, useState } from 'react';
import lorem from './data';
import { nanoid } from 'nanoid';

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setText(lorem.slice(0, parseInt(count)));
  };

  return (
    <main>
      <h2>tired of bored lorem ipsum? try this</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='num'>Paragraphs</label>
        <input
          type='number'
          name='num'
          id='num'
          value={count}
          min={1}
          step={1}
          max={8}
          onChange={(e) => setCount(e.target.value)}
        />

        <button>Generate</button>
      </form>
      <div className='text'>
        {text.map((el) => {
          return <p key={nanoid()}>{el}</p>;
        })}
      </div>
    </main>
  );
};

export default App;

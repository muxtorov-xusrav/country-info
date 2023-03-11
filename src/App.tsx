import { useState } from 'react';
import './App.css';
import HeadText from './component/HeadText';
import Input from './component/Input';
import MyCard from './component/MyCard';

const date = {
  code: 'UZ',
  name: 'Uzbekistan',
  native: "O'zbekiston",
  phone: '998',
  capital: 'Tashkent',
  currency: 'UZS',
  languages: [
    {
      name: 'Uzbek',
      native: 'Ўзбек',
    },
    {
      name: 'Russian',
      native: 'Русский',
    },
  ],
  continent: {
    name: 'Asia',
  },
  emoji: '🇺🇿',
  states: [],
};

export default () => {
  const [search, setSearch] = useState<string>('');
  return (
    <div className='container'>
      <HeadText text='Countries' type='h4' />
      <Input />
      <MyCard
        code={date.code}
        name={date.name}
        native={date.native}
        phone={date.phone}
        capital={date.capital}
        currency={date.currency}
        languages={date.languages}
        continent={date.continent}
        emoji={date.emoji}
        states={date.states}
      />
    </div>
  );
};

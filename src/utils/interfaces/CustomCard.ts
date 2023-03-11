interface Language {
  name: string;
  native: string;
}

interface State {
  name: string;
}

interface CustomCard {
  code: string;
  name: string;
  native: string;
  phone: string;
  capital: string;
  currency: string;
  languages: Language[];
  continent: {
    name: string;
  };
  emoji: string;
  states: State[];
}

export default CustomCard;

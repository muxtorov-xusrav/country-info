import { useMemo, useState } from 'react';
import { Box, Grid } from '@mui/material';
import { useQuery } from '@apollo/client';
import HeadText from '../../component/HeadText';
import Input from '../../component/Input';
import MyCard from '../../component/MyCard';
import { GET_ALL_COUNTRY } from './query';
import CustomCard from '../../utils/interfaces/CustomCard';

export default () => {
  const [search, setSearch] = useState<string>('');
  const { data, loading } = useQuery(GET_ALL_COUNTRY);

  const memoizedValue = useMemo(() => {
    let filtered;

    if (search !== '') {
      filtered = data?.countries.filter(
        (country: any) => country?.code === search.toUpperCase()
      );
    } else {
      filtered = data?.countries;
    }
    return filtered;
  }, [search, data]);

  if (loading) {
    return <div className='loader' />;
  }

  return (
    <div className='container'>
      <HeadText text='Countries' type='h4' />
      <Input setValue={setSearch} />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {data &&
            memoizedValue.map((item: CustomCard, ind: number) => {
              return (
                <Grid key={ind + 1} item xs={6} md={4} lg={3}>
                  <MyCard
                    code={item.code}
                    name={item.name}
                    native={item.native}
                    phone={item.phone}
                    capital={item.capital}
                    currency={item.currency}
                    languages={item.languages}
                    continent={item.continent}
                    emoji={item.emoji}
                    states={item.states}
                  />
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </div>
  );
};

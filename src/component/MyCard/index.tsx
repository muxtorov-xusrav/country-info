import Card from '@mui/material/Card';
import CustomCard from '../../utils/interfaces/CustomCard';
import { Box } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import SpatialAudioOffIcon from '@mui/icons-material/SpatialAudioOff';
import { Flag } from '../../utils/Flags/flags';

export default (props: CustomCard) => {
  return (
    <Card sx={{ border: '3px solid black', borderRadius: 5 }}>
      <Box sx={{ padding: '16px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ width: 70 }}>
              <img
                style={{ width: 60 }}
                alt={props?.emoji + 'flag'}
                src={`https://flagcdn.com/48x36/${Flag[props.emoji][0].slice(
                  -2
                )}.png`}
              />
            </Box>
            <Box>
              <span style={{ display: 'block', fontSize: 26 }}>
                {props?.name}
              </span>
              <span>{props?.capital}</span>
            </Box>
          </Box>
          <Box>{props?.continent.name}</Box>
        </Box>
        <Box sx={{ height: 20 }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <PhoneIcon />
            {props?.phone}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CurrencyExchangeIcon />
            {props?.currency}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SpatialAudioOffIcon />
            {props.languages.map((language) => language.native).join(', ')}
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

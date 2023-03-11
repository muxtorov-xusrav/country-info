import Typography from '@mui/material/Typography';

interface HeadTextProps {
  text: string;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export default ({ type, text }: HeadTextProps) => {
  return (
    <div>
      <Typography variant={type} gutterBottom>
        {text}
      </Typography>
    </div>
  );
};

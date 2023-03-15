interface Fnc {
  setValue: (e: string) => void;
}

export default ({ setValue }: Fnc) => {
  return (
    <div style={{ padding: '10px 0 20px 0' }}>
      <input
        onChange={(e) => setValue(e.target.value)}
        placeholder='Search by country code'
        style={{
          border: '3px solid black',
          fontSize: '16px',
          padding: '10px',
          width: '24%',
          textAlign: 'center',
        }}
      />
    </div>
  );
};

const yyyymmdd = (date) => {
  const x = new Date(date);
  const y = x.getFullYear().toString();
  const m = (x.getMonth() + 1);
  const d = x.getDate();
  return `${d < 10 ? `0${d}` : `${d}`}/${m < 10 ? `0${m}` : `${m}`}/${y}`;
};

export default yyyymmdd;

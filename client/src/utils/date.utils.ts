export const getTodayDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate();

  const dateQuery = `${year}-${month}-${day}`;
  return {
    dateQuery,
    year,
    month,
    day,
  };
};

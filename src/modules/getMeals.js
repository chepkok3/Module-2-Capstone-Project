const getMeals = async () => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood',
  );
  const responseGot = await response.json();
  return responseGot;
};

export default getMeals;

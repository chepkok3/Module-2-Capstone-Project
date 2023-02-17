const ItemsCounter = () => {
  const mealsEl = document.querySelectorAll('.meals-container > div');
  return mealsEl.length;
};

export default ItemsCounter;

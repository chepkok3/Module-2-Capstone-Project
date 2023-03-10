/**
 * @jest-environment jsdom
 */

import ItemCounter from '../counter/itemsCounter.js';

describe('ItemCounter', () => {
  let mealsContainer;

  beforeEach(() => {
    mealsContainer = document.createElement('div');
    mealsContainer.classList.add('meals-container');
    document.body.appendChild(mealsContainer);
  });

  afterEach(() => {
    mealsContainer.remove();
  });

  test('should count elements if .meals-container is present', () => {
    mealsContainer.innerHTML = '<div>meal1</div>';
    expect(ItemCounter()).toBe(1);

    mealsContainer.innerHTML = '<div>meal1</div><div>meal2</div>';
    expect(ItemCounter()).toBe(2);
  });

  test('should return 0 if .meals-container is not present', () => {
    mealsContainer.remove();
    expect(ItemCounter()).toBe(0);
  });
});

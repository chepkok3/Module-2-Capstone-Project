/**
 * @jest-environment jsdom
 */

import ItemCounter from '../counter/itemsCounter.js';

describe('ItemCounter', () => {
  let mealsSection;

  beforeEach(() => {
    mealsSection = document.createElement('div');
    mealsSection.classList.add('meals-section');
    document.body.appendChild(mealsSection);
  });

  afterEach(() => {
    mealsSection.remove();
  });

  test('should count elements if .meals-section is present', () => {
    mealsSection.innerHTML = '<div>meal1</div>';
    expect(ItemCounter()).toBe(1);

    mealsSection.innerHTML = '<div>meal1</div><div>meal2</div>';
    expect(ItemCounter()).toBe(2);
  });

  test('should return 0 if .meals-section is not present', () => {
    mealsSection.remove();
    expect(ItemCounter()).toBe(0);
  });
});

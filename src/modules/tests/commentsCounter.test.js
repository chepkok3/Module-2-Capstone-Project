/**
 * @jest-environment jsdom
 */

import commentsCounter from '../counter/commentCounter.js';

describe('commentsCounter', () => {
  test('counts elements when .user-comments is present', () => {
    document.body.innerHTML = "<div class='user-comments'> </div>";
    expect(commentsCounter()).toBe(0);

    document.body.innerHTML = '<div class="user-comments"><div>comment</div></div>';
    expect(commentsCounter()).toBe(1);
  });

  test('returns 0 when .user-comments is not present', () => {
    document.body.innerHTML = '';
    expect(commentsCounter()).toBe(0);
  });

  test('returns the number of comments', () => {
    const comments = [];
    const result = commentsCounter(comments);
    expect(result).toBe(0);
  });
});

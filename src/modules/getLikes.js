const API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const APP_ID = '7P9rWHY7WsKk1rSNM8nF';

const postLike = async (itemId) => {
  const response = await fetch(`${API_URL}/apps/${APP_ID}/likes`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemId,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const responseText = await response.text();
  return responseText;
};

const getLikes = async () => {
  const response = await fetch(`${API_URL}/apps/${APP_ID}/likes`);
  const responseJSON = await response.json();
  return responseJSON;
};

export { postLike, getLikes };


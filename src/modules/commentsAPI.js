const API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const APP_ID = '4gg2lZ1zSqYloD1ZmP4A';

const postComment = async (itemId, name, message) => {
  const response = await fetch(`${API_URL}/apps/${APP_ID}/comments`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemId,
      username: name,
      comment: message,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const responseText = await response.text();
  return responseText;
};

const getComments = async (itemId) => {
  const response = await fetch(`${API_URL}/apps/${APP_ID}/comments?item_id=${itemId}`);
  if (response.ok) {
    const responseJSON = await response.json();
    return responseJSON;
  }
  return [];
};

export { postComment, getComments };

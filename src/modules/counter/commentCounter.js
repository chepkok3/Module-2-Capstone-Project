const commentsCounter = () => {
  const commentSection = document.querySelector('.user-comments');
  if (commentSection) {
    return commentSection.children.length;
  }
  return 0;
};

export default commentsCounter;

// Makes interaction object and insert into interction collection
const interactionCreator = (
  userId,
  postId,
  interactionType,
  expiry,
  timeStamp
) => {
  const diffTime = Math.abs(new Date(expiry) - new Date(timeStamp));
  const postExpireTimeInDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const interaction = {
    userId: userId,
    postId: postId,
    interactionType: interactionType,
    postExpireTimeInDays: postExpireTimeInDays,
  };
  return interaction;
};

module.exports = interactionCreator;

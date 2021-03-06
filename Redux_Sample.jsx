export default connect(({ user: { lists, id } }) => ({
  lists,
  userID: id,
}), dispatch => ({
  addToUserList: (pose_id, listName) =>
    dispatch(add_to_user(pose_id, listName)),
  removeFromUserList: (pose_id, listName) =>
    dispatch(remove_from_user(pose_id, listName)),
}))(({
  img,
  poseID,
  lists,
  removeFromUserList,
  addToUserList,
  userID,
}) => (
    <div>
      <PosePicture img={img} />
      <Heart
        poseID={poseID}
        isFavorite={
          lists && lists.Favorites && lists.Favorites.indexOf(poseID)  !== -1
        }
        remove={() => removeFromFavorites(poseID, userID, removeFromUserList)}
        add={() => addToFavorites(poseID, userID, addToUserList)}
        userID={userID}
      />
    </div>
  ))

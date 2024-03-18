const DeleteUser = async (id) => {
  try {
    const response = await fetch(`/api/v1/users/${id}`, {
      method: "DELETE",
    });
    if(!response.ok){
        throw new Error('Failed to delete user')
    }
  } catch (error) {
    return error;
  }
};
export default DeleteUser;

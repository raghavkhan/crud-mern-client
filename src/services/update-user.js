const UpdateUser = async (id, updatedData) => {
  const body = updatedData;
  try {
    const response = await fetch(`/api/v1/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error("Failed to update data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default UpdateUser;

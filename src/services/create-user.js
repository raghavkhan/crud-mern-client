const CreateUser = async (formData) => {
    const body = formData;
    try {
      const response = await fetch("/api/v1/users", {
        method: "POST",
        headers: {
          "Content-type": "aplication/json",
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  };
  
  export default CreateUser;
  
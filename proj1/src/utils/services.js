
  export const FetchData = async (url = "",token) => {
    try {
      const response = await fetch(url, {
        // mode: "no-cors",
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`
        }
      });
      if (!response.ok) {
        console.log("not okay response!, response :", response);
        return response;
      }
      return await response.json();
    } catch (error) {
      console.log("not okay!(catch error)");
      return null;
    }
  };
  
  
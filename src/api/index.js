export const sendMessage = async (text = "") => {
  const res = await fetch("http://localhost:8000/message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      text
    })
  });
  const data = await res.json();
  console.log(data);
  return data;
};

import { API_BASE } from "./api";

export const loginUser = async (username, password) => {
  const response = await fetch(`${API_BASE}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  const data = await response.json();

  if (data.access_token) {
    localStorage.setItem("access_token", data.access_token);
  }

  return data;
};
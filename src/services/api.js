// export const API_BASE = "/api";

const API_BASE = "/api";

export const apiRequest = async (url, options = {}) => {
  const token = localStorage.getItem("access_token");

  const response = await fetch(`${API_BASE}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...options.headers,
    },
  });

  // 🚨 Agar token expire ho gaya
  if (response.status === 401) {
    localStorage.removeItem("access_token");

    alert("Session expired. Please login again.");

    window.location.href = "/";
    return null;
  }

  return response;
};
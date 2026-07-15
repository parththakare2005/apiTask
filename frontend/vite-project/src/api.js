const API_URL = "http://localhost:5000/tasks";

export const getTasks = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const addTask = async (title) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });

  if (!response.ok) {
    throw new Error("Failed to add task");
  }

  return response.json();
};

export const toggleTask = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
  });

  if (!response.ok) {
    throw new Error("Task not found");
  }

  return response.json();
};
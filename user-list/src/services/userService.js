import api from "../api/api.js";

async function getAllUsers(limit,page) {
  const users = await api.get(`/users?page=${page}&limit=${limit}`);
  return users;
}

async function getUser(id) {
  const user = await api.get(`/users/${id}`);
  return user.user;
}

async function deleteUser(id) {
  const user = await api.del(`/users/${id}`);
  return user;
}

async function createOrUpdate(action, data, id) {
  const user =
    action == "create"
      ? await api.post("/users", data)
      : await api.put(`/users/${id}`, data);
  return user.user;
}

export { getAllUsers, getUser, deleteUser, createOrUpdate };

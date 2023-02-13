const host = "http://localhost:3005/api";

async function request(url, method = "get", data) {
  const options = {
    method,
    headers: {},
  };

  if (data) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }

  try {
    let res = await fetch(host + url, options);
    return res.json();
  } catch (error) {
    throw error;
  }
}

async function get(url) {
  return await request(url);
}

async function post(url, data) {
  return await request(url, "POST", data);
}

async function put(url, data) {
  return await request(url, "PUT", data);
}

async function del(url, data) {
  return await request(url, "DELETE", data);
}

export default { get, post, put, del };

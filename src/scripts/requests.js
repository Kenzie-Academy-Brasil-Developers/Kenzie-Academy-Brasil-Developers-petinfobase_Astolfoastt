import { toasts } from "./toasts.js";

const baseUrl = `http://localhost:3333`;
const green = "#168821";
const red = "#df1545";


export async function login(loginBody) {
  const token = await fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(loginBody),
  })
    .then(async (res) => {
      const resJson = await res.json();

      if (res.ok) {
        localStorage.setItem("@petInfo:token", resJson.token);

        toasts(
          "Usuário logado com sucesso, você será redirecionado a dashboard!",
          green
        );
        setTimeout(() => {
          location.replace("./src/pages/dashboard.html");
        }, 2000);
        return resJson;
      } else {
        throw new Error(resJson.message);
      }
    })
    .catch((err) => toasts(err.message, red));
  return token;
}
export async function createUser(resquetBody) {
  const newUser = await fetch(`${baseUrl}/users/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(resquetBody),
  })
    .then(async (res) => {
      const resJson = await res.json();
      if (res.ok) {
        toasts(
          "Usuário criado com sucesso, você será redirecionado a página de login!",
          green
        );
        setTimeout(() => {
          location.replace("../../index.html");
        }, 3000);
        return resJson;
      } else {
        throw new Error(resJson.message);
      }
    })
    .catch((err) => toasts(err.message, red));

  return newUser;
}

export async function createPosts(postBody) {
  const token = localStorage.getItem("@petInfo:token");
  const newPost = await fetch(`${baseUrl}/posts/create`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(postBody),
  })
    .then(async (res) => {
      const resJson = await res.json();
      if (res.ok) {
        localStorage.setItem("@petInfo:postsCreate", JSON.stringify(resJson));
        toasts("Post criado com sucesso!", green);
        return resJson;
      } else {
        throw new Error(resJson.message);
      }
    })
    .catch((err) => toasts(err.message, red));

  return newPost;
}

export async function posts() {
  const token = localStorage.getItem("@petInfo:token");

  try {
    const response = await fetch(`${baseUrl}/posts`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const postsData = await response.json();
      localStorage.setItem("@petInfo:postsUsers", JSON.stringify(postsData));
      return postsData;
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
  } catch (err) {
    toasts(err.message, red);
    throw err;
  }
}

export async function authenticUser() {
  const token = localStorage.getItem("@petInfo:token");
  const user = await fetch(`${baseUrl}/users/profile`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then(async (res) => {
      const resJson = await res.json();
      if (res.ok) {
        localStorage.setItem("@petInfo:postsIdUser", JSON.stringify(resJson));
        return resJson;
      } else {
        throw new Error(resJson.message);
      }
    })
    .catch((err) => toasts(err.message, red));

  return user;
}

export async function editPost(id, body) {
  const token = localStorage.getItem("@petInfo:token");
  const post = await fetch(`${baseUrl}/posts/${id}`, {
    method: "PATCH",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then(async (res) => {
      const resJson = await res.json();
      if (res.ok) {
        toasts("Post editado com sucesso", green);
        return resJson;
      } else {
        throw new Error(resJson.message);
      }
    })
    .catch((err) => toasts(err.message, red));
  return post;
}
export async function deletePostById(id) {
  const token = localStorage.getItem("@petInfo:token");
  const post = await fetch(`${baseUrl}/posts/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(async (response) => {
      const responseJson = await response.json();
      if (response.ok) {
        toasts("Post deletado com sucesso", green);
        return responseJson;
      } else {
        throw new Error(responseJson.message);
      }
    })
    .catch((err) => toasts(err.message, red));
  return post;
}
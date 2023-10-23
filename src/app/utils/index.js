import { url } from "../enum";
export async function getUser() {
  const data = await fetch(url).then((response) => response.json());
  return data;
}

export async function getUserDetail(username) {
  const data = await fetch(url + "/" + username).then((resonse) =>
    resonse.json()
  );
  return data;
}

export async function getFollowDetails(name, follow) {
  var data = [];
  if (typeof name !== "undefined" && typeof follow != "undefined") {
    data = fetch(url + "/" + name + "/" + follow).then((resonse) =>
      resonse.json()
    );
  }
  return data;
}

export async function getRepoDetails(name) {
  var data = [];
  if (typeof name !== "undefined") {
    data = fetch(url + "/" + name + "/repos").then((resonse) => resonse.json());
  }
  return data;
}

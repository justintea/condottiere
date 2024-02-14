import { getToken } from "./0usersService";
const token = getToken();
const baseURL = "/api/addresses";

const headers = {
  "Content-type": "application/json",
  Authorization: `Bearer ${token}`,
};

//*CREATE ADDRESS---------------------------------------------
export async function createAddress(body) {
  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  };

  const response = await fetch(baseURL, options);
  console.log('body: ', body);
  console.log('response: ', response);
  if (!response.ok) throw new Error("Network response (inbound) was not ok.");
  const json = await response.json();
  console.log(JSON.stringify(json));
  return json;
}

//*GET YOUR ONE ADDRESS----------------------------------------
export async function getOneAddress() {
  const options = {
    method: 'GET',
    headers,
  };

  const response = await fetch(baseURL, options);
  console.log('at getAddress in AddressAPI', response);
  if (!response.ok) throw new Error("Network response (inbound) was not ok.");
  const json = await response.json();
  console.log(JSON.stringify(json));
  return json;
}

//*UPDATE YOUR ONE ADDRESS-------------------------------------
export async function updateOneAddress(body) {
  const id = body.userId;       //! check this next time 

  const options = {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
  };

  const response = await fetch(`${baseURL}/${id}`, options);

  if (!response.ok) throw new Error("Network response was not ok.");
  const json = await response.json();
  return json;
}

//* SUPERUSER: GET ALL ADDRESSES----------------------------------------
export async function getAllAddresses() {
  const options = {
    method: 'GET',
    headers,
  };

  const response = await fetch(baseURL, options);
  console.log('at getAllAddresses in AddressAPI', response);
  if (!response.ok) throw new Error("Network response (inbound) was not ok.");
  const json = await response.json();
  console.log(JSON.stringify(json));
  return json;
}
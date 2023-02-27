import * as CryptoJS from 'crypto-js';
import jwt_decode from "jwt-decode";

const get = (key: string) => {
  key = `${ key }`;
  return sessionStorage.getItem(key);
};

const getEncripted = (key: string) => {
  key = `${ key }`;

  const value = sessionStorage.getItem(key);
  return value ? CryptoJS.AES.decrypt(value, '9ikOICdvfkWEhZ7L6m8wHg0F9TKNMQMEW7nMxAued-AAyQAvDxjMFUq-90b-TZN9Jw').toString(CryptoJS.enc.Utf8) : null;
  // return sessionStorage.getItem(key);
};

const set = (key: string, value: any) => {
  key = `${ key }`;
  return sessionStorage.setItem(key, value);
};

const setEncripted = (key: string, value: any) => {
  key = `${ key }`;
  value = CryptoJS.AES.encrypt(value, '9ikOICdvfkWEhZ7L6m8wHg0F9TKNMQMEW7nMxAued-AAyQAvDxjMFUq-90b-TZN9Jw').toString();
  return sessionStorage.setItem(key, value);
  // return sessionStorage.setItem(key, value);
};

const remove = (key: string) => {
  key = `${ key }`;
  return sessionStorage.removeItem(key);
};

const getTokenDecode = (key: string) => {
  const token = getEncripted(key);

  return token ? jwt_decode(token) : null;
};

const storage = {
  get, set, remove, setEncripted, getEncripted, getTokenDecode
};

export { storage };
// window[ 'storage' ] = storage;

"use client";

export const isCookieSet = (name: string) => getCookie(name) !== "";

export const getCookie = (name: string) => {
  if (typeof document === "undefined") return null;

  name = name + "=";
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) == " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) == 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
};

export const setCookie = (name: string, value: string, expireDays: number) => {
  if (typeof document === "undefined") return null;

  const now = new Date();
  now.setTime(now.getTime() + expireDays * 24 * 60 * 60 * 1000);
  const expires = "expires=" + now.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
};

import nookies from "nookies";

export const COOKIES = {
  PARTNER_ID: "prntrid",
};

export const getCookies = (ctx: any) => nookies.get(ctx);

export const getCookie = (ctx: any, name: string) => {
  const cookies = getCookies(ctx);
  return cookies[name] || "";
};

export const setCookie = (
  ctx: any,
  name: string,
  value: string,
  options?: any
) => {
  nookies.set(ctx, name, value, {
    path: "/",
    httpOnly: true,
    ...(options || {}),
  });
};

export const removeCookie = (ctx: any, name: string) => {
  nookies.destroy(ctx, name, { path: "/" });
};

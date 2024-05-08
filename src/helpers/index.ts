import crypto from "crypto";

const SECRET = "SUPAKORN-REST-API";

export const random = () => crypto.randomBytes(128).toString("base64");

export const authentication = (salt: string, password: string) => {
  const hmac = crypto.createHmac("sha256", SECRET);
  hmac.update([salt, password].join("/"));
  return hmac.digest("hex");
};

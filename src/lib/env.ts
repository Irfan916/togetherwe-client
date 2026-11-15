import "server-only";

const required = (name: string): string => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
};

export const env = {
  get apiUrl() {
    return required("API_URL").replace(/\/$/, "");
  },
  get mongodbUri() {
    return required("MONGODB_URI");
  },
};
export const generateUID = (): string => {
  const timestamp = Math.floor(Date.now() / 1000).toString(16); // 4-byte timestamp

  const randomBytes = Array.from(crypto.getRandomValues(new Uint8Array(5))) // 5-byte random value
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  const counter = (Math.floor(Math.random() * 0xffffff) & 0xffffff)
    .toString(16)
    .padStart(6, "0"); // 3-byte counter

  return timestamp + randomBytes + counter;
};

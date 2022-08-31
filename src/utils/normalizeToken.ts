const normalizeToken = (token: string | undefined) => {
  if (token?.toLowerCase().includes("bearer")) {
    token = token.split(" ")[1];
  }

  return token;
};

export default normalizeToken;

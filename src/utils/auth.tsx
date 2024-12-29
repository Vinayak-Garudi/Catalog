export const handleLogOut = () => {
  localStorage.clear();
  const clearCookie = (name: string) => {
    document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
  };

  clearCookie("token");
};

export const isAuthenticated = () => {
  const ongId = localStorage.getItem("ongId");

  if (ongId === null) {
    return false;
  }

  return true;
};

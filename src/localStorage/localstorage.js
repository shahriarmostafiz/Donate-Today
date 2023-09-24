const getDonation = () => {
  const savedItem = localStorage.getItem("donation");
  if (savedItem) {
    const data = JSON.parse(savedItem);
    return data;
  }
  return [];
};
const saveTheDonation = (input) => {
  const savedDonation = getDonation();
  const isExist = savedDonation.find((donation) => donation.id === input.id);
  if (!isExist) {
    savedDonation.push(input);
    localStorage.setItem("donation", JSON.stringify(savedDonation));
  }
};
export { saveTheDonation, getDonation };

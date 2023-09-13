// Function to conditionally join class names
export const classNames = (...classes: String[]) => {
  return classes.filter(Boolean).join(' ');
};

// Function to convert a number to a displayable string, adding commas every 3 digits
export const numberToDisplayableString = (number: number | undefined) => {
  return number !== undefined && number !== null ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '0';
};

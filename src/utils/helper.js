export const contactFormValidation = (userDetails) => {
  let errorDetails = {
    allField: false,
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
  };

  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

  if (
    !userDetails.firstName ||
    !userDetails.lastName ||
    !userDetails.email ||
    !userDetails.phone
  )
    errorDetails = { ...errorDetails, allField: true };
  if (userDetails?.firstName?.length <= 2)
    errorDetails = { ...errorDetails, firstName: true };
  if (userDetails?.lastName?.length <= 2)
    errorDetails = { ...errorDetails, lastName: true };
  if (!emailRegex?.test(userDetails?.email))
    errorDetails = { ...errorDetails, email: true };

  if (userDetails?.phone?.length < 10)
    errorDetails = { ...errorDetails, phone: true };

  return errorDetails;
};

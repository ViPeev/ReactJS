export function flattenData(data) {
  return {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phoneNumber: data.phoneNumber,
    imageUrl: data.imageUrl,
    country: data.address.country,
    city: data.address.city,
    street: data.address.street,
    streetNumber: data.address.streetNumber,
  };
}

export function formatData(data) {
  return {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phoneNumber: data.phoneNumber,
    imageUrl: data.imageUrl,
    address: {
      country: data.country,
      city: data.city,
      street: data.street,
      streetNumber: data.streetNumber,
    },
  };
}

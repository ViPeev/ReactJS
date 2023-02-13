let mailRegex = /^[A-Za-z0-9_\.]+@[A-Za-z]+\.[A-Za-z]{2,3}$/;

export default function validate(data) {
  return {
    firstName: data.firstName.length > 2,
    lastName: data.lastName.length > 2,
    email: mailRegex.test(data.email),
    imageUrl: data.imageUrl.startsWith("https://"),
    phoneNumber:
      data.phoneNumber.startsWith("0") && data.phoneNumber.length === 10,
    country: data.country.length > 1,
    city: data.city.length > 2,
    street: data.street.length > 2,
    streetNumber: Number(data.streetNumber) > 0,
  };
}

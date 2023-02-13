import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../contexts/dataContext";
import { createOrUpdate, getUser } from "../../services/userService";
import { flattenData, formatData } from "../../utils.js/dataParser";
import validate from "../../utils.js/formValidate";
import Spinner from "../Spinner";

export default function EditUser({ closeForm }) {
  const { userId, setUsers } = useContext(DataContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const user = await getUser(userId);
      setData(flattenData(user));
    })();
  }, [userId]);

  const [validator, setValidator] = useState({
    firstName: true,
    lastName: true,
    email: true,
    imageUrl: true,
    phoneNumber: true,
    country: true,
    city: true,
    street: true,
    streetNumber: true,
  });

  let notValid = data ? Object.values(data).some((x) => !x) : false;

  const changeHandler = (e) => {
    setData((oldData) => {
      return { ...oldData, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (Object.values(validate(data)).some((x) => !x)) {
      setValidator(validate(data));
      return;
    }

    const user = await createOrUpdate("update", formatData(data), userId);
    
    setUsers((users) => {
      return users.map((current) => {
        if (current._id === userId) {
          return user;
        }
        return current;
      });
    });
    closeForm("edit");
  };

  return data ? (
    <div className="overlay">
      <div className="backdrop"></div>
      <div className="modal">
        <div className="user-container">
          <header className="headers">
            <h2>Edit User</h2>
            <button
              className="btn close"
              onClick={closeForm.bind(null, "edit")}
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="xmark"
                className="svg-inline--fa fa-xmark"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                ></path>
              </svg>
            </button>
          </header>
          <form onSubmit={submitHandler}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First name</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-user"></i>
                  </span>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={data.firstName}
                    onChange={changeHandler}
                  />
                </div>
                {validator.firstName ? null : (
                  <p className="form-error">
                    First name should be at least 3 characters long!
                  </p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last name</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-user"></i>
                  </span>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={data.lastName}
                    onChange={changeHandler}
                  />
                </div>
                {validator.lastName ? null : (
                  <p className="form-error">
                    Last name should be at least 3 characters long!
                  </p>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    value={data.email}
                    onChange={changeHandler}
                  />
                </div>
                {validator.email ? null : (
                  <p className="form-error">Email is not valid!</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone number</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    value={data.phoneNumber}
                    onChange={changeHandler}
                  />
                </div>
                {validator.phoneNumber ? null : (
                  <p className="form-error">Phone number is not valid!</p>
                )}
              </div>
            </div>

            <div className="form-group long-line">
              <label htmlFor="imageUrl">Image Url</label>
              <div className="input-wrapper">
                <span>
                  <i className="fa-solid fa-image"></i>
                </span>
                <input
                  id="imageUrl"
                  name="imageUrl"
                  type="text"
                  value={data.imageUrl}
                  onChange={changeHandler}
                />
              </div>
              {validator.imageUrl ? null : (
                <p className="form-error">ImageUrl is not valid!</p>
              )}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="country">Country</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-map"></i>
                  </span>
                  <input
                    id="country"
                    name="country"
                    type="text"
                    value={data.country}
                    onChange={changeHandler}
                  />
                </div>
                {validator.country ? null : (
                  <p className="form-error">
                    Country should be at least 2 characters long!
                  </p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-city"></i>
                  </span>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    value={data.city}
                    onChange={changeHandler}
                  />
                </div>
                {validator.city ? null : (
                  <p className="form-error">
                    City should be at least 3 characters long!
                  </p>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="street">Street</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-map"></i>
                  </span>
                  <input
                    id="street"
                    name="street"
                    type="text"
                    value={data.street}
                    onChange={changeHandler}
                  />
                </div>
                {validator.street ? null : (
                  <p className="form-error">
                    Street should be at least 3 characters long!
                  </p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="streetNumber">Street number</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-house-chimney"></i>
                  </span>
                  <input
                    id="streetNumber"
                    name="streetNumber"
                    type="text"
                    value={data.streetNumber}
                    onChange={changeHandler}
                  />
                </div>
                {validator.streetNumber ? null : (
                  <p className="form-error">
                    Street number should be a positive number!
                  </p>
                )}
              </div>
            </div>
            <div id="form-actions">
              <button
                id="action-save"
                className="btn"
                type="submit"
                disabled={notValid}
              >
                Save
              </button>
              <button
                id="action-cancel"
                className="btn"
                type="button"
                onClick={closeForm.bind(null, "edit")}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <Spinner />
  );
}
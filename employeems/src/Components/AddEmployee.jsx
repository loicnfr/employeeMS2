import React from "react";
import "./employeeAdd.css";

const AddEmployee = () => {
  return (
    <>

      <div className="container">
        <header>Add Employee</header>

        <form action="#">
          <div className="form first">
            <div className="details personal">
              <span className="title">personal detail</span>

              <div className="fields">
                <div className="input-field">
                  <label>Full Name</label>
                  <input type="text" placeholder="Enter Name" required />
                </div>
                <div className="input-field">
                  <label>Email</label>
                  <input type="text" placeholder="Enter email" required />
                </div>
                <div className="input-field">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder="Enter Phone Number"
                    required
                  />
                </div>

                <div className="input-field">
                  <label>Deparment</label>
                  <input type="text" placeholder="Enter Department" required />
                </div>

                <div className="input-field">
                  <label>Gender</label>
                  <input type="text" placeholder="Enter Gender" required />
                </div>
              </div>
              <button className="nextbn">
                <span className="btntxt">Submit</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddEmployee;

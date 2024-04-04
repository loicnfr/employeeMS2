import React from "react";
import { Form, Input, Select } from "antd";
import "./employeeAdd.css";

const AddEmployee = () => {
  return (
    <>
      {/* <Form className=" form-add">
        <Form.Item label="Name" name={"myName"}>
          <input placeholder="Enter name" />
        </Form.Item>
        <Form.Item label="Department" name={"department"}>
          <input placeholder="Enter Deparment" />
        </Form.Item>
        <Form.Item label="Email" name={"email"}>
          <input placeholder="Enter Email" />
        </Form.Item>
        <Form.Item label="Phone" name={"Phone"}>
          <input placeholder="Enter Phone number" />
        </Form.Item>
        <Form.Item label="Started Date" name={"StartDate"}>
          <input type="date" />
        </Form.Item>
        <Form.Item label="Tern Date" name={"StartDate"}>
          <input type="date" />
        </Form.Item>
        <Form.Item label="Gender" name={"gender"}>
          <Select
            placeholder="Select Gender"
            options={[
              {
                label: "Male",
                value: "Male",
              },
              {
                label: "Female",
                value: "Female",
              },
            ]}
          />
        </Form.Item>

        <button>Submit</button>
      </Form> */}

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

import React from 'react'

const FormPageOne = () => {
  return (
    <>
      <div style={{ margin: "0px" }}>
        <form>
          {" "}
          <div style={{ margin: "20px" }}>
            <div style={{ margin: "7px" }}>
              <label>1.Name*</label><br />
              <input style={{ width: "80%", padding: "5px" }}
                placeholder="Enter Your Name"
                onChange={(e) => { }}
              />
            </div>
            <div style={{ margin: "7px" }} >
              <label>
                2.Email*</label><br />
              <input
                placeholder="Email"
                style={{ width: "80%", padding: "5px" }}
                onChange={(e) => { }}
              />
            </div>
            <div style={{ margin: "7px" }} >
              <label>3.Date Of Birth</label><br />
              <input
                type="date"
                placeholder="Enter BirthDate"
                style={{ width: "80%", padding: "5px" }}
                onChange={(e) => { }}
                name="birthdate"
              />
            </div>
            <div style={{ margin: "7px" }} >
              <label>
                4.Contact no.
              </label><br />
              <input
                placeholder="Enter Your 10 Digit Number"
                style={{ width: "80%", padding: "5px" }}
                onChange={(e) => { }}
              />
            </div>
          </div>
        </form>
      </div>

    </>

  )
}

export default FormPageOne;
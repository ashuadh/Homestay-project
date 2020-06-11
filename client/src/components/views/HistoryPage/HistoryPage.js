import React from "react";
import NavBar from "../NavBar/NavBar";

function HistoryPage(props) {
  return (
    <div>
      <NavBar />
      <div style={{ paddingTop: "150px", minHeight: "calc(100vh - 80px)" }}>
        <div style={{ width: "80%", margin: "3rem auto" }}>
          <div style={{ textAlign: "center" }}>
            <h1>History</h1>
          </div>
          <br />

          <table>
            <thead>
              <tr>
                <th>Payment Id</th>
                <th>Total Amount</th>
                <th>Duration of Stay</th>
                <th>Date of Purchase</th>
              </tr>
            </thead>

            <tbody>
              {props.user.userData &&
                props.user.userData.history &&
                props.user.userData.history.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.dateOfPurchase}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HistoryPage;

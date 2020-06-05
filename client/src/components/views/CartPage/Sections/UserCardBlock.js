import React from "react";

function UserCardBlock(props) {
  const renderCartImage = (images) => {
    if (images.length > 0) {
      let image = images[0];
      return `http://localhost:5000/${image}`;
    }
  };

  const renderItems = () =>
    props.homestays &&
    props.homestays.map((homestay) => (
      <tr key={homestay._id}>
        <td>
          <img
            style={{ width: "70px" }}
            alt="homestay"
            src={renderCartImage(homestay.roomImages)}
          />
        </td>
        <td>{homestay.quantity} days</td>
        <td>1</td>
        <td>$ {homestay.rate} </td>
        <td>
          <button onClick={() => props.removeItem(homestay._id)}>
            Remove{" "}
          </button>{" "}
        </td>
      </tr>
    ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Homestay Image</th>
            <th>Duration of stay</th>
            <th>Number of guests</th>
            <th>Rate / guest / night</th>
            <th>Remove from Cart</th>
          </tr>
        </thead>
        <tbody>{renderItems()}</tbody>
      </table>
    </div>
  );
}

export default UserCardBlock;

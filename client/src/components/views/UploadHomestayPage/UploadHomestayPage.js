import React, { useState } from "react";
import {
  Typography,
  Button,
  Form,
  message,
  Input,
  Icon,
  Row,
  Col,
  Dropdown,
} from "antd";
import FileUpload from "../../utils/FileUpload";
import Axios from "axios";
import NavBar from "../NavBar/NavBar";

const { Title } = Typography;
const { TextArea } = Input;

const States = [
  { key: 0, value: "Select your state / UT" },
  { key: 1, value: "Andhra Pradesh" },
  { key: 2, value: "Andaman and Nicobar Islands" },
  { key: 3, value: "Arunachal Pradesh" },
  { key: 4, value: "Assam" },
  { key: 5, value: "Bihar" },
  { key: 6, value: "Chandigarh" },
  { key: 7, value: "Chhattisgarh" },
  { key: 8, value: "Dadar and Nagar Haveli" },
  { key: 9, value: "Daman and Diu" },
  { key: 10, value: "Delhi" },
  { key: 11, value: "Lakshadweep" },
  { key: 12, value: "Puducherry" },
  { key: 13, value: "Goa" },
  { key: 14, value: "Gujarat" },
  { key: 15, value: "Haryana" },
  { key: 16, value: "Himachal Pradesh" },
  { key: 17, value: "Jammu and Kashmir" },
  { key: 18, value: "Jharkhand" },
  { key: 19, value: "Karnataka" },
  { key: 20, value: "Kerala" },
  { key: 21, value: "Madhya Pradesh" },
  { key: 22, value: "Maharashtra" },
  { key: 23, value: "Manipur" },
  { key: 24, value: "Meghalaya" },
  { key: 25, value: "Mizoram" },
  { key: 26, value: "Nagaland" },
  { key: 27, value: "Odisha" },
  { key: 28, value: "Punjab" },
  { key: 29, value: "Rajasthan" },
  { key: 30, value: "Sikkim" },
  { key: 31, value: "Tamil Nadu" },
  { key: 32, value: "Telangana" },
  { key: 33, value: "Tripura" },
  { key: 34, value: "Uttar Pradesh" },
  { key: 35, value: "Uttarakhand" },
  { key: 36, value: "West Bengal" },
];

const Nums = [
  { key: 1, value: 1 },
  { key: 2, value: 2 },
  { key: 3, value: 3 },
  { key: 4, value: 4 },
  { key: 5, value: 5 },
  { key: 6, value: 6 },
  { key: 7, value: 7 },
  { key: 8, value: 8 },
  { key: 9, value: 9 },
  { key: 10, value: 10 },
];

function UploadProductPage(props) {
  const [TitleValue, setTitleValue] = useState("");
  const [AboutHomestayValue, setAboutHomestayValue] = useState("");
  const [AboutLocalityValue, setAboutLocalityValue] = useState("");
  const [AddressValue, setAddressValue] = useState("");
  const [RateValue, setRateValue] = useState(0);
  const [StateValue, setStateValue] = useState(0);
  const [CityValue, setCityValue] = useState("");
  const [PinValue, setPinValue] = useState("");
  const [BedroomValue, setBedroomValue] = useState(1);
  const [BathroomValue, setBathroomValue] = useState(1);
  const [MaxGuestsValue, setMaxGuestsValue] = useState(0);

  const [HostImagesValue, setHostImagesValue] = useState([]);
  const [RoomImagesValue, setRoomImagesValue] = useState([]);
  const [LocalityImagesValue, setLocalityImagesValue] = useState([]);

  const onTitleChange = (event) => {
    setTitleValue(event.currentTarget.value);
  };

  const onAboutHomestayChange = (event) => {
    setAboutHomestayValue(event.currentTarget.value);
  };

  const onAboutLocalityChange = (event) => {
    setAboutLocalityValue(event.currentTarget.value);
  };

  const onAddressChange = (event) => {
    setAddressValue(event.currentTarget.value);
  };

  const onCityChange = (event) => {
    setCityValue(event.currentTarget.value);
  };

  const onPinChange = (event) => {
    setPinValue(event.currentTarget.value);
  };

  const onRateChange = (event) => {
    setRateValue(event.currentTarget.value);
  };

  const onStatesSelectChange = (event) => {
    setStateValue(event.currentTarget.value);
  };

  const onBedroomChange = (event) => {
    setBedroomValue(event.currentTarget.value);
  };

  const onBathroomChange = (event) => {
    setBathroomValue(event.currentTarget.value);
  };

  const onMaxGuestsChange = (event) => {
    setMaxGuestsValue(event.currentTarget.value);
  };

  const updateHostImages = (newImages) => {
    setHostImagesValue(newImages);
  };

  const updateRoomImages = (newImages) => {
    setRoomImagesValue(newImages);
  };

  const updateLocalityImages = (newImages) => {
    setLocalityImagesValue(newImages);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (
      !TitleValue ||
      !AboutHomestayValue ||
      !AboutLocalityValue ||
      !CityValue ||
      !PinValue ||
      !BedroomValue ||
      !BathroomValue ||
      !MaxGuestsValue ||
      !RateValue ||
      !StateValue ||
      !AddressValue ||
      !HostImagesValue ||
      !LocalityImagesValue ||
      !RoomImagesValue
    ) {
      return alert("fill all the fields first!");
    }

    const variables = {
      writer: props.user.userData._id,
      title: TitleValue,
      aboutHomestay: AboutHomestayValue,
      address: AddressValue,
      city: CityValue,
      state: StateValue,
      pincode: PinValue,
      aboutLocality: AboutLocalityValue,
      rate: RateValue,
      hostImages: HostImagesValue,
      roomImages: RoomImagesValue,
      localityImages: LocalityImagesValue,
    };

    Axios.post("/api/homestay/uploadHomestay", variables).then((response) => {
      if (response.data.success) {
        alert("Homestay Successfully Listed");
        props.history.push("/");
      } else {
        alert("Failed to list your Homestay");
      }
    });
  };

  return (
    <div>
      <NavBar />
      <div style={{ paddingTop: "75px", minHeight: "calc(100vh - 80px)" }}>
        <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <Title level={2}> List your Homestay</Title>
          </div>

          <Form onSubmit={onSubmit}>
            <label>Title</label>
            <Input onChange={onTitleChange} value={TitleValue} />

            <br />
            <br />

            <label>About the Homestay</label>
            <TextArea
              onChange={onAboutHomestayChange}
              value={AboutHomestayValue}
            />

            <br />
            <br />

            {/* Facilites */}

            <label>Address </label>
            <TextArea onChange={onAddressChange} value={AddressValue} />

            <br />
            <br />

            <Row>
              <Col span={10}>
                <label>
                  City <br />{" "}
                </label>
                <Input
                  style={{ width: "70%" }}
                  onChange={onCityChange}
                  value={CityValue}
                />
              </Col>

              <Col span={10}>
                <label>
                  {" "}
                  State / Union Territory <br />{" "}
                </label>
                <select onChange={onStatesSelectChange} value={StateValue}>
                  {States.map((item) => (
                    <option key={item.key} value={item.key}>
                      {item.value}{" "}
                    </option>
                  ))}
                </select>
              </Col>

              <Col span={4}>
                <label>
                  Pin Code <br />
                </label>
                <Input onChange={onPinChange} value={PinValue} />
              </Col>
            </Row>

            <br />
            <br />

            <label>About the Locality</label>
            <TextArea
              onChange={onAboutLocalityChange}
              value={AboutLocalityValue}
            />

            <br />
            <br />

            {/* Local facilities */}
            {/* Map if possible */}

            <Row>
              <Col span={6}>
                <label>
                  No: of bedrooms <br />
                </label>

                <select
                  style={{ width: "70%" }}
                  onChange={onBedroomChange}
                  value={BedroomValue}
                >
                  {Nums.map((item) => (
                    <option key={item.key} value={item.key}>
                      {item.value}{" "}
                    </option>
                  ))}
                </select>
              </Col>

              <Col span={6}>
                <label>
                  No: of bathrooms <br />
                </label>

                <select
                  style={{ width: "70%" }}
                  onChange={onBathroomChange}
                  value={BathroomValue}
                >
                  {Nums.map((item) => (
                    <option key={item.key} value={item.key}>
                      {item.value}{" "}
                    </option>
                  ))}
                </select>
              </Col>

              <Col span={7}>
                <label>Max Number of Guests</label>
                <Input
                  style={{ width: "72%" }}
                  onChange={onMaxGuestsChange}
                  value={MaxGuestsValue}
                  type="number"
                />
              </Col>

              <Col span={5}>
                <label>Rate / night / guest(&#8377;)</label>
                <Input
                  style={{ width: "100%" }}
                  onChange={onRateChange}
                  value={RateValue}
                  type="number"
                />
              </Col>
            </Row>

            <br />
            <br />

            <label>Host Photos</label>
            <FileUpload refreshFunction={updateHostImages} />
            <br />
            <br />
            <label>Homestay Photos</label>
            <FileUpload refreshFunction={updateRoomImages} />
            <br />
            <br />
            <label>Locality Photos</label>
            <FileUpload refreshFunction={updateLocalityImages} />
            <br />
            <br />
            <br />
            <br />
            <Row>
              <Col span={4} offset={10}>
                <Button style={{ width: "100%" }} onClick={onSubmit}>
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default UploadProductPage;

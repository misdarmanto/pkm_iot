/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Slider, Switch } from "@mui/material";
import { readDataBase, writeDataBase } from "../helper/firebase";
import { useEffect, useState } from "react";

interface IDeviceTypes {
  name: string;
  value: number;
}

const Home = () => {
  const [devicesData, setDevicesData] = useState<IDeviceTypes[]>([]);
  const [dht, setDht] = useState<number>(0);
  const [red, setRed] = useState<number>(0);
  const [green, setGreen] = useState<number>(0);
  const [blue, setBlue] = useState<number>(0);

  const updateDataBase = async () => {
    await writeDataBase({
      path: "devices",
      data: [
        { name: "dht", value: dht },
        { name: "red", value: red },
        { name: "green", value: green },
        { name: "blue", value: blue },
      ],
    });
  };

  const getData = async () => {
    await readDataBase({
      path: "/devices",
      callBack: setDevicesData,
    });
  };

  console.log(devicesData);

  useEffect(() => {
    updateDataBase();
  }, [dht, red, green, blue, updateDataBase]);

  useEffect(() => {
    getData();
  }, []);

  const handleChangeSlider = (_: Event, newValue: number | number[]) => {
    setRed(newValue as number);
  };

  return (
    <div>
      {/* <Switch {...label} onChange={() => setDht(dht ? 0 : 1)} /> */}
      <Slider
        defaultValue={50}
        min={0}
        max={255}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={handleChangeSlider}
      />
      {/* <Button variant="contained" onClick={writeUserData}>
        Click
      </Button> */}
    </div>
  );
};

export default Home;

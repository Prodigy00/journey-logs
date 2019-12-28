import React from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
const TrackForm = () => {
  return (
    <>
      <Spacer>
        <Input placeholder="Enter name" />
      </Spacer>
      <Spacer>
        <Button title="Start Recording" />
      </Spacer>
    </>
  );
};

export default TrackForm;

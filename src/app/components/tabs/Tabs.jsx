import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Follow from "../follow/Follow";
import Repository from "../repository/Repository";
export default function ControlledTabs({ name, details }) {
  const [key, setkey] = useState(1);

  function handleSelect(key) {
    setkey(key);
  }
  return (
    <Tabs activeKey={key} onSelect={handleSelect} id="controlled-tab-example">
      <Tab eventKey={1} title="Followers">
        <Follow name={name} follow={"followers"} key={key} details={details} />
      </Tab>
      <Tab eventKey={2} title="Following">
        <Follow name={name} follow={"following"} key={key} />
      </Tab>
      <Tab eventKey={3} title="Repository">
        <Repository name={name} key={key} />
      </Tab>
    </Tabs>
  );
}

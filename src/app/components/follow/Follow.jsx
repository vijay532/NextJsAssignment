import react, { useState, useEffect } from "react";
import React from "react";
import Picture from "../image/Image";
import Name from "../name/Name";
import { getFollowDetails } from "@/app/utils";

export default function Follow({ name, follow, key, details }) {
  const [user, setUser] = useState([]);

  async function getFollowList() {
    const data = await getFollowDetails(name, follow);
    setUser(data);
  }

  useEffect(() => {
    getFollowList();
  }, [key, details]);

  return (
    <div className="row">
      {user.length > 0 &&
        user.map((item, index) => (
          <>
            <div className="col-4 my-4">
              <Picture
                name={item?.login}
                imgUrl={item?.avatar_url}
                width={100}
                height={100}
              />
            </div>
            <div className="col-8 py-4">
              <Name salutation={"UserName: "} name={item?.login} />
            </div>
            <hr></hr>
          </>
        ))}
    </div>
  );
}

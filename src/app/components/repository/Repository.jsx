import React, { useState, useEffect } from "react";
import Name from "../name/Name";
import { getRepoDetails } from "@/app/utils";
export default function Repository({ name, key }) {
  const [repo, setRepo] = useState([]);

  async function getRepoList() {
    const data = await getRepoDetails(name);
    setRepo(data);
  }

  useEffect(() => {
    getRepoList();
  }, [key]);

  return (
    <div className="row">
      {repo.length > 0 &&
        repo.map((item, index) => (
          <div className="col-12 my-2" key={index}>
            <Name salutation={"Repo Name: "} name={item?.name} />
            <Name salutation={"Visibility: "} name={item?.visibility} />
            <Name salutation={"Forks: "} name={item?.forks} />
            <hr></hr>
          </div>
        ))}
    </div>
  );
}

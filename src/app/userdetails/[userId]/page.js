"use client";
import { useState, useEffect } from "react";
import { getFollowDetails, getUserDetail } from "@/app/utils";
import Picture from "@/app/components/image/Image";
import Name from "@/app/components/name/Name";
import "./page.css";
import ControlledTabs from "@/app/components/tabs/Tabs";
export default function userdetails(params) {
  const [details, setdetails] = useState();

  async function computeUserDetails() {
    const data = await getUserDetail(params.params.userId);
    setdetails(data);
  }

  useEffect(() => {
    computeUserDetails();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center m-4">{details?.login} Details</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-4 p-2 profile-detail">
          <Picture
            imgUrl={details?.avatar_url}
            name={details?.login}
            width={220}
            height={220}
          />
          <div className="card-title">
            <Name
              style={"text-center"}
              salutation={"Name: "}
              name={details?.name}
            />
            <Name
              style={"text-center"}
              salutation={"Followers: "}
              name={details?.followers}
            />
            <Name
              style={"text-center"}
              salutation={"Following: "}
              name={details?.following}
            />
            <Name
              style={"text-center"}
              salutation={"Number Of Repository: "}
              name={details?.public_repos}
            />
          </div>
          <Name
            style={"text-center"}
            salutation={"Company: "}
            name={details?.company}
          />
          <Name
            style={"text-center"}
            salutation={"Social Media: "}
            name={details?.twitter_username}
          />
        </div>
        <div className="col-7 mx-1 profile-detail">
          <div className="row p-2 ">
            <ControlledTabs name={details?.login} details={details} />
          </div>
        </div>
      </div>
    </div>
  );
}

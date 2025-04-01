import React from "react";
import { Link } from "react-router-dom";
import Card from "../../common_components/Card";
import CurrentHumidity from "../../humidity/components/CurrentHumidity";
import Weather from "../../components/Weather";
import Humidity from "../../humidity/components/Humidity";
import MainPlantBasic from "../../components/MainPlantBasic";
import testBanner from "../../assets/images/contents/testBanner.png"; // 상대 경로 수정
import VideoComp from "../../components/VideoComp";
import SoilComp from "../../components/SoilComp";
import CardLink from "../../common_components/CardLink";
import CoTwo from "../Cotwo/components/HomeCoTwo";
import RecentTemp from "../../temperature/components/HomeTemp";

const Home = () => {
  return (
    <>
      <div className="homeContainer grid grid-row-3 gap-y-4">
        <div className="flex flex-row gap-4">
          <Card className="basis-2/3">
            <MainPlantBasic />
          </Card>
          <Card className="basis-1/3">
            <Weather />
          </Card>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <CardLink link={"/temp"} title={"온도"}>
            <RecentTemp />
          </CardLink>
          <CardLink link={"/hume"} title={"습도"}>
            <CurrentHumidity />
          </CardLink>
          <CardLink link={"/sunshine"} title={"조도"}></CardLink>
          <CardLink link={"/cotwo"} title={"이산화탄소"}>
            <CoTwo />
          </CardLink>
        </div>
        <div className="flex flex-row gap-4">
          <Card className="basis-5/13">
            <SoilComp />
          </Card>
          <Card className="basis-5/13">
            <VideoComp />
          </Card>
          <Card className="basis-3/13">
            <img src={testBanner} alt="My Image" />
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;

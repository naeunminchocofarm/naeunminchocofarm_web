import React from "react";
import Card from "../../common_components/Card";
import Weather from "../../weather/pages/Weather";
import MainPlantBasic from "../../components/MainPlantBasic";
import homeBanner from "../../assets/images/contents/testbanner.jpg"; // 상대 경로 수정
import VideoComp from "../../components/VideoComp";
import CardLink from "../../common_components/CardLink";
import CoTwo from "../../Cotwo/components/HomeCoTwo";
import HomeTemp from "../../temperature/components/HomeTemp";
import HomeSunshine from "../../sunshine/components/HomeSunshine";
import HomeSoil from "../../soil/components/HomeSoil";
import HomeHumidity from "../../humidity/components/HomeHumidity";

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
            <HomeTemp />
          </CardLink>
          <CardLink link={"/hume"} title={"습도"}>
            <HomeHumidity />
          </CardLink>
          <CardLink link={"/sunshine"} title={"조도"}>
            <HomeSunshine />
          </CardLink>
          <CardLink link={"/cotwo"} title={"이산화탄소"}>
            <CoTwo />
          </CardLink>
        </div>
        <div className="flex flex-row gap-4">
          <Card className="basis-5/13">
            <HomeSoil link={"/soil"} title={"토양습도"} />
          </Card>
          <Card className="basis-5/13">
            <VideoComp />
          </Card>
          <Card className="basis-3/13">
            <img src={homeBanner} alt="My Image" />
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;

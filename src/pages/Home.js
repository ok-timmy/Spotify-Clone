import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Tabs } from "antd";
import { library } from "../helpers/albumList";

const { TabPane } = Tabs;

const Home = () => {
  return (
    <>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="FEATURED" key="1">
          <h1 className="featuredTitle">Today is the Day</h1>
          <div className="albums">
            {library.map((e) => {
              return <Link to="/album" key={e.title} state={e} className="albumSelection">
                <img
                  src={e.image}
                  alt="bull"
                  style={{ width: "150px", marginBottom: "10px" }}
                />
                <p>{e.title}</p>
              </Link>;
            })}
          </div>
        </TabPane>
        <TabPane tab="GENRE & MOODS" key="2">
        <h1 className="featuredTitle">Pop Hits</h1>
          <div className="albums">
            {library.slice(7, 13).map((e) => {
              return <Link to="/album" key={e.title} state={e} className="albumSelection">
                <img
                  src={e.image}
                  alt="bull"
                  style={{ width: "150px", marginBottom: "10px" }}
                />
                <p>{e.title}</p>
              </Link>;
            })}
          </div>
        </TabPane>
        <TabPane tab="NEW RELEASES" key="3">
        <h1 className="featuredTitle">Today is the Day</h1>
          <div className="albums">
            {library.map((e) => {
              return <Link to="/album" key={e.title} state={e} className="albumSelection">
                <img
                  src={e.image}
                  alt="bull"
                  style={{ width: "150px", marginBottom: "10px" }}
                />
                <p>{e.title}</p>
              </Link>;
            })}
          </div>
        </TabPane>
      </Tabs>
    </>
  );
};

export default Home;

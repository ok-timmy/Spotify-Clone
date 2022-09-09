import React, {useState} from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Album from "./pages/Album";
import "./App.css";
import { Layout } from "antd";
import Spotify from "./images/Spotify.png";
import { SearchOutlined, DownCircleOutlined } from "@ant-design/icons";
import AudioPlayer from "./components/AudioPlayer";

const { Footer, Sider, Content } = Layout;

const App = () => {
  const [nftAlbum, setNftAlbum] = useState()
  return (
    <Layout>
      <Layout>
      <Sider width={300} className="sideBar" style={{overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,}}>
        <img src={Spotify} alt="logo" className="logo" />
        <div className="searchBar">
          <span>Search</span>
          <SearchOutlined style={{ fontSize: "30px" }} />
        </div>

        <Link to="/">
          <p style={{ color: "#1DB954" }}>Home</p>
        </Link>
        <p>Your Music</p>
        <div className="recentPlayed">
          <p className="recentTitle">RECENTLY PLAYED</p>
          <div className="install">
            <span>Install App</span>
            <DownCircleOutlined style={{ fontSize: "30px" }} />
          </div>
        </div>
      </Sider>
      <Content className="contentWindow" style={{marginLeft:"300px"}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/album" element={<Album setNftAlbum={setNftAlbum}/>} />
        </Routes>
      </Content>
    </Layout>
    <Footer className="footer">
      {nftAlbum && <AudioPlayer nftAlbum={nftAlbum}/>}
    </Footer>
    </Layout>
  );
};

export default App;

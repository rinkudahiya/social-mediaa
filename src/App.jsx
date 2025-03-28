import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";
import WelcomeMsg from "./components/WelcomeMsg";

function App() {
  const [selectedTab, setselectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        
        <Sidebar 
          selectedTab={selectedTab}
          setselectedTab={setselectedTab}
        ></Sidebar>
        <div className="content">
          <Header
            selectedTab={selectedTab}
            setselectedTab={setselectedTab}
          ></Header>
          
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost selectedTab={selectedTab}
            setselectedTab={setselectedTab}></CreatePost>
          )}

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;

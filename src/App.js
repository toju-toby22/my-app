// import logo from './logo.svg';
import './App.css'
import React from 'react'
import avatarshare from "./icons-img/_Avatar share button.png"
import profilepic from "./icons-img/profile__img.png"
import github from "./icons-img/Icon.png"
import slack from "./icons-img/slack.png"
import Zuri from "./icons-img/Zuri.Internship_Logo (1).png"
import i4g from "./icons-img/I4G.png"
import menu from "./icons-img/_Avatar share button (1).png"

function App() {
  return (
    <div className="back">

      <div className='desktop-view'>
        <div className="first-page">

          <div className="share-avatar">
            <img className="avatar" src={avatarshare} alt="" />
          </div>

          <div className="picxusername">
            <img id="profile__img" className="image" src={profilepic} alt="" />
          </div>

          <p id="twitter" className="twitterusername">Toju_toby</p>
          <p id="slack" className="twitterusername" style={{ display: "none" }}>Toju_tobiliscious</p>





          <div className="link">
            <div className="linktree">

              <a id="btn__zuri" className="links" href="https://training.zuri.team/">Twitter Link</a>

              <a id="btn__zuri" className="links" href="https://training.zuri.team/">Zuri Team</a>

              <a id="books" className="links" href="http://books.zuri.team"
                title="This is where you find books about design and coding">Zuri Books</a>

              <a id="book__python" ref_id="Toju_tobiliscious" className="links" href="https://books.zuri.team/"
                title="A Deatailed book about Python. Click get the perfect guide for your Python journey">Python Books</a>

              <a id="pitch" className="links" href="https://background.zuri.team"
                title="This is where you find books about design and coding">Background Check for Coders</a>


              <a  className="links" href="https://books.zuri.team/design-rules">Design kihhBooks</a>




            </div>
          </div>

          <div className='social-icons'>
            <img id="profile__img" className="vector" src={slack} alt="" />
            <a href='https://github.com/toju-toby22'><img id="profile__img" className="icon" src={github} alt="" /></a>
          </div>


          <div className='footer'>
            <div className='middle'>
              <div className='container'>
                <img id="profile__img" className="vector" src={Zuri} alt="" />
                <p>HNG Internship 9 Frontend Task</p>
                <img id="profile__img" className="vector" src={i4g} alt="" />
              </div>

            </div>

          </div>
        </div>
      </div>

      <div className='Mobile-view'>
        <div className="first-page">

          <div className="share-avatar">
            <img className="avatar" src={menu} alt="" />
          </div>

          <div className="picxusername">
            <img id="profile__img" className="image" src={profilepic} alt="" />
          </div>

          <p id="twitter" className="twitterusername">Toju_toby</p>
          <p id="slack" className="twitterusername" style={{ display: "none" }}>Toju_tobiliscious</p>





          <div className="link">
            <div className="linktree">

              <a id="btn__zuri" className="links" href="https://twitter.com/Toju_toby?t=cldhJOuzZ5IDMuE05LBTnw&s=09">Twitter Link</a>

              <a id="btn__zuri" className="links" href="https://training.zuri.team/">Zuri Team</a>

              <a id="books" className="links" href="http://books.zuri.team"
                title="This is where you find books about design and coding">Zuri Books</a>

              <a id="book__python" ref_id="Toju_tobiliscious" className="links" href="https://books.zuri.team/"
                title="A Deatailed book about Python. Click get the perfect guide for your Python journey">Python Books</a>

              <a id="pitch" className="links" href="https://background.zuri.team"
                title="This is where you find books about design and coding">Background Check for Coders</a>


              <a id="book__design" className="links" href="https://books.zuri.team/design-rules"
                title="Free design book offered by Zuri. Very informative and detailed book that guides your steps in designing">Design Books</a>


            </div>
          </div>

          <div className='social-icons'>
            <img id="profile__img" className="vector" src={slack} alt="" />
            <a href='https://github.com/toju-toby22'><img id="profile__img" className="icon" src={github} alt="" /></a>
          </div>


          <div className='footer'>
            <div className='middle'>
              <div className='container'>
                <img id="profile__img" className="vector1" src={Zuri} alt="" />
                <p>HNG Internship 9 Frontend Task</p>
                <img id="profile__img" className="vector2" src={i4g} alt="" />
              </div>

            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default App;

// echo "# HNG-internship-Stage-1" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/toju-toby22/HNG-internship-Stage-1.git
// git push -u origin main
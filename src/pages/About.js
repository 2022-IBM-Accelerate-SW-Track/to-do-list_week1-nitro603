import React, { Component } from 'react';
import "./About.css";
import Image from 'src/assets/profile_pic_cristian.JPG';
  
export default class About extends Component {
  render() {
    return (
      <div>
      <div class="split left">
        <div className="centered">
          <img 
            className="profile_image"
            alt="Profile Pic" 
            src = {Image}
            ></img>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <div className="name_title">Your Name</div>
          <div className="brief_description">
            // Details about you goes here
          </div>
        </div>
      </div>
    </div>
    )
  }
}
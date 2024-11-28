import React from "react";
import { useSelector } from "react-redux";
import { GoPerson} from "react-icons/go";
import {BsTwitter } from "react-icons/bs";
function Notifications() {
  const { data } = useSelector((state) => state.currentProfile);
  const notifications = data.notifications;

  return notifications
    ? notifications.map((notification, idx) => {
        if (notification.type === "follow") {
          return (
            <div key={idx} className="notification display-flex align-items-c">
              <GoPerson />
              <p>{notification.message}</p>
            </div>
          );
        } else {
          return (
            <div key={idx} className="notification display-flex align-items-c">
              <BsTwitter />
              <p>{notification.message}</p>
            </div>
          );
        }
      })
    : "loading..";
}

export default Notifications;

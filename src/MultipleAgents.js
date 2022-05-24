import { useEffect, useState } from "react";
import MDSpinner from "react-md-spinner";
const agentUID = process.env.REACT_APP_AGENT_ID;
const appID = process.env.REACT_APP_ID;
const region = process.env.REACT_APP_REGION;
const AUTH_KEY = process.env.REACT_APP_AUTH_KEY;
const wid = process.env.REACT_APP_W2;

const MultipleAgents = () => {
    console.log("user : " + localStorage.getItem("cc-uid"))
  console.log("agent : " + localStorage.getItem("agent-uid"))
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.CometChatWidget.init({
      appID: appID,
      appRegion: region,
      authKey: AUTH_KEY,
    }).then(
      (response) => {
        console.log("Initialization completed successfully");
        //You can now call login function.
        let agent_uid = localStorage.getItem("agent-uid");
        if (agent_uid === null || agent_uid == "") {
            // create new user
            // const uid = "agent" + new Date().getSeconds().toString();
            const uid = localStorage.getItem("agent-uid")
            const user = new window.CometChatWidget.CometChat.User(uid);
            user.setName(uid);
            window.CometChatWidget.createOrUpdateUser(user).then((user) => {
              // Proceed with user login
    
              console.log("user is = ", user)
    
              window.CometChatWidget.login({
                uid: uid,
              }).then((loggedInUser) => {
                localStorage.setItem("agent-uid", loggedInUser.uid);
                // Proceed with launching your Chat Widget
                window.CometChatWidget.launch({
                  widgetID: wid,
                  target: "#cometchat",
                  roundedCorners: "true",
                  height: "600px",
                  width: "100%",
                  defaultID: "",
                  defaultType: "user", //user or group
                });
                setLoading(false);
                console.log(loggedInUser)
              });
            });
          }
        else{
            window.CometChatWidget.login({
            uid: agent_uid,
            }).then(
            (response) => {
                window.CometChatWidget.launch({
                widgetID: wid,
                target: "#cometchat",
                roundedCorners: "true",
                height: "600px",
                width: "100%",
                defaultID: "", //default UID (user) or GUID (group) to show,
                defaultType: "user", //user or group
                });
                setLoading(false);
                console.log(response)
            },
            (error) => {
                console.log("User login failed with error:", error);
                //Check the reason for error and take appropriate action.
            }
            );
            console.log(response)
        }
        
      },
      (error) => {
        console.log("Initialization failed with error:", error);
        //Check the reason for error and take appropriate action.
      }

    );


  }, []);
  if (loading) {
    return (
      <div>
        <MDSpinner />
      </div>
    );

  }
  return <div id="cometchat" style={{ margin: "0 auto", width: "60%" }} />;
};

export default MultipleAgents;
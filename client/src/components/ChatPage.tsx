import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Wave } from "react-animated-text";

const WelcomeHeader = styled(Typography)`
  margin: 2rem;
  font-style: italic;
`;

const NameBox = styled(TextField)`
  margin: 2rem;
  margin-top: 0rem;
  min-width: 50%;
`;

const InputBox = styled(TextField)`
  margin: 2rem;
  margin-top: 0rem;
  min-width: 90%;
`;

const ChatBox = styled(TextField)`
  margin: 2rem;
  width: 90%;
  box-shadow: 5px 10px 8px 10px #888888;
`;

const SendButton = styled(Button)`
  margin: 2rem;
  margin-top: 0rem;
  float: left;
`;

type Message = {
  text: string;
  name: string;
  date: number;
  id: number;
};

export default function ChatPage() {
  const [messages, setMessages] = useState([] as Message[]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [currentName, setCurrentName] = useState("");

  useEffect(() => {
    const onLoad = async () => {
      const res = await fetch(`/api/message`);
      const json = await res.json();
      setMessages(json);
      console.log(json);
    };

    onLoad();
  }, []);

  const handleNameChange = (event: any) => {
    setCurrentName(event.target.value);
  };

  const handleMessageChange = (event: any) => {
    setCurrentMessage(event.target.value);
  };

  const handleSend = async () => {
    const body = {
      name: currentName,
      message: currentMessage,
    };

    console.log(JSON.stringify(body))
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    const res = await fetch(`/api/message`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: headers,
    });
    const json = await res.json();
    console.log(json);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <WelcomeHeader variant="h5">
            {" "}
            Welcome to the Livongo Chat room!
          </WelcomeHeader>
          <NameBox
            id="name-box"
            label="Name"
            placeholder="(25 character max)"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{ maxLength: 25 }}
            variant="outlined"
            onChange={handleNameChange}
          />
          <InputBox
            id="input-box"
            label="Message"
            placeholder="(100 character max)"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{ maxLength: 100 }}
            variant="outlined"
            onChange={handleMessageChange}
          />
          <SendButton
            onClick={handleSend}
            variant="outlined"
            size="small"
            color="primary"
            disabled={!currentName.length || !currentMessage.length}
          >
            Send
          </SendButton>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ChatBox
            id="chat-box"
            multiline
            disabled={true}
            rows={35}
            placeholder="No Messages"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </Grid>
      </Grid>
    </>
  );
}

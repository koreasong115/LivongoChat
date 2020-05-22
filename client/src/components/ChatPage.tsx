import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

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
  message: string;
  name: string;
  created: number;
  id: number;
};

export default function ChatPage() {
  const [formattedMessages, setFormattedMessages] = useState("");
  const [messages, setMessages] = useState([] as Message[]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [currentName, setCurrentName] = useState("");

  const formatMessage = (post: Message) => {
    const name = post.name;
    const date = new Date(post.created).toLocaleString();
    const text = post.message;
    return `${name} (${date}): ${text}\n\n`;
  };

  useEffect(() => {
    const onLoad = async () => {
      const res = await fetch(`/api/message`);
      const json = await res.json();
      setMessages(json);
      setFormattedMessages(formatMessages(json));
    };

    onLoad();

    const formatMessages = (msgs: Message[]) => {
      msgs.sort((msg1, msg2) => {
        return msg2.created - msg1.created;
      });

      const formedMsgs = msgs.map((post: any) => {
        return formatMessage(post);
      });
      return formedMsgs.join("");
    };
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
    messages.unshift(json);
    setFormattedMessages(formatMessage(json) + formattedMessages);
    setCurrentMessage("");
    return json;
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
            value={currentName}
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
            value={currentMessage}
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
            placeholder="Empty Message History"
            InputLabelProps={{
              shrink: true,
            }}
            value={formattedMessages}
            variant="outlined"
          />
        </Grid>
      </Grid>
    </>
  );
}

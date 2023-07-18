import React from "react";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { blue, red } from "@mui/material/colors";
import { convertTerritory } from "../Functions";
import VoteMenuList from "./VotesMap";
import BillBlurbMap from "../Bills/BillBlurbMap";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LanguageIcon from "@mui/icons-material/Language";
import FeedIcon from '@mui/icons-material/Feed';
import { Box } from "@mui/material";

const CongressMemberPage = ({ rep, bills, votes, role }) => {
  let backColor;
  rep.current_party === "D"
    ? (backColor = blue[500])
    : rep.current_party === "R"
    ? (backColor = red[500])
    : null;

  let iconColor="grey"
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        backgroundColor: "primary",
        borderRadius: "4dp",
        boxShadow: 1,
      }}
    >
      <Avatar
        align="center"
        src={rep.avatarUrl}
        alt={`${rep.firstName} ${rep.lastName}`}
        sx={{
          width: "80px",
          height: "80px",
          margin: "16px",
          backgroundColor: backColor,
        }}
      />
      <Typography
        align="center"
        variant="h2"
      >{`${rep.first_name} ${rep.last_name}`}</Typography>
      <Typography align="center" variant="h4">{`State: ${convertTerritory(
        role.state
      )}`}</Typography>
      <Typography
        align="center"
        variant="h4"
      >{`Role: ${role.title}`}</Typography>
      {/* <Typography
        align="center"
        variant="h4"
      >{`Total Votes: ${role.total_votes}`}</Typography> */}
      {/* <Typography align='center' variant="h4">{`Missed Votes: ${role.missed_votes}`}</Typography> */}
      {/* <Typography
        align="center"
        variant="h4"
      >{`They've missed ${role.missed_votes_pct}% of votes`}</Typography> */}
      <Box>
        <IconButton
          component="a"
          href={`facebook.com/${rep.facebook}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon
            style={{ height: "60px", width: "auto", color: iconColor }}
          />
        </IconButton>
        <IconButton
          component="a"
          href={`twitter.com/${rep.twitter_account}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon
            style={{ height: "60px", width: "auto", color: iconColor }}
          />
        </IconButton>
        <IconButton
          component="a"
          href={`twitter.com/${rep.youtube_account}`}
          target="_blank"
          // rel="noopener noreferrer"
        >
          <YouTubeIcon
            style={{ height: "60px", width: "auto", color: iconColor }}
          />
        </IconButton>
        <IconButton
          component="a"
          href={`${rep.url}`}
          target="_blank"
          // rel="noopener noreferrer"
        >
          <LanguageIcon
            style={{ height: "60px", width: "auto", color: iconColor }}
          />
        </IconButton>
        <IconButton
          component="a"
          href={`${rep.times_topics_url}`}
          target="_blank"
          // rel="noopener noreferrer"
        >
          <FeedIcon
            style={{ height: "60px", width: "auto", color: iconColor }}
          />
        </IconButton>
      </Box>

      <List>
        <h3> Recent Bill Sponsorship </h3>
        {bills ? (
          bills.map((bill, index) => <BillBlurbMap bill={bill} />)
        ) : (
          <Box>
            <Typography
              variant="h4"
              sx={{ fontSize: "20px", fontWeight: "bold" }}
            >
              Loading your congresspeople....
            </Typography>
          </Box>
        )}
        <h3> Recent Votes </h3>
        {votes.map((vote) => vote.bill.title && <VoteMenuList vote={vote} />)}
      </List>
    </Box>
  );
};

export default CongressMemberPage;

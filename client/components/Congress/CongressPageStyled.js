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
import FeedIcon from "@mui/icons-material/Feed";
import { Box } from "@mui/material";

const CongressMemberPage = ({ rep, bills, votes, role }) => {
  let backColor;
  rep.current_party === "D"
    ? (backColor = blue[500])
    : rep.current_party === "R"
    ? (backColor = red[500])
    : null;

  let iconColor = "grey";
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px",
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
      <Box sx={{ padding: "40px" }}>
        <IconButton
          component="a"
          href={`https://www.facebook.com/${rep.facebook_account}`}
          target="_blank"
        >
          <FacebookIcon
            style={{ height: "60px", width: "auto", color: iconColor }}
          />
        </IconButton>
        <IconButton
          component="a"
          href={`https://www.twitter.com/${rep.twitter_account}`}
          target="_blank"
        >
          <TwitterIcon
            style={{ height: "60px", width: "auto", color: iconColor }}
          />
        </IconButton>
        <IconButton
          component="a"
          href={`https://www.youtube.com/${rep.youtube_account}`}
          target="_blank"
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
        >
          <FeedIcon
            style={{ height: "60px", width: "auto", color: iconColor }}
          />
        </IconButton>
      </Box>
      <Typography align="center" variant="h5">
        Some bills may repeat. This means that there have been different actions
        on the same bill.
      </Typography>
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

//  const fetchSingleMember = async (memberId) => {
//   //single member
//   const memberResponse = await axios.get(
//     `https://api.propublica.org/congress/v1/members/${memberId}.json`,
//     config
//   );

//   setSingleMember(memberResponse.data.results[0]);
// };

// const fetchSingleMemberBills = async (memberId) => {
//   //bills introduced
//   const billsIntroResponse = await axios.get(
//     `https://api.propublica.org/congress/v1/members/${memberId}/bills/introduced.json`,
//     config
//   );

//   setBillsByMember(billsIntroResponse.data.results[0].bills);
// };

// const fetchSingleMemberVotes = async (memberId) => {
//   const votesResponse = await axios.get(
//     `https://api.propublica.org/congress/v1/members/${memberId}/votes.json`,
//     config
//   );

//   setVotesByMember(votesResponse.data.results[0].votes);
// };

// fetchSingleMember(CongressId);

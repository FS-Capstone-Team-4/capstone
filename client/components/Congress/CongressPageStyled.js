import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { blue, red } from "@mui/material/colors";
import { formatDate, convertTerritory } from "../Functions";
import MenuList from "../Bills/BillsMap";
import VoteMenuList from "./VotesMap";

const useStyles = makeStyles((theme) => ({
  senatorCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: theme.spacing(2),
  },
  listItem: {
    padding: 0,
  },
  listItemText: {
    margin: 0,
  },
  republican: {
    backgroundColor: red[500],
  },
  democrat: {
    backgroundColor: blue[500],
  },
}));

const CongressMemberPage = ({ rep, bills, votes, role }) => {
  const classes = useStyles();

  return (
    <div className={classes.senatorCard}>
      <Avatar
        className={
          rep.current_party === "D"
            ? classes.democrat
            : rep.current_party === "R"
            ? classes.republican
            : null
        }
        src={rep.avatarUrl}
        alt={`${rep.firstName} ${rep.lastName}`}
      />
      <Typography variant="h2">{`${rep.first_name} ${rep.last_name}`}</Typography>
      <Typography variant="h4">{`State: ${convertTerritory(role.state)}`}</Typography>
      <Typography variant="h4">{`Role: ${role.title}`}</Typography>
      <Typography variant="h4">{`Total Votes: ${role.total_votes}`}</Typography>
      <Typography variant="h4">{`Missed Votes: ${role.missed_votes}`}</Typography>
      <Typography variant="h4">{`They've missed ${role.missed_votes_pct}% of votes`}</Typography>

      <List>
        <h3> Recent Bill Sponsorship </h3>
        {bills? bills.map((bill, index) => (
      <MenuList bill = {bill}/>
      )): ""}
        <h3> Recent Votes </h3>
        {votes.map((vote) => (
          <VoteMenuList vote={vote} />
        ))}
      </List>
    </div>
  );
};

export default CongressMemberPage;

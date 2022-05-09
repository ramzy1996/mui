import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box
        position={"fixed"}
        sx={{
          overflowY: "scroll",
          top: "80px",
          bottom: 0,
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
        width={300}
      >
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={6}>
          <Avatar
            alt="Jackie"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Jackie_Chan_Berlinale_2010_%28cropped%29.jpg"
          />
          <Avatar
            alt="Chan"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Jackie_Chan_Cannes_2013.jpg"
          />
          <Avatar />
          <Avatar />
          <Avatar
            alt="Cindy Baker"
            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/US_Navy_021202-N-0271M-016_Jackie_Chan_tries_on_a_fighter_pilot%27s_helmet_with_night_vision_goggles_attached_during_his_visit_aboard_USS_Kitty_Hawk_%28cropped%29.jpg"
          />
          <Avatar
            alt="Vijay"
            src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Jackie-vj.png"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Jackie_Chan_2012_Chinese_zodiac.jpg"
          />
          <Avatar
            alt="Forigner"
            src="https://upload.wikimedia.org/wikipedia/commons/9/9b/London_Conference_on_The_Illegal_Wildlife_Trade_%2812487878365%29.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photoes
        </Typography>
        <ImageList gap={5} cols={3} rowHeight={100}>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;

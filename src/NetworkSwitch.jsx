import React from "react";
import { Dialog, DialogContent, Box, Slide, Button } from "@mui/material";
import { withStyles } from "@mui/styles";
import { useSwitchNetwork } from "wagmi";
// import { StyledButton } from "./components/SmallComponents/AppComponents";

// eslint-disable-next-line react/display-name
const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StyledModal = withStyles(() => ({
  root: {
    "& .MuiDialog-root": {
      zIndex: "1301 !important",
    },
    "&.MuiDialog-container": {
      overflowY: "hidden !important",
    },
    "& .MuiDialog-paperScrollPaper": {
      backgroundColor: "black",
      height: "auto",
      boxShadow: "black 0px 0px 8px 1px",
      //   border: "5px solid black",
      borderRadius: "10px",
    },
    "& .dialoge__content__section": {
      background: "black!important",
      borderRadius: "10px",
      border: "1px solid transparent",
    },
    "& .MuiDialogContent-root": {
      paddingTop: "20px",
      paddingBottom: "20px",
    },
  },
}))(Dialog);

export default function NetworkSwitch({ open, setOpen }) {
  const { switchNetwork } = useSwitchNetwork(1);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="modal__main__container">
      <StyledModal
        open={open}
        keepMounted
        TransitionComponent={Transition}
        onClose={handleClose}
        // eslint-disable-next-line jsx-a11y/aria-props
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent className="dialoge__content__section">
          <Box
            borderRadius="100px"
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Box
              borderBottom="5px solid red"
              color="red"
              fontSize="30px"
              fontFamily="GiloryBold"
              fontWeight="600"
            >
              Error!
            </Box>
            <Box my={2} color="#fff" fontSize="400" fontFamily="GiloryBold">
              {" "}
              You are on wrong network please switch your network.
            </Box>
            <Button
              col="#000000"
              bgcolor="#ffffff"
              width="200px"
              onClick={() => {
                switchNetwork(1);
                setOpen(false);
              }}
            >
              Switch Network
            </Button>
          </Box>
        </DialogContent>
      </StyledModal>
    </div>
  );
}

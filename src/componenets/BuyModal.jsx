import React, { useCallback, useContext, useEffect, useState } from "react";
import {
  Box,
  Dialog,
  Divider,
  IconButton,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useWeb3Modal } from "@web3modal/react";
import { formatUnits, parseUnits } from "@ethersproject/units";

import ButtonMain from "./ButtonMain";
import ButtonBorder from "./ButtonBorder";
import { btc, eth } from "../assets";
import { CustomField } from "./CustomInput";
import {
  preSaleReadFunction,
  preSaleWriteFunction,
  usdtReadFunction,
  usdtWriteFunction,
} from "../ConnectivityAssets/hooks";
import { AppContext } from "../utils";
import Loading from "../ConnectivityAssets/loading";
import Toastify from "../ConnectivityAssets/Toastify";
import { preSaleAddress } from "../ConnectivityAssets/environment";

// eslint-disable-next-line react/display-name
const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

// eslint-disable-next-line camelcase
const SearchModal = ({ open, setOpen, toggelModel, init_1 }) => {
  const [activeCurrency, setActiveCurrency] = useState("eth");
  const [amount, setamount] = useState();
  const [soldTokens, setsoldTokens] = useState();
  const handleClose = () => setOpen(false);
  const { account } = useContext(AppContext);
  const { open: connect } = useWeb3Modal();

  const [loading, setLoading] = React.useState(false);
  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    severity: undefined,
  });
  const showToast = (msg, type) => {
    return setAlertState({
      open: true,
      message: msg,
      severity: type,
    });
  };

  const init = useCallback(async () => {
    try {
      const data = await preSaleReadFunction("soldToken");
      console.log(formatUnits(data), "test");
      setsoldTokens(formatUnits(data, 9));
    } catch (error) {
      console.log(error, "errrrrrrrrrrrrorrrrrrrr======<<<<<");
    }
  }, []);

  useEffect(() => {
    init();
  }, [init]);

  // ----------------------------------BUY TOKEN---------------------------

  const buyHandler = async (e) => {
    e.preventDefault();

    // ----------------------------------Validations---------------------------

    if (isNaN(Number(amount))) {
      setAlertState({
        open: true,
        message: "Invalid input!",
        severity: "error",
      });
      return;
    }
    if (activeCurrency === "eth" && Number(amount) < 0.0006) {
      setAlertState({
        open: true,
        message: "The minimum amount to buy is 0.00060 ETH!",
        severity: "error",
      });
      return;
    }
    if (activeCurrency === "usdt" && Number(amount) < 1) {
      setAlertState({
        open: true,
        message: "The minimum amount to buy is 1 USDT!",
        severity: "error",
      });
      return;
    }

    // ----------------------------------BUY start---------------------------

    try {
      setLoading(true);
      // ----------------------------------BUY WITH ETH---------------------------
      if (activeCurrency === "eth") {
        await preSaleWriteFunction("buyTokenEth", [], parseUnits(amount));
      } else {
        // ----------------------------------BUY With USDT---------------------------
        const allow = await usdtReadFunction("allowance", [
          account,
          preSaleAddress,
        ]);

        console.log("Allow", allow);

        if (Number(formatUnits(allow)) === 0) {
          await usdtWriteFunction("approve", [
            preSaleAddress,
            "1000000000000000000000000000000000000000000000000000",
          ]);
        }

        await preSaleWriteFunction("buyTokenUSDT", [parseUnits(amount, 6)]);
      }

      setLoading(false);
      showToast("Transaction Completed!", "success");
      init_1();
      init();
    } catch (error) {
      setLoading(false);
      if (error?.data?.message) {
        showToast(error?.data?.message, "error");
      } else if (error?.reason) {
        showToast(error?.reason, "error");
      } else {
        showToast(error?.message, "error");
      }
    }
  };

  return (
    <>
      <Loading isLoading={loading} />
      <Toastify setAlertState={setAlertState} alertState={alertState} />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        fullWidth
        maxWidth="sm"
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          "& .MuiDialog-paper": {
            // background: "linear-gradient(180deg,#4c8185 0%, #1e1e1e 50%)",
            background: "#121618",
            backdropFilter: "blur(5px)",
            borderRadius: "15px",
            border: "2px solid transparent",
            padding: "30px",
            zIndex: 1,
          },
        }}
      >
        <Box display="flex" justifyContent="flex-end">
          <IconButton onClick={toggelModel}>
            <CloseIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Box>

        <Box>
          <Typography sx={{ color: "#58C5DA", textAlign: "center" }}>
            Total Sold: {Number(soldTokens).toFixed(4) ?? 0.0} $RGPL
          </Typography>
          <Divider sx={{ my: 2 }}>1 RugPull $RGPL = 0.028USD </Divider>
          <Stack direction="row" gap={2}>
            <ButtonBorder
              onClick={() => setActiveCurrency("eth")}
              sx={{
                width: "100%",
                backgroundColor:
                  activeCurrency === "eth" ? "#58C5DA" : "primary",
              }}
              variant="outlined"
              startIcon={<img src={eth} alt="eth logo" width="30px" />}
            >
              ETH
            </ButtonBorder>
            <ButtonBorder
              onClick={() => setActiveCurrency("usdt")}
              sx={{
                width: "100%",
                backgroundColor:
                  activeCurrency === "usdt" ? "#58C5DA" : "primary",
              }}
              variant="outlined"
              startIcon={<img src={btc} alt="btc logo" width="30px" />}
            >
              USDT
            </ButtonBorder>
          </Stack>
          <Divider
            sx={{
              marginTop: "20px", // Set the desired margin top value
              height: "1px",
              background: "#c0c0c0",
            }}
          />
          <form onSubmit={buyHandler}>
            <Box>
              <Typography my={1}>
                Enter Amount in <b>{activeCurrency.toUpperCase()}</b>
              </Typography>
              <CustomField
                onChange={(e) => setamount(e.target.value)}
                name="amount"
                //   value={"price"}
                placeholder="0"
                image={activeCurrency === "eth" ? eth : btc}
              />
            </Box>
            <Typography align="center" mt={3}>
              Every token sold 0.028USD price
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              gap={3}
              mt={5}
              mx={{ xs: 0, md: 5 }}
            >
              {account ? (
                <ButtonMain type="submit" sx={{ borderRadius: "30px" }}>
                  Buy
                </ButtonMain>
              ) : (
                <ButtonMain onClick={connect} sx={{ borderRadius: "30px" }}>
                  Connect Wallet
                </ButtonMain>
              )}
            </Box>
          </form>
        </Box>
      </Dialog>
    </>
  );
};

export default SearchModal;

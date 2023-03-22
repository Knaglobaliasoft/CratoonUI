import React, { useState } from 'react'
import { Box, Button, Modal, Typography } from '@mui/material'
import CloseIcon from "@mui/icons-material/Close";
import walletlogo from "../../Assets/Images/logo.webp";
import message from "../../Assets/Images/message.svg";
import Solflare from "../../Assets/Images/solfaresvg.svg";
import ledger from "../../Assets/Images/ledgersvg.svg";
import slope from "../../Assets/Images/slope.svg";
import sollet from "../../Assets/Images/sollet.svg";
import solong from "../../Assets/Images/solong.png";
import mathwallet from "../../Assets/Images/mathwallet.svg";
import coin from "../../Assets/Images/coin.svg";
import ArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import './WalletModal.css'

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 360,
    bgcolor: "#2c2d30",
    boxShadow: 24,
    p: "40px 20px 10px",
    borderRadius: "10px",
    height: "fit-content"
};

const WalletModal = ({ setmodal, modal, setIcon }) => {
    const [data, setData] = useState(true);
    return (
        <Modal
            open={modal}
            onClose={() => setmodal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Box className="connect_wallet">
                    <Box className="logo">
                        <img src={walletlogo} alt="walletlogo" />
                    </Box>
                    <Typography variant="h1">Connect Wallet</Typography>

                    <Box className="walletlist">
                        <Button onClick={()=>{setIcon(message);setmodal(false)}}>
                            <Typography>Phantom</Typography>
                            <img src={message} alt="message" />
                        </Button>
                        <Button onClick={()=>{setIcon(Solflare); setmodal(false)}}>
                            <Typography>Solflare</Typography>
                            <img src={Solflare} alt="Solflare" />
                        </Button>
                        <Button onClick={()=>{setIcon(ledger);setmodal(false)}}>
                            <Typography>Ledger</Typography>
                            <img src={ledger} alt="ledger" />
                        </Button>
                    </Box>
                    <Box
                        className={
                            data ? "walletlist newwallet" : "walletlist"
                        }
                    >
                        <Button onClick={()=>{setIcon(slope);setmodal(false)}}>
                            <Typography>Slope</Typography>
                            <img src={slope} alt="slope" />
                        </Button>
                        <Button onClick={()=>{setIcon(sollet);setmodal(false)}}>
                            <Typography>Sollet</Typography>
                            <img src={sollet} alt="sollet" />
                        </Button>
                        <Button onClick={()=>{setIcon(solong);setmodal(false)}}>
                            <Typography>Solong</Typography>
                            <img src={solong} alt="solong" />
                        </Button>
                        <Button onClick={()=>{setIcon(mathwallet);setmodal(false)}}>
                            <Typography>MathWallet</Typography>
                            <img src={mathwallet} alt="mathwallet" />
                        </Button>
                        <Button onClick={()=>{setIcon(coin); setmodal(false)}}>
                            <Typography>Coin98</Typography>
                            <img src={coin} alt="coin" />
                        </Button>
                    </Box>
                    <Box className="walletlist">
                        <Button onClick={() => setData(!data)}>
                            <Typography>
                                {data ? "More" : "Less"} options
                            </Typography>
                            {data ? <ArrowDownIcon /> : <ArrowUpIcon />}
                        </Button>
                    </Box>
                    <Box className="close">
                        <Button onClick={() => setmodal(false)}>
                            <CloseIcon />
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Modal>
    )
}

export default WalletModal

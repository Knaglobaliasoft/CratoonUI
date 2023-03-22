import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import ScrollToTop from "react-scroll-to-top";
import { Link } from 'react-router-dom';
import PoweredBy from '../../Assets/Images/poweredBy.png';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import logo from '../../Assets/Images/Logo.svg';
import WalletModal from '../WalletModal/WalletModal';
import ArrowTop from '../../Assets/Images/ArrowTop.svg'
import HeaderStyle from './HeaderStyle';

const Header = () => {
    const [sidebar, setSidebar] = useState(false);
    const [modal, setmodal] = useState(false);
    const [walletIcon, setWalletIcon] = useState("");
    const [dark, setDark] = useState(false);
    return (
        <HeaderStyle>
            <Box className="header-main">
                <Box className="menu-bar" onClick={() => setSidebar(true)}>
                    <MenuOutlinedIcon />
                </Box>
                <Box className="left-content">
                    <Box className="logo">
                        <img src={logo} alt="" />
                    </Box>
                    <Box className="network">
                        <Typography variant='h4'>Solana Network: <Typography> 3851 TPS</Typography></Typography>
                        <Box className='create-powered'>
                            <img src={PoweredBy} alt="" />
                            <Box>
                                <Typography variant='h4'>POWERED BY</Typography>
                                <Typography>FAMOUS FOX FEDERATION</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className="right-content">
                    <button className='dark-mode' onClick={() => setDark(!dark)}>
                        {dark ? <Brightness7Icon /> : <DarkModeOutlinedIcon />}
                    </button>
                    <Link to="/create" className='create-raffle'>
                        <AddCircleOutlineOutlinedIcon />
                        Create Raffle
                    </Link>
                    <button className='select-wallet' onClick={() => setmodal(true)}>
                        {walletIcon ? <img src={walletIcon} alt="" /> : ''}{walletIcon ? 'Connect' : 'Select Wallet'}
                    </button>
                    <WalletModal setmodal={setmodal} setIcon={setWalletIcon} modal={modal} />
                </Box>
                {sidebar ? <Box className='back-blur' onClick={() => setSidebar(false)}></Box> : ''}
            </Box>
            <Box className={sidebar ? "sidebar-main open" : "sidebar-main"}>
                <Box className='start-side'>
                    <button onClick={() => setSidebar(false)} className='close-sidebar'><CloseOutlinedIcon /></button>
                    <img src={logo} alt="" />
                </Box>
                <button className='select-wallet' onClick={() => setmodal(true)}>
                    {walletIcon ? <img src={walletIcon} alt="" /> : ''}{walletIcon ? 'Connect' : 'Select Wallet'}
                </button>
                <Link to="/create" className='create-raffle'>
                    <AddCircleOutlineOutlinedIcon />
                    Create Raffle
                </Link>
                <button className='create-raffle'>
                    <HomeOutlinedIcon />
                    Raffles Home
                </button>
                <button className='create-raffle'>
                    <HelpOutlineOutlinedIcon />
                    Buyers' Guide
                </button>
            </Box>
            <Box className='bottom-top'>
                <ScrollToTop smooth component={<KeyboardTabIcon />} />
            </Box>
        </HeaderStyle>
    )
}

export default Header;

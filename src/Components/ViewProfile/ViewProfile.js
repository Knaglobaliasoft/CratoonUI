import React, { useState } from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter';
import ViewProfileStyle from './ViewProfileStyle'
import { Link } from 'react-router-dom';
import bvdcat from "../../Assets/Images/bvdcat.webp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CheckIcon from "@mui/icons-material/Check";

const ViewProfile = () => {

    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive((current) => !current);
    };

    return (
        <ViewProfileStyle>
            <Box className="main-profile">
                <Box className='heading'>
                    <Typography variant='h2'>USER PROFILE</Typography>
                </Box>
                <Box className='user_box'>
                    <Box className='box_heading'>
                        <Typography variant='h4'>sanlinoo202</Typography>
                        <Typography><TwitterIcon /></Typography>
                    </Box>
                    <Box className='box_detalis'>
                        <Box className='title'>
                            <Typography className='title_main'>Twitter Username</Typography>
                            <Box className='link'>
                                <Link>sanlinoo202</Link>
                            </Box>
                        </Box>
                        <Box className='title'>
                            <Typography className='title_main'>Wallet</Typography>
                            <Box className='link'>
                                <Link>6UPQ...bVGM</Link>
                            </Box>
                        </Box>
                        <Box className='title'>
                            <Typography className='title_main'>No. of Raffles Created</Typography>
                            <Box className='link'>
                                <Typography>2</Typography>
                            </Box>
                        </Box>
                        <Box className='title'>
                            <Typography className='title_main'>FFF Holder</Typography>
                            <Box className='link'>
                                <Typography className='orange_dot'></Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className='card'>
                    <Grid container spacing={2}>
                        <Grid item md={4} sm={6}>
                            <Box className="features">
                                <Box className="slider">
                                    <Box className="feature_card">
                                        <Box className="SolStein_img">
                                            <img src={bvdcat} alt="bvdcat" />
                                            <Box className="favorite">
                                                <Button>
                                                    <FavoriteIcon
                                                        style={{
                                                            color: isActive ? "red" : "",
                                                            color: isActive ? "#F87171" : ""
                                                        }}
                                                        onClick={handleClick}
                                                    />
                                                </Button>
                                            </Box>
                                        </Box>
                                        <Box className="review">
                                            <Box className="check">
                                                <Typography variant="h4">Bvdcat</Typography>
                                                <CheckIcon />
                                            </Box>
                                            <Typography variant="h3">BVDCAT #9190</Typography>
                                            <Box className="ticket_ramin">
                                                <Box className="ticket">
                                                    <Typography variant="h6">2EDn...fmiA</Typography>
                                                    <Typography>Tickets Remaining</Typography>
                                                    <Typography variant="h2">142 / 150</Typography>
                                                </Box>
                                                <Box className="price">
                                                    <Typography>Price/Ticket</Typography>
                                                    <Typography variant="h2">2 DUST</Typography>
                                                </Box>
                                            </Box>
                                            <Box className="viewrafffle">
                                                <Button>
                                                    <Typography variant="h2">View Raffle</Typography>
                                                    <Typography>Ends in 9 hrs 23 mins 9 s</Typography>
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={4} sm={6}>
                            <Box className="features">
                                <Box className="slider">
                                    <Box className="feature_card">
                                        <Box className="SolStein_img">
                                            <img src={bvdcat} alt="bvdcat" />
                                            <Box className="favorite">
                                                <Button>
                                                    <FavoriteIcon
                                                        style={{
                                                            color: isActive ? "red" : "",
                                                            color: isActive ? "#F87171" : ""
                                                        }}
                                                        onClick={handleClick}
                                                    />
                                                </Button>
                                            </Box>
                                        </Box>
                                        <Box className="review">
                                            <Box className="check">
                                                <Typography variant="h4">Bvdcat</Typography>
                                                <CheckIcon />
                                            </Box>
                                            <Typography variant="h3">BVDCAT #9190</Typography>
                                            <Box className="ticket_ramin">
                                                <Box className="ticket">
                                                    <Typography variant="h6">2EDn...fmiA</Typography>
                                                    <Typography>Tickets Remaining</Typography>
                                                    <Typography variant="h2">142 / 150</Typography>
                                                </Box>
                                                <Box className="price">
                                                    <Typography>Price/Ticket</Typography>
                                                    <Typography variant="h2">2 DUST</Typography>
                                                </Box>
                                            </Box>
                                            <Box className="viewrafffle">
                                                <Button>
                                                    <Typography variant="h2">View Raffle</Typography>
                                                    <Typography>Ends in 9 hrs 23 mins 9 s</Typography>
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </ViewProfileStyle>
    )
}

export default ViewProfile
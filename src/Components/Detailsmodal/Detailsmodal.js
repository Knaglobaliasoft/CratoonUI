import React from 'react'
import { Box, Button, Grid, Modal, Typography } from '@mui/material'
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Link } from 'react-router-dom';
import tripin from "../../Assets/Images/tripin.webp";
import CheckIcon from "@mui/icons-material/Check";
import sicon from "../../Assets/Images/SIcon.svg";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    bgcolor: "#362544",
    boxShadow: 24,
    p: "34px 30px 100px",
    borderRadius: "14px",
    height: "fit-content",
    border: "4px solid #785296"
};

const Detalismodal = ({ open, setOpen }) => {

    return (
        <>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="viewdetails">
                    <Box className="visibialedetail">
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Box className="viewimage">
                                    <img
                                        src={tripin}
                                        alt="tripin"
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box className="viewdetail">
                                    <Box className="checkdetail">
                                        <Typography>
                                            Trippin Ape Tribe
                                        </Typography>
                                        <CheckIcon />
                                    </Box>
                                    <Typography variant="h1">
                                        Trippin' Ape Tribe #9500
                                    </Typography>
                                    <Box className="view">
                                        <img
                                            src={sicon}
                                            alt="sicon"
                                        />
                                        <Link>
                                            View on Solscan
                                        </Link>
                                    </Box>
                                    <Box className="viewimagedetail">
                                        <Grid
                                            container
                                            spacing={2}
                                        >
                                            <Grid
                                                item
                                                xs={12}
                                                sm={6}
                                            >
                                                <Box className="background">
                                                    <Box className="solscan">
                                                        <Typography variant="h3">
                                                            Background
                                                        </Typography>
                                                        <Typography>
                                                            Mint
                                                        </Typography>
                                                    </Box>
                                                    <Box className="solscan">
                                                        <Typography variant="h3">
                                                            Outfit
                                                        </Typography>
                                                        <Typography>
                                                            Groovy
                                                            Green
                                                        </Typography>
                                                    </Box>
                                                    <Box className="solscan">
                                                        <Typography variant="h3">
                                                            Eyes
                                                        </Typography>
                                                        <Typography>
                                                            Alert Blue
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            <Grid
                                                item
                                                xs={12}
                                                sm={6}
                                            >
                                                <Box className="background">
                                                    <Box className="solscan">
                                                        <Typography variant="h3">
                                                            Body
                                                        </Typography>
                                                        <Typography>
                                                            Drippy Pink
                                                        </Typography>
                                                    </Box>
                                                    <Box className="solscan">
                                                        <Typography variant="h3">
                                                            Face
                                                        </Typography>
                                                        <Typography>
                                                            Gold Grill
                                                        </Typography>
                                                    </Box>
                                                    <Box className="solscan">
                                                        <Typography variant="h3">
                                                            Hat
                                                        </Typography>
                                                        <Typography>
                                                            Beanie
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                        <Box className="closemodal">
                            <Button
                                onClick={() => setOpen(false)}
                            >
                                <HighlightOffIcon />
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}

export default Detalismodal
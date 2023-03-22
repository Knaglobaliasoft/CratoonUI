import React from 'react'
import { Box, Typography } from '@mui/material'
import CreateNewRaffleStyle from './CreateNewRaffleStyle'

const CreateNewRaffle = () => {
    return (
        <CreateNewRaffleStyle>
            <Box className="main-create">
                <Typography className="title" variant="h2">CREATE NEW RAFFLE</Typography>
                <Box className="wallet-detect">
                    <Typography variant="h4">No wallet detected</Typography>
                    <Typography>Please connect your wallet to continue.</Typography>
                </Box>
            </Box>
        </CreateNewRaffleStyle>
    )
}

export default CreateNewRaffle
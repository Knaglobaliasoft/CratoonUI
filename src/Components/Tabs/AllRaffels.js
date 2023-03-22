import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import { Box, Button, Tab, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CheckIcon from "@mui/icons-material/Check";
import SearchIcon from '@mui/icons-material/Search';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { featureSlider } from './AllRaffellList';
import AllRaffelsStyle from './AllRaffelsStyle';
import { PostRaffeleList } from './PostRaffeleList';
import CloseIcon from '@mui/icons-material/Close';

const AllRaffels = () => {
    const [isActive, setIsActive] = useState(false);
    const [value, setValue] = React.useState('1');
    const [input, setinput] = useState(false);
    const [filter, setFilter] = useState(false)
    const [cardDetails, setCardDetails] = useState('')
    const location = useLocation();
    const handleClick = () => {
        setIsActive((current) => !current);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const test3 = () => {
        if (cardDetails.length !== 0) {
            return `/rafflepage:${cardDetails}`;
        }
    }

    const token = [
        { label: '44TH', year: 1994 },
        { label: 'AHI', year: 1972 },
        { label: 'AIR', year: 1974 },
        { label: 'AKEO', year: 2008 },
        { label: 'ALL', year: 1957 },
        { label: "AMMOM", year: 1993 },
        { label: 'ANTI', year: 1994 },
    ];

    const Collection = [
        { label: 'akari', year: 1994 },
        { label: 'aldermages', year: 1972 },
        { label: 'alpha wolves', year: 1974 },
        { label: 'angomon', year: 2008 },
        { label: 'angry armadillos', year: 1957 },
        { label: "angrymals", year: 1993 },
        { label: 'annoyedrexclub', year: 1994 },
    ];

    return (

        <AllRaffelsStyle>
            <Box className="tab_main" onBlur={() => setinput(false)}>
                <Box className={filter ? "tab_header active" : "tab_header"}>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box className="sticky">
                                <Box className="search_part">
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                                            <Tab label="Featured" value="1" />
                                            <Tab label="All Raffles" value="2" />
                                            <Tab label="Past Raffles" value="3" />
                                        </TabList>
                                    </Box>
                                    <Box className="part_two">
                                        <Box className="search" onClick={() => setinput(true)}>
                                            <input placeholder='Search Raffle Name' className={input ? 'input_theme active' : 'input_theme'} type="Search" />
                                            <SearchIcon className='search_icon' />
                                        </Box>
                                        <Box>
                                            <button onClick={() => setFilter(!filter)} className='btn_theme'>Filters/Sort</button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                           
                            <TabPanel value="1">
                                <Box>
                                    <Grid container spacing={3}>
                                        {PostRaffeleList.map((index, i) => {
                                            return (
                                                <Grid item lg={filter ? 4 : 3} md={filter ? 6 : 4} sm={6} xs={12} key={i}>
                                                    <Box className="feature_card_two">
                                                        <Box className="SolStein_img">
                                                            <img src={index.img} alt="bvdcat" />
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
                                                                <Typography variant="h4">
                                                                    {index.Bvdcat}
                                                                </Typography>
                                                                <CheckIcon />
                                                            </Box>
                                                            <Typography variant="h3">{index.name}</Typography>
                                                            <Box className="ticket_ramin">
                                                                <Box className="ticket">
                                                                    <Typography variant="h6">
                                                                        {index.title}
                                                                    </Typography>
                                                                    <Typography>{index.ticket}</Typography>
                                                                    <Typography variant="h2">
                                                                        {index.ticketname}
                                                                    </Typography>
                                                                </Box>
                                                                <Box className="price">
                                                                    <Typography>{index.price}</Typography>
                                                                    <Typography variant="h2">
                                                                        {index.tickeprice}
                                                                    </Typography>
                                                                </Box>
                                                            </Box>
                                                            <Box className="winner">
                                                                <Typography>{index.winner}</Typography>
                                                                <Typography variant="h6">
                                                                    {index.winner_sec}
                                                                </Typography>
                                                            </Box>
                                                            <Box className="viewrafffle">
                                                                <Button className={index.class_yellow}>
                                                                    <Typography variant="h2">
                                                                        {index.view}
                                                                    </Typography>
                                                                    <Typography>{index.second}</Typography>
                                                                </Button>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                            )
                                        })}
                                    </Grid>
                                </Box>
                            </TabPanel>
                            <TabPanel value="3">
                                <Box>
                                    <Grid container spacing={3}>
                                        {PostRaffeleList.map((index, i) => {
                                            return (
                                                <Grid item lg={filter ? 4 : 3} md={filter ? 6 : 4} sm={6} xs={12} key={i}>
                                                    <Box className="feature_card_two">
                                                        <Box className="SolStein_img">
                                                            <img src={index.img} alt="bvdcat" />
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
                                                                <Typography variant="h4">
                                                                    {index.Bvdcat}
                                                                </Typography>
                                                                <CheckIcon />
                                                            </Box>
                                                            <Typography variant="h3">{index.name}</Typography>
                                                            <Box className="ticket_ramin">
                                                                <Box className="ticket">
                                                                    <Typography variant="h6">
                                                                        {index.title}
                                                                    </Typography>
                                                                    <Typography>{index.ticket}</Typography>
                                                                    <Typography variant="h2">
                                                                        {index.ticketname}
                                                                    </Typography>
                                                                </Box>
                                                                <Box className="price">
                                                                    <Typography>{index.price}</Typography>
                                                                    <Typography variant="h2">
                                                                        {index.tickeprice}
                                                                    </Typography>
                                                                </Box>
                                                            </Box>
                                                            <Box className="winner">
                                                                <Typography>{index.winner}</Typography>
                                                                <Typography variant="h6">
                                                                    {index.winner_sec}
                                                                </Typography>
                                                            </Box>
                                                            <Box className="viewrafffle">
                                                                <Button className={index.class_yellow}>
                                                                    <Typography variant="h2">
                                                                        {index.view}
                                                                    </Typography>
                                                                    <Typography>{index.second}</Typography>
                                                                </Button>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                            )
                                        })}
                                    </Grid>
                                </Box>
                            </TabPanel>
                            <TabPanel value="2">
                                <Box>
                                    <Grid container spacing={3}>
                                        {featureSlider.map((index, key) => {
                                            return (
                                                <Grid item lg={filter ? 4 : 3} md={filter ? 6 : 4} sm={6} xs={12} key={key}>
                                                    <Box className="feature_card" key={key}>
                                                        <Box className="SolStein_img">
                                                            <img src={index.img} alt="bvdcat" />
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
                                                                <Typography variant="h4">
                                                                    {index.Bvdcat}
                                                                </Typography>
                                                                <CheckIcon />
                                                            </Box>
                                                            <Typography variant="h3">{index.name}</Typography>
                                                            <Box className="ticket_ramin">
                                                                <Box className="ticket">
                                                                    <Typography variant="h6">
                                                                        {index.title}
                                                                    </Typography>
                                                                    <Typography>{index.ticket}</Typography>
                                                                    <Typography variant="h2">
                                                                        {index.ticketname}
                                                                    </Typography>
                                                                </Box>
                                                                <Box className="price">
                                                                    <Typography>{index.price}</Typography>
                                                                    <Typography variant="h2">
                                                                        {index.tickeprice}
                                                                    </Typography>
                                                                </Box>
                                                            </Box>
                                                            <Box className="viewrafffle">
                                                                <Link to={test3()} onClick={() =>setCardDetails(index.id)}>
                                                                    <Typography variant="h2">
                                                                        {index.view}
                                                                    </Typography>
                                                                    <Typography>{index.second}</Typography>
                                                                </Link>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                            );
                                        })}
                                    </Grid>
                                </Box>
                            </TabPanel>
                        </TabContext>
                    </Box>
                </Box>
                <Box className={filter ? "add-filter active" : "add-filter"}>
                    <Box className="sticky">
                        <Box >
                            <Box className="filter_main">
                                <Box className="heading">
                                    <Typography variant="h3">Sort</Typography>
                                    <button onClick={() => setFilter(false)} className='icon_btn_theme'><CloseIcon className='close_theme' /></button>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="btn_sec">
                            <Box>
                                <button className='btn_theme_two'>Recently Added</button>
                            </Box>
                            <Box>
                                <button className='btn_theme_two'>Expiring Soon</button>
                            </Box>
                            <Box>
                                <button className='btn_theme_two'>Selling out soon</button>
                            </Box>
                            <Box>
                                <button className='btn_theme_two'>Price: Low to High</button>
                            </Box>
                            <Box>
                                <button className='btn_theme_two'>Price: High to Low</button>
                            </Box>
                        </Box>
                        <Box className="filters">
                            <Typography variant="h3">Filter</Typography>
                        </Box>
                        <Box className="search_droupdown">
                            <Box className="title_lable">
                                <label className='title_theme' htmlFor="">Token</label>
                            </Box>
                            <Autocomplete
                                className="box_theme"
                                disablePortal
                                id="combo-box-demo"
                                options={token}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Search Token" />}
                            />
                        </Box>
                        <Box className="search_droupdown">
                            <Box className="title_lable">
                                <label className='title_theme' htmlFor="">Collection</label>
                            </Box>
                            <Autocomplete
                                className="box_theme"
                                disablePortal
                                id="combo-box-demo"
                                options={Collection}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Search Collection" />}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </AllRaffelsStyle>

    )
}
export default AllRaffels
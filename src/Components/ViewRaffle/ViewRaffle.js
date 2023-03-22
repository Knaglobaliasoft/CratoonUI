import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Button, Grid, Paper, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CheckIcon from "@mui/icons-material/Check";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import FlagIcon from "@mui/icons-material/Flag";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { ContactIcon, LinkIcon } from "../../Assets/AllSvg";
import sicon from "../../Assets/Images/SIcon.svg";
import { FeatureSlider } from "../Feature/FeatureStyleList";
import { featureSlider } from "../Tabs/AllRaffellList";
import ViewRaffleStyle from "./ViewRaffleStyle";
import Detalismodal from "../Detailsmodal/Detailsmodal";

function createData(name, tickets) {
   return { name, tickets };
}
function transactionData(buyername, buyer, date, ticket) {
   return { buyername, buyer, date, ticket };
}

const rows = [
   createData("6oTUefS1p9rMdAKkJrvvii6fL7afcaauhpfZBBrv5HU2", 39),
   createData("FvWMaZNqKbaQMRfaFxNQsrXoKvQCZvFb1Vphcr8TkfJc", 39),
   createData("9PFcLfKjAUdKvTnwJXXpNU9AHEAzL8N4prHBLKehgizv", 39),
   createData("3XdmixfTc957T84PG8cSutSEbeiQWjDP6kGwEbGMDnrt", 22),
   createData("DCt6Lus5L8mVPCf7kPGWWU5fjs5ktBEn3bfZcdkYCXbY", 6),
   createData("5S35BHoeM1zUBquzegajnfYcCVwXYKRZCq6ftaFG8mgN", 4),
   createData("BMyXozqSrYw7CZfojFfvYqJMNVB7L1fyxYqxvtjmJwuy", 4),
   createData("29g4JgLf8FfxAdxskRkt371SL1nrvwmzwQfw1WSfXTLt", 1),
   createData("E7sTQmAfm9ypGRYgZcgCN6vMENxeqiYCagNdVXYQJb22", 1),
   createData("2NN5VR5UVtRY7mAM18cnxcJ8qXwqWFxLrF2J5bJXBJoz", 1),
   createData("7AuE8a27Lky6m4iJbRBYA4hVkGBwKm7ANZaeyHtYdg9X", 1)
];

const transaction = [
   transactionData("5XJW...MNRH", "6oTU...5HU2", "28 Sep 19:46", 30),
   transactionData("3wFm...6e52", "9PFc...gizv", "28 Sep 19:46", 39),
   transactionData("5MKR...zK7P", "FvWM...kfJc", "28 Sep 19:46", 39),
   transactionData("4Cw1...Axou", "6oTU...5HU2", "28 Sep 19:43", 9),
   transactionData("5f4i...bdfk", "7AuE...dg9X", "28 Sep 19:14", 1),
   transactionData("3rSq...rusT", "3Xdm...Dnrt", "28 Sep 18:56", 2),
   transactionData("qGFD...pR74", "3Xdm...Dnrt", "28 Sep 18:56", 20),
   transactionData("5QXU...ymLQ", "2NN5...BJoz", "28 Sep 18:49", 1),
   transactionData("59SS...c6m4", "BMyX...Jwuy", "28 Sep 18:48", 4),
   transactionData("4UZx...jLHc", "DCt6...CXbY", "28 Sep 16:23", 6),
   transactionData("L4qg...i6RF", "EzyZ...GmMP", "28 Sep 14:18", 1),
   transactionData("3cJV...FrPH", "5S35...8mgN", "28 Sep 12:40", 2)
];

const ViewRaffle = () => {
   const [value, setValue] = useState("1");
   const [open, setOpen] = useState(false);
   const [data, setData] = useState(true);
   const [cardDetails, setCardDetails] = useState([])

   let { id } = useParams();

   useEffect(() => {
      const cardInfo = FeatureSlider.filter((item) => {
         const mdata = ":" + item.id   
         return mdata === id
      })
      const cardInfoFeature = featureSlider.filter((item) => {
         const mdata = ":" + item.id
         return mdata === id
      })
      console.log("testvalue---->", cardInfoFeature)
      if (cardInfo.length !== 0) {
         setCardDetails(cardInfo[0])
      } else {
         setCardDetails(cardInfoFeature[0])
      }
   }, [id])

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };
   

   // useEffect(() => {
   //    const cardInfo = FeatureSlider.filter((item) => {
   //       const mdata = ":" + item.id
   //       return mdata === id
   //    })
   //    setCardDetails(cardInfo[0])
   // }, [id])

   // const handleChange = (event, newValue) => {
   //    setValue(newValue);
   // };
   return (
      <ViewRaffleStyle>
         <Box className="rffledetail">
            <Box className="viewraffle">
               <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                     <Box className="raffleimage">
                        <Box className="selectimage">
                           <img src={cardDetails.img} alt="selectimage" />
                           <Box className="favorite">
                              <Button>
                                 <FavoriteIcon />
                              </Button>
                           </Box>
                        </Box>
                        <Box className="selectwallet">
                           <Button onClick={() => setOpen(true)}>
                              Select Wallet
                           </Button>
                        </Box>
                     </Box>
                  </Grid>
                  <Grid item xs={12} md={8}>
                     <Box className="userdata">
                        <Box className="sharedetail">
                           <Box className="userdetail">
                              <Box className="tripiin">
                                 <Typography variant="h4">
                                    {cardDetails.Bvdcat}
                                 </Typography>
                                 <CheckIcon />
                              </Box>
                              <Box className="tripiin">
                                 <Typography variant="h3">
                                    {cardDetails.name}
                                 </Typography>
                                 <Button  onClick={() => setOpen(true)}>
                                    <VisibilityIcon className="eye" />
                                 </Button>
                                 <Detalismodal open={open} setOpen={setOpen}/>
                              </Box>
                              <Box className="totalvalue">
                                 <Box className="nftprice">
                                    <Typography variant="h6">
                                       NFT Floor Price:
                                       <Typography>
                                          9.1 <img src={sicon} alt="sicon" />
                                       </Typography>
                                    </Typography>
                                 </Box>
                                 <Box className="nftprice">
                                    <Typography variant="h6">
                                       Total Ticket Value:
                                       <Typography>
                                          14.9 <img src={sicon} alt="sicon" />
                                       </Typography>
                                    </Typography>
                                 </Box>
                              </Box>
                           </Box>
                           <Box className="report">
                              <Box className="totalticket">
                                 <Button>
                                    <ArrowLeft />
                                    Back
                                 </Button>
                                 <Button>
                                    <LinkIcon />
                                    share
                                 </Button>
                                 <Button>
                                    <FlagIcon />
                                    Report
                                 </Button>
                              </Box>
                           </Box>
                        </Box>
                        <Box className="participants">
                           <Box sx={{ width: "100%", typography: "body1" }}>
                              <TabContext value={value}>
                                 <Box
                                    sx={{
                                       borderBottom: 1,
                                       borderColor: "divider"
                                    }}
                                    className="tablist"
                                 >
                                    <TabList
                                       onChange={handleChange}
                                       aria-label="lab API tabs example"
                                    >
                                       <Tab label="Detail" value="1" />
                                       <Tab label="Participants" value="2" />
                                       <Tab label="Transactions" value="3" />
                                    </TabList>
                                 </Box>
                                 <TabPanel value="1">
                                    <Box className="ticketsale">
                                       <Grid container spacing={2}>
                                          <Grid item xs={12} sm={6}>
                                             <Box className="ticketend">
                                                <Box className="hours">
                                                   <Typography variant="h4">
                                                      Ticket Sales Ends in:
                                                   </Typography>
                                                   <Typography variant="h5">
                                                      {cardDetails.second}
                                                   </Typography>
                                                </Box>
                                                <Box className="hours">
                                                   <Typography variant="h4">
                                                      Raffle Start Date:
                                                   </Typography>
                                                   <Typography variant="h5">
                                                      Sep 27, 2022
                                                   </Typography>
                                                </Box>
                                                <Box className="hours">
                                                   <Typography variant="h4">
                                                      Raffle:
                                                   </Typography>
                                                   <Typography variant="h5">
                                                      {cardDetails && cardDetails.title}
                                                      <Link to="/profile">
                                                         <ContactIcon />
                                                      </Link>
                                                   </Typography>
                                                </Box>
                                                <Typography
                                                   variant="h6"
                                                   className="notlink"
                                                >
                                                   User has not yet linked their
                                                   profile.
                                                </Typography>
                                             </Box>
                                          </Grid>
                                          <Grid item xs={12} sm={6}>
                                             <Box>
                                                <Box className="hours">
                                                   <Typography variant="h4">
                                                      Ticket Cost:
                                                   </Typography>
                                                   <Typography variant="h5">
                                                      {cardDetails.tickeprice}
                                                   </Typography>
                                                </Box>
                                                <Box className="hours">
                                                   <Typography variant="h4">
                                                      Tickets Remaining:
                                                   </Typography>
                                                   <Typography variant="h5">
                                                      {cardDetails.ticketname}
                                                   </Typography>
                                                </Box>
                                             </Box>
                                          </Grid>
                                       </Grid>
                                    </Box>
                                 </TabPanel>
                                 <TabPanel value="2">
                                    <Box className="walletname">
                                       <TableContainer component={Paper}>
                                          <Table
                                             sx={{ minWidth: 650 }}
                                             aria-label="simple table"
                                             className="wallettable"
                                          >
                                             <TableHead>
                                                <TableRow>
                                                   <TableCell align="left">
                                                      <Typography variant="h1">
                                                         Wallet
                                                      </Typography>
                                                   </TableCell>
                                                   <TableCell align="center">
                                                      <Typography variant="h1">
                                                         Tickets Bought
                                                      </Typography>
                                                   </TableCell>
                                                </TableRow>
                                             </TableHead>
                                             <TableBody>
                                                {rows.map((row) => (
                                                   <TableRow
                                                      key={row.name}
                                                      sx={{
                                                         "&:last-child td, &:last-child th":
                                                            { border: 0 }
                                                      }}
                                                   >
                                                      <TableCell
                                                         component="th"
                                                         scope="row"
                                                      >
                                                         <Link>{row.name}</Link>
                                                      </TableCell>
                                                      <TableCell align="center">
                                                         <Typography variant="h5">
                                                            {row.tickets}
                                                         </Typography>
                                                      </TableCell>
                                                   </TableRow>
                                                ))}
                                             </TableBody>
                                          </Table>
                                       </TableContainer>
                                    </Box>
                                 </TabPanel>
                                 <TabPanel value="3">
                                    <Box className="walletname">
                                       <TableContainer component={Paper}>
                                          <Table
                                             sx={{ minWidth: 650 }}
                                             aria-label="simple table"
                                             className="wallettable"
                                          >
                                             <TableHead>
                                                <TableRow>
                                                   <TableCell align="left">
                                                      <Typography variant="h1">
                                                         Txn
                                                      </Typography>
                                                   </TableCell>
                                                   <TableCell align="left">
                                                      <Typography variant="h1">
                                                         Buyer
                                                      </Typography>
                                                   </TableCell>
                                                   <TableCell align="left">
                                                      <Typography variant="h1">
                                                         Date
                                                      </Typography>
                                                   </TableCell>
                                                   <TableCell align="center">
                                                      <Typography variant="h1">
                                                         Tickets
                                                      </Typography>
                                                   </TableCell>
                                                </TableRow>
                                             </TableHead>
                                             <TableBody>
                                                {transaction.map((row) => (
                                                   <TableRow
                                                      key="{row.name}"
                                                      sx={{
                                                         "&:last-child td, &:last-child th":
                                                            { border: 0 }
                                                      }}
                                                   >
                                                      <TableCell
                                                         component="th"
                                                         scope="row"
                                                      >
                                                         <Link>
                                                            {row.buyername}
                                                         </Link>
                                                      </TableCell>
                                                      <TableCell align="left">
                                                         <Link>
                                                            {row.buyer}
                                                         </Link>
                                                      </TableCell>
                                                      <TableCell align="left">
                                                         <Typography variant="h5">
                                                            {row.date}
                                                         </Typography>
                                                      </TableCell>
                                                      <TableCell align="center">
                                                         <Typography variant="h5">
                                                            {row.ticket}
                                                         </Typography>
                                                      </TableCell>
                                                   </TableRow>
                                                ))}
                                             </TableBody>
                                          </Table>
                                       </TableContainer>
                                    </Box>
                                 </TabPanel>
                              </TabContext>
                           </Box>
                        </Box>
                        <Box className="condition">
                           <Typography variant="h1">
                              Terms & Conditions
                           </Typography>
                           <Typography variant="h6">
                              <Typography>1.</Typography>
                              Here's a <Link>guide</Link> to buy into raffles.
                           </Typography>
                           <Typography variant="h6">
                              <Typography>2.</Typography>
                              All NFT prizes are held by rafffle in escrow and
                              can be claimed by the winner or creator once the
                              draw is done.
                           </Typography>
                           <Typography variant="h6">
                              <Typography>3.</Typography>
                              Raffle tickets cannot be refunded once bought.
                           </Typography>
                           <Typography variant="h6">
                              <Typography>4.</Typography>
                              Raffle tickets will not be refunded if you did not
                              win the raffle.
                           </Typography>
                           <Typography variant="h6">
                              <Typography>5.</Typography>
                              You can only buy 20% of total tickets.
                           </Typography>
                        </Box>
                     </Box>
                  </Grid>
               </Grid>
            </Box>
         </Box>
         <Box >
         </Box>
      </ViewRaffleStyle>
   );
};

export default ViewRaffle;

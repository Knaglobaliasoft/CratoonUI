import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
import FavoriteIcon from "@mui/icons-material/Favorite";
import CheckIcon from "@mui/icons-material/Check";
import Slider from "react-slick";
import { FeatureSlider } from "./FeatureStyleList";
import FeatureStyle from "./FeatureStyle";

const Feature = () => {
   const [color, setcolor] = useState(false);
   const [cardDetails, setCardDetails] = useState('')
   var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
         {
            breakpoint: 1199,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
               infinite: true,
               dots: true
            }
         },
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               infinite: true,
               dots: true
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               initialSlide: 2
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   }
   const test = (event, key) => {
      console.log(event.target.index)
   }
   const test2 = () => {
      if (cardDetails.length !== 0) {
         return `/rafflepage:${cardDetails}`;
      }
   }

   // `/rafflepage:id=${cardDetails}`

   return (
      <FeatureStyle>
         <Box className="features">
            <Box className="slider">
               <Typography variant="h1">FEATURED ENDING SOON</Typography>
               <Slider {...settings}>
                  {FeatureSlider.map((index, key) => {
                     return (
                        <Box className="feature_card" key={key}>
                           <Box className="SolStein_img">
                              <img src={index.img} alt="bvdcat" />
                              <Box className="favorite">
                                 <Button id={toString(key)} onClick={(e) => test(e, key)}>
                                    <FavoriteIcon
                                       className={color ? 'active' : ''}
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
                                 <Link onClick={() =>setCardDetails(index.id)} to={test2()}>
                                    <Typography variant="h2">
                                       {index.view}
                                    </Typography>
                                    <Typography>{index.second}</Typography>
                                 </Link>
                              </Box>
                           </Box>
                        </Box>
                     );
                  })}
               </Slider>
            </Box>
         </Box>
      </FeatureStyle>
   );
};

export default Feature;

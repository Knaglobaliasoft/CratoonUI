import styled from "@emotion/styled";

const FeatureStyle = styled.div`
   .features {
      padding: 26px 180px;
      background: #22132e;
      margin-top: 75px;
      @media (max-width: 1399px) {
         padding: 26px 100px;
      }
      @media (max-width: 1199px) {
         padding: 26px 40px;
      }
      @media (max-width: 767px) {
         padding: 26px 10px;
      }
      .slider {
         h1 {
            font-size: 48px;
            color: #42296a;
            font-weight: 700;
            margin-bottom: 10px;
            padding: 0 15px;
            @media (max-width: 1024px) {
               font-size: 40px;
            }
            @media (max-width: 767px) {
               font-size: 35px;
            }
            @media (max-width: 575px) {
               font-size: 22px;
            }
         }
         .feature_card {
            border: 4px solid transparent;
            transition: 0.3s;
            border-radius: 16px;
            &:hover {
               border: 4px solid #965cf6;
               border-radius: 20px;
            }
            .SolStein_img {
               position: relative;
               img {
                  max-width: 100%;
                  width: 100%;
                  border-radius: 16px 16px 0 0;
               }
               .favorite {
                  position: absolute;
                  right: 10px;
                  top: 10px;
                  button {
                     background: #fff;
                     min-width: unset;
                     height: 30px;
                     width: 30px;
                     svg {
                        font-size: 18px;
                        color: #9ca3af;
                     }
                     svg.active{
                        color: #F87171;
                     }
                  }
               }
            }
            .review {
               padding: 16px;
               background-color: #fff;
               border-bottom-left-radius: 16px;
               border-bottom-right-radius: 16px;
               .check {
                  display: flex;
                  align-items: center;
                  margin-bottom: 6px;
                  h4 {
                     font-size: 14px;
                     margin-right: 5px;
                     cursor: pointer;
                     color: #6b7280;
                     &:hover {
                        color: #8ccf26;
                     }
                  }
                  svg {
                     background: #a0d84c;
                     color: #fff;
                     font-size: 14px;
                     padding: 2px;
                     border-radius: 100%;
                  }
               }
               h3 {
                  font-weight: 700;
                  font-size: 20px;
                  color: #000;
                  margin-bottom: 5px;
                  @media (max-width: 1199px) {
                     height: 50px;
                  }
               }
               .ticket_ramin {
                  display: flex;
                  align-items: flex-end;
                  justify-content: space-between;
                  .ticket {
                     h6 {
                        color: #965cf6;
                        font-size: 16px;
                        cursor: pointer;
                        font-weight: 600;
                        margin-bottom: 5px;
                        &:hover {
                           color: #965cf6a8;
                        }
                     }
                  }
                  p {
                     font-weight: 600;
                     font-size: 14px;
                     color: #6b7280;
                     @media (max-width: 767px) {
                        font-size: 12px;
                     }
                  }
                  h2 {
                     font-size: 20px;
                     font-weight: 600;
                     color: #965cf6;
                  }
               }
               .viewrafffle {
                  a{
                     text-transform: capitalize;
                     display: flex;
                     flex-direction: column;
                     text-align: center;
                     background-image: linear-gradient(#6366f1, #4f46e5);
                     width: 100%;
                     color: #fff;
                     border-radius: 10px;
                     padding: 13px 0;
                     margin-top: 10px;
                     opacity: .9;
                     h2 {
                        font-size: 20px;
                        font-weight: 600;
                     }
                     p {
                        font-weight: 400 !important;
                        font-size: 14px;
                        font-weight: 600;
                     }
                     &:hover{
                        opacity: 1;
                     }
                  }
               }
            }
         }
         .slick-slider {
            .slick-prev {
               &:before {
                  content: "❮" !important;
                  color: #785296;
                  font-size: 60px;
               }
               @media (max-width: 767px) {
                  display: none !important;
               }
            }
            .slick-next {
               &::before {
                  content: "❯";
                  color: #785296;
                  font-size: 60px;
               }
               @media (max-width: 767px) {
                  display: none !important;
               }
            }
            .slick-dots {
               button {
                  &:before {
                     opacity: 0.7;
                     color: #fff;
                     font-size: 9px;
                  }
               }
               .slick-active {
                  button {
                     &::before {
                        opacity: 1;
                     }
                  }
               }
            }
         }
      }
   }
`;
export default FeatureStyle;

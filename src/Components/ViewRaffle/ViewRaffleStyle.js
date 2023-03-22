import styled from "@emotion/styled";

const ViewRaffleStyle = styled.div`
    .rffledetail {
      max-width: 1280px;
      padding: 16px 32px;
      margin: auto;
      @media (max-width: 600px) {
         padding: 16px 14px;
      }
      .viewraffle {
         margin-top: 75px;
         .raffleimage {
            .selectimage {
               position: relative;
               margin-bottom: 32px;
               img {
                  max-width: 100%;
                  width: 100%;
                  border-radius: 16px;
                  @media (max-width: 1199px) {
                     width: 490px;
                     display: flex;
                     margin: auto;
                  }
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
                  }
               }
            }
            .selectwallet {
               button {
                  background-image: linear-gradient(
                     to top,
                     #4f46e5 0%,
                     #6366f1 100%
                  );
                  width: 100%;
                  text-transform: capitalize;
                  color: #fff;
                  opacity: 0.9;
                  border-radius: 12px;
                  padding: 12px 0;
                  font-size: 16px;
                  font-weight: 600;
                  &:hover {
                     opacity: 1;
                  }
                  @media (max-width: 1199px) {
                     width: 60%;
                     margin: auto;
                     display: flex;
                  }
               }
            }
         }
         .userdata {
            padding: 32px;
            background-color: #fff;
            border-radius: 16px;
            @media (max-width: 900px) {
               padding: 20px;
            }
            @media (max-width: 600px) {
               padding: 10px;
            }
            .sharedetail {
               display: flex;
               align-items: center;
               justify-content: space-between;
               @media (max-width: 600px) {
                  display: block;
               }
               .userdetail {
                  .tripiin {
                     display: flex;
                     align-items: center;
                     h4 {
                        font-size: 14px;
                        margin-right: 5px;
                        cursor: pointer;
                        color: #6b7280;
                        font-weight: 700;
                        &:hover {
                           color: #8ccf26;
                        }
                     }
                     h3 {
                        font-size: 36px;
                        font-weight: 700;
                        margin-right: 13px;
                        @media (max-width: 1199px) {
                           font-size: 28px;
                           margin-right: 8px;
                        }
                        @media (max-width: 600px) {
                           font-size: 22px;
                        }
                     }
                     svg {
                        background: #a0d84c;
                        color: #fff;
                        font-size: 14px;
                        padding: 2px;
                        border-radius: 100%;
                     }
                     .eye {
                        color: #8b5cf6;
                        font-size: 32px;
                        background-color: transparent;
                     }
                  }
                  .totalvalue {
                     display: flex;
                     margin-bottom: 10px;
                     .nftprice {
                        h6 {
                           font-size: 14px;
                           margin-right: 5px;
                           color: #6b7280;
                           font-weight: 500;
                           display: flex;
                           align-items: center;
                           @media (max-width: 600px) {
                              display: block;
                           }
                           p {
                              color: #913aed;
                              font-weight: 600;
                              margin-left: 4px;
                           }
                        }
                        &:first-of-type {
                           margin-right: 30px;
                        }
                        img {
                           width: 16px;
                        }
                     }
                  }
               }
               .report {
                  .totalticket {
                     display: flex;
                     flex-direction: column;
                     @media (max-width: 600px) {
                        justify-content: space-between;
                        flex-direction: row;
                     }
                     button {
                        min-width: 0;
                        text-transform: capitalize;
                        color: #913aed;
                        font-weight: 700;
                        justify-content: start;
                        padding: 0;
                        margin-bottom: 4px;
                        svg {
                           margin-right: 2px;
                        }
                        &:last-child {
                           color: #ef4444;
                        }
                        &:nth-of-type(2) {
                           svg {
                              width: 15px;
                              margin-right: 8px;
                              margin-left: 4px;
                           }
                        }
                     }
                  }
               }
            }
            .participants {
               border-bottom: 1px solid #0000001f;
               .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected {
                  border: none;
                  color: #fff !important;
                  background-color: #8b5cf6;
                  border-radius: 50px;
                  padding: 6px 20px;
                  min-height: unset;
                  height: fit-content;
                  padding: 10px 20px;
                  font-family: "Lexend", sans-serif;
                  &:hover {
                     color: #fff !important;
                  }
               }
               .css-1h9z7r5-MuiButtonBase-root-MuiTab-root {
                  color: #8b5cf6 !important;
                  font-weight: bold !important;
                  border-radius: 50px;
                  text-transform: capitalize;
                  font-weight: 700;
                  font-size: 16px;
                  min-width: unset;
                  padding: 10px 20px;
                  &:hover {
                     color: #aa8bfa !important;
                  }
               }
               .css-mhc70k-MuiGrid-root > .MuiGrid-item {
                  padding: 0px !important;
               }
               .MuiTabs-indicator {
                  background-color: unset;
               }
               .tablist {
                  margin-bottom: 20px;
                  padding-bottom: 5px;
                  .MuiTabs-flexContainer {
                     align-items: center;
                     flex-wrap: wrap;
                  }
               }
               .ticketsale {
                  padding: 24px 24px;
                  @media (max-width: 600px) {
                     padding: 8px 18px;
                  }
                  .hours {
                     margin-bottom: 26px;
                     @media (max-width: 600px) {
                        margin-bottom: 16px;
                     }
                     &:nth-of-type(3) {
                        margin-bottom: 0px;
                     }
                     h4 {
                        font-size: 14px;
                        margin-right: 5px;
                        cursor: pointer;
                        font-weight: 700;
                     }
                     h5 {
                        font-size: 20px;
                        font-weight: 700;
                        display: flex;
                        align-items: center;
                     }
                     a {
                        min-width: fit-content;
                        padding: 0;
                        svg {
                           width: 22px;
                           margin-left: 8px;
                           border-radius: 4px;
                        }
                     }
                  }
                  .notlink {
                     color: #ef4444;
                     font-size: 15px;
                     font-weight: 600;
                     border: 2px solid #ef4444;
                     border-radius: 6px;
                     padding: 8px;
                     max-width: 280px;
                     margin-top: 10px;
                     @media (max-width: 1199px) {
                        font-size: 12px;
                        max-width: 240px;
                     }
                     @media (max-width: 600px) {
                        margin-bottom: 10px;
                     }
                  }
               }
               .walletname {
                  height: 400px;
                  overflow-y: auto;
                  &::-webkit-scrollbar {
                     width: 8px;
                  }
                  &::-webkit-scrollbar-track {
                     border-radius: 10px;
                     background-color: #e5e5e5;
                  }
                  &::-webkit-scrollbar-thumb {
                     background: #898989;
                     border-radius: 10px;
                  }
                  .wallettable {
                     h1 {
                        font-size: 16px;
                        font-weight: 700;
                     }
                     h5 {
                        font-weight: 500;
                        font-size: 16px;
                     }
                     a {
                        text-decoration: none;
                        color: #000;
                        font-weight: 400;
                        font-size: 16px;
                        cursor: pointer;
                        &:hover {
                           color: #8b5cf6;
                        }
                     }
                     th {
                        border-bottom: 0;
                        padding: 10px 10px;
                     }
                     td {
                        border-bottom: 0;
                        padding: 0 10px;
                     }
                     tbody {
                        tr {
                           &:nth-of-type(even) {
                              background-color: #f9fafb;
                           }
                           &:hover {
                              background-color: #ede9fe;
                           }
                        }
                     }
                  }
               }
            }
            .condition {
               background: #ede9fe;
               border-radius: 16px;
               padding: 20px;
               margin-top: 20px;
               border: 1px solid #aa8bfa6b;
               @media (max-width: 425px) {
                  padding: 7px;
               }
               h6 {
                  display: flex;
                  font-size: 16px;
                  align-items: flex-start;
                  font-weight: 400;
                  @media (max-width: 1199px) {
                     font-size: 14px;
                  }
               }
               h1 {
                  font-weight: 700;
                  color: #8b5cf6;
                  font-size: 16px;
               }
               a {
                  color: #8b5cf6;
                  text-decoration: none;
                  margin: 0 7px;
               }
               p {
                  margin-right: 8px;
               }
            }
         }
      }
   }
`;

export default ViewRaffleStyle;

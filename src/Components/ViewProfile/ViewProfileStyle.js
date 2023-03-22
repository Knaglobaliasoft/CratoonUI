import styled from "@emotion/styled";


const ViewProfileStyle = styled.div`

.main-profile{
    margin-top: 75px;
    max-width: 1280px;
    margin: auto;
    margin-top: 75px;
    padding: 16px 32px;
    @media(max-width:992px){
        padding: 16px 16px;
        }
    .heading{
        h2{
            color: rgba(139,92,246,.3)!important;
            font-family: 'Lexend', sans-serif;
            font-size: 48px;
            padding: 16px 0px;
            font-weight: bold;
        }
        @media(max-width:992px){
            display: none;
        }
    }
    .user_box{
        margin-top: 3;
        background-color: #fff;
        padding: 32px;
        border-radius: 16px;
        .box_heading{
            border-bottom: 1px solid #e5e7eb;
            padding-bottom: 12px;
            display: flex;
            gap: 5px;
            h4{
            font-family: 'Lexend', sans-serif;
            font-size: 24px;
            font-weight: 700;
            }
            svg{
                color: #60a5fa;
            }
            
        }
        .box_detalis{
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
            @media(max-width:992px){
                display: block;
                justify-content: flex-start;
            }
            .title{
                padding-bottom: 16px;
                &:nth-child(2){
                    text-align: center;
                    @media(max-width:992px){
                        text-align: start;
                    }
                }
                &:nth-child(3){
                    text-align: center;
                    @media(max-width:992px){
                        text-align: start;
                    }
                }
                .title_main{
                    color: #000;
                    font-weight: bold;
                    padding-bottom: 5px;
                }
                .link {
                    a{
                        color: #8B5CF6;
                        font-size: 16px;
                        font-weight: 600;
                        &:hover{
                            color: #a78bfa;
                        }
                    }
                    .orange_dot{
                        background-color: #f7630c;
                        height: 18px;
                        border-radius: 50%;
                        width: 18px;
                        margin: auto;
                        border: 2px solid #000;
                        @media(max-width:992px){
                            margin: 0;
                        }
    
                    }
                }
            }
        }
    }
    .card{
        .features {
      background: #22132e;
      padding: 40px 0;
      .feature_card {
            border: 4px solid transparent;
            border-radius: 16px;
            transition: .2s;
            &:hover {
                transform: scale(1.03);
            }
            .SolStein_img {
                position: relative;
                line-height: 0;
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
                        color: #8b5cf6;
                        font-weight: 600;
                        &:hover {
                            color: #84cc16;
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
                }
                .ticket_ramin {
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    .ticket {
                        h6 {
                            font-weight: 700;
                            color: #965cf6;
                            font-size: 16px;
                            cursor: pointer;
                            margin-bottom: 5px;
                            &:hover {
                            color: #965cf6a8;
                            }
                        }
                    }
                    p {
                        color: #965cf6;
                        font-weight: bold;
                        font-size: 14px;
                    }
                    h2 {
                        font-size: 20px;
                        color: #84cc16;
                        font-weight: bold;
                    }
                }
                .viewrafffle {
                    button {
                        background: linear-gradient(to bottom, #6366f1 0%, #4f46e5 100%);
                        opacity: .9;
                        text-transform: capitalize;
                        display: flex;
                        flex-direction: column;
                        background-color: transparent;
                        width: 100%;
                        color: #fff;
                        border-radius: 10px;
                        padding: 13px 0;
                        margin-top: 10px;
                        h2 {
                            font-size: 20px;
                            color: #fff;
                            font-weight: bold;
                        }
                        p {
                            color: #fff;
                            font-weight: 400 !important;
                            font-size: 14px;
                        }
                        &:hover{
                            opacity: 1;
                        }
                    }
                }
            }
        }
   }
    }
}


`
export default ViewProfileStyle
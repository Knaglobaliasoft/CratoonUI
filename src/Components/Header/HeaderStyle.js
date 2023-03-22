import styled from "@emotion/styled";


const HeaderStyle = styled.div`
    .header-main{
        background: #281E35;
        width: calc(100% - 64px);
        padding:8px 32px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top:0;
        z-index: 50;
        .menu-bar{
            color: white;
            cursor: pointer;
            display: none;
            @media (max-width:1024px) {
                display: block;
            }
        }
        .left-content{
            display: flex;
            .logo{
                width: 148px;
                img{
                    width: 100%;
                }
            }
            .network{
                margin-left: 20px;
                h4{
                    display: flex;
                    align-items: center;
                    color: #785296;
                    font-size: 12px;
                    p{
                        font-size: 12px;
                        color: #8b5cf6;
                        margin-left: 5px;
                    }
                }
                .create-powered{
                    margin-top: 4px;
                    border: 1px solid white;
                    border-radius: 10px;
                    padding: 5px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img{
                        width:18px;
                    }
                    >div{
                        color: white;
                        margin-left: 3px;
                        h4{
                            color:white;
                            font-size: 7px;
                            margin-bottom: -3px;
                        }
                        p{
                            margin-bottom: -1px;
                            font-size: 8px;
                            font-weight: 800;
                        }
                    }
                }
                @media (max-width:1024px) {
                    display: none;
                }
            }
        }
        .right-content{
            display: flex;
            align-items: center;
            gap:12px;
            .dark-mode{
                width: 45px;
                height: 45px;
                border: 2px solid #785296;
                border-radius: 50%;
                background-color: transparent;
                color: #785296;
                transition: all .2s;
                &:hover{
                    border: 2px solid #8b5cf6;
                    color: #8b5cf6;
                    transition: all .2s;
                }
            }
            .create-raffle{
                padding: 0 20px;
                color: white;
                background: rgba(162,230,53,1);
                background: linear-gradient(to bottom, rgba(162,230,53,1) 0%, rgba(100,163,13,1) 100%);
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 600;
                font-size:16px;
                border-radius: 12px;
                gap:5px;
                height: 50px;
                opacity: .9;
                &:hover{
                    opacity: 1;
                }
                @media (max-width:1024px) {
                    display: none;
                }
            }
            .select-wallet{
                padding: 0 20px;
                color: white;
                background: #4f46e5;
                background: linear-gradient(to top, #4f46e5 0%, #6366f1 100%);
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 600;
                font-size:16px;
                border-radius: 12px;
                gap:5px;
                height: 50px;
                opacity: .9;
                &:hover{
                    opacity: 1;
                }
                @media (max-width:1024px) {
                    display: none;
                }
                img{
                    width: 24px;
                }
            }
        }
    }
    .sidebar-main{
        position: fixed;
        top: 0;
        width: 80%;
        left: -100%;
        background: #362544;
        height: 100vh;
        overflow-y: auto;
        transition: all .4s;
        padding:16px;
        z-index: 100;
        .start-side{
            display: flex;
            align-items: center;
            gap:70px;
            .close-sidebar{
                width: 45px;
                height: 45px;
                border: 4px solid #785296;
                border-radius: 50%;
                background-color: transparent;
                color: #785296;
                transition: all .2s;
                svg{
                    font-size: 30px;
                    transform: translate(-2px, 2px);
                }
                &:hover{
                    border: 2px solid #8b5cf6;
                    color: #8b5cf6;
                    transition: all .2s;
                }
            }
            img{
                width: 242px;
                @media (max-width:599px){
                    width: 180px;
                }
            }
            @media (max-width:599px){
                gap:30px;
            }
        }
        .select-wallet{
            margin-top: 20px;
            padding: 0 20px;
            color: white;
            background: #4f46e5;
            background: linear-gradient(to top, #4f46e5 0%, #6366f1 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            font-size:16px;
            border-radius: 12px;
            gap:5px;
            height: 50px;
            width:100%;
            opacity: .9;
            &:hover{
                opacity: 1;
            }
            img{
                width: 24px;
            }
        }
        .create-raffle{
            margin-top: 10px;
            padding: 0 30px;
            color: white;
            background: #30213d;
            display: flex;
            align-items: center;
            font-weight: 600;
            font-size:20px;
            border-radius: 12px;
            gap:10px;
            height: 76px;
            width: 100%;
            opacity: .9;
            &:hover{
                opacity: 1;
            }
        }
    }
    .sidebar-main.open{
        left:0;
        transition: all .4s;
    }
    .back-blur{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: #00000094;
        backdrop-filter: blur(12px);
        height: 100vh;
        z-index: 101;
    }
    .bottom-top{
        svg{
            transform: rotate(269deg);
        }
    }
`
export default HeaderStyle
import styled from "@emotion/styled";

const AllRaffelsStyle = styled.div`

.tab_main{
    margin-top: 50px !important;
    max-width: 1536px;
    margin: auto;
    display: flex;
    flex-direction : row;
    @media(max-width:1024px){
        flex-direction : column;
    }
    .tab_header{
        .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected{
            border: none;
            color: #fff;
            background-color: #4f46e5;
            border-radius: 50px;
            padding: 6px 20px;
            font-family: 'Lexend', sans-serif;
            font-weight: bold;
        }
        .css-1h9z7r5-MuiButtonBase-root-MuiTab-root{
            margin: 0px 10px;
            color: #fff !important;
            font-weight: bold;
            border-radius: 50px;
        }
        .css-mhc70k-MuiGrid-root>.MuiGrid-item{
            padding: 0px !important;
        }
        .MuiTabs-indicator{
            background-color: unset;
        }
        .sticky{
            position: sticky;
            top: 75px;
            background-color: #22132e;
            padding: 16px 10px;
            font-size: 20px;
            .search_part{
                padding: 0px 27px 0px 21px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                @media(max-width:824px){
                    padding: 0;
                    display: block;
                    justify-content: unset !important;
                }
                .part_two{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 10px;
                    @media(max-width:824px){
                        margin-top: 16px;
                        padding: 0px 10px;
                    justify-content: unset !important;
                }
        
                    .search{
                        position: relative;
                        .input_theme{
                            transition: .3s;
                            width: 170px;
                            background-color: transparent;
                            border: 2px solid #fff;
                            outline: none;
                            border-radius: 50px;
                            padding: 15px 40px 12px 12px;
                            color: #785296;
                            font-weight: bold;
                            ::placeholder{
                                color: #785296;
                                font-size: 16px;
                                font-weight: bold;
                            }
                            @media(max-width:425px){
                                width: 140px;
                            }
                        }
                        .input_theme.active{
                            border: 2px solid #8256e4;
                            transition: .3s;
        
                            width: 240px;
                        }
                        .search_icon{
                            color: #fff;
                            position: absolute;
                            top: 10px;
                            right: 7px;
                        }
                    }
                    .btn_theme{
                        background-color: #8b5cf6 !important;
                        border: 2px solid #8256e4;
                        font-family: 'Lexend', sans-serif;
                        padding: 8px 12px;
                        border-radius: 50px;
                        color: #fff;
                        font-weight: bold;
                        font-size: 16px;
                        width: 122px;
                        height: 44px;
                        &:hover{
                            background-color: #a78bfa !important;
                        }
                    }
                }
            }
        }
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
                    a {
                        background: linear-gradient(to bottom, #6366f1 0%, #4f46e5 100%);
                        opacity: .9;
                        text-align: center;
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
        .feature_card_two {
            border: 4px solid transparent;
            border-radius: 16px;
            transition: .2s;
            &:hover {
                transform: scale(1.03);
            }
            .SolStein_img {
                line-height: 0;
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
                        color: #4B5563;
                        font-weight: bold;
                        font-size: 14px;
                    }
                    h2 {
                        font-size: 20px;
                        color: #965CF6;
                        font-weight: bold;
                    }
                }
                .winner{
                    p{
                        color: #6B7280;
                        font-weight: 700;
                    }
                    h6{
                        color: #84cc16;
                        font-weight: bold;
                    }
                }
                .viewrafffle {
                    button {
                        text-transform: capitalize;
                        display: flex;
                        flex-direction: column;
                        background-color: #d6d9df;
                        width: 100%;
                        color: #fff;
                        border-radius: 10px;
                        padding: 13px 0;
                        margin-top: 10px;
                        h2 {
                            font-size: 20px;
                            color: #4B5563;
                            font-weight: bold;
                        }
                        p {
                            color: #4B5563;
                            font-weight: 400 !important;
                            font-size: 14px;
                        }
                    }
                    button.yellow_btn{
                        background: linear-gradient(to bottom, #f59e0b 0%, #d97706 100%);
                        opacity: .9;
                        h2{
                            color: white;
                        }
                        p{
                            color: white;
                        }
                        &:hover{
                            opacity: 1;
                        }
                    }
                }
            }
        }
    }
    .tab_header.active{
        width: 75%;
        order: 1;
        @media (max-width:1024px){
            order: 2;
            width: 100%;
        }
    }
    .add-filter{
        display: none;
        padding: 12px 8px 0px;
        @media(max-width:1024px){
            padding: 0px;
        }
    }
    .add-filter.active{
        display: block;
        width: 25%;
        order: 2;
        @media (max-width:1024px){
            order: 1;
            width: 100%;
            width: calc(100% - 20px);
        }
    }
    .sticky{
        position: -webkit-sticky;
        position: sticky;
        z-index: 111;
        top: 0;
        background-color: #22132e;
        padding: 20px 10px;
        .filter_main{
            display: flex;
            h3{
                color: #42296a;
                font-weight:bold;
            }
            .icon_btn_theme{
                background-color: transparent;
                border: none;
                border: 3px solid #fff;
                border-radius: 50%;
                padding: 1px 3px;
                &:hover{
                    border: 3px solid #8b5cf6;
                }
            }
            .heading{
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                .close_theme{
                    font-size: 30px;
                    font-weight: bold;
                    color: #fff;
                    &:hover{
                        color: #8b5cf6;
                    }
                }
            }
        }
    }
    .btn_sec{
        .btn_theme_two{
            padding: 10px 0px;
            font-family: 'Lexend', sans-serif;
            background-color: transparent;
            border: none;
            font-size: 20px;
            color: #fff;
            font-weight: bold;
            :hover{
                color: #8b5cf6;
            }
        }
    }
    .filters{
        h3{
            margin-top: 10px;
            color: #42296a;
            font-weight:bold;
        }
    }
    .search_droupdown{
        margin-top: 16px;
        .title_lable{
            padding-bottom: 10px;
            .title_theme{
                margin-bottom: 10px;
                color: #fff;
                font-size: 18px;
                font-weight: bold;
            }
        }
        .box_theme{
            background-color: transparent;
            
        }
    }
}

.search_droupdown .css-gcwvw8-MuiAutocomplete-root .MuiOutlinedInput-root{
    padding: 0px !important;
}
.search_droupdown .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root{
    color: #8b5cf6;
    font-weight: bold;
    top: -8px;
}
.css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root.Mui-focused{
    color: red !important;
}
.search_droupdown fieldset.MuiOutlinedInput-notchedOutline.css-1d3z3hw-MuiOutlinedInput-notchedOutline{
    border: 3px solid #8b5cf6;
    border-radius: 6px;
}
.search_droupdown .css-b7k0tb-MuiAutocomplete-listbox{
    background-color: #2f164d !important;
    color: #fff !important;
    font-weight: bold;
}
.search_droupdown .css-qzbt6i-MuiButtonBase-root-MuiIconButton-root-MuiAutocomplete-popupIndicator{
    color: #fff;
}
.search_droupdown svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.css-i4bv87-MuiSvgIcon-root{
    color: #fff;
}
.search_droupdown .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused{
    color: #8b5cf6;
}
.search_droupdown input{
    color: #fff !important;
    font-weight: bold;
}
.search_droupdown .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root{
    color: #8b5cf6;
}
.search_droupdown .css-gcwvw8-MuiAutocomplete-root{
    width: 100%;
    @media(max-width:1024px){
        width: 100%;
    }
}
.search_part .css-heg063-MuiTabs-flexContainer{
    flex-wrap: wrap !important;
}
.search_droupdown .css-b7k0tb-MuiAutocomplete-listbox .MuiAutocomplete-option{
    border-bottom: 1px solid #411a78 !important;
    :hover{
        background-color: #8256e4;
    }
}

`
export default AllRaffelsStyle

import React from "react";
import {Link , withRouter } from "react-router-dom";
import styled from "styled-components";

const Header= styled.header`
    color: white;
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height : 50px;
    align-items: center;
    padding: 0px 10px;

    z-index: 10;
    `;

const List = styled.ul`
    display:flex;

`;

const Title= styled(Link)`
    height: 50px;
    color: #f0932b;
    font-weight: 600;
    margin-right: 20px;
    margin-left: 5px;
    display: flex;
    align-items: center;
    font-size: 20px;
    `

const Item = styled.li`
    width: 50px;
    height: 50px;
    text-align: center;
    border-bottom: 5px solid ${props => props.current ? "pink" : "transparent"};
`;

const SLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

export default withRouter ( ({location: { pathname }}) => (
    <Header>
        <Title to="/">HELLOWORLD</Title>
        <List>
            <Item current={pathname==="/"}>
                <SLink to="/">Movies</SLink>
            </Item>
            <Item current={pathname==="/tb"}>
                <SLink to="/tv">TV</SLink>
            </Item>
            <Item current={pathname==="/link"}>
                <SLink to="/search">Search</SLink>
            </Item>
        </List>
    </Header>
));
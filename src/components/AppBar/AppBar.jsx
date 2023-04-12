import { Wrap, NavLinkStyled, ListItem, ListStyled } from './AppBar.styled';

export const AppBar = () => {

    return (
        <Wrap> 
            <ListStyled>
                <ListItem key="Home">
                    <NavLinkStyled to={'/'}></NavLinkStyled>
                </ListItem>
                <ListItem key="Tweets">
                    <NavLinkStyled to={'tweets'}></NavLinkStyled>
                </ListItem>
            </ListStyled>
        </Wrap>
    )
};

import { Wrap, NavLinkStyled, ListItem, ListStyled } from './AppBar.styled';
import { Button } from '../Button/Button'

export const AppBar = () => {

    return (
        <Wrap> 
            <ListStyled>
                <ListItem key="Home">
                    <NavLinkStyled to={'/'} title="Home page"><Button text={'Home'}></Button></NavLinkStyled>
                </ListItem>
                <ListItem key="Tweets">
                    <NavLinkStyled to={'tweets'} title="Tweets"><Button text={'Tweets'}></Button></NavLinkStyled>
                </ListItem>
            </ListStyled>
        </Wrap>
    )
};

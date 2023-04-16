import { Wrap, NavLinkStyled, ListItem, ListStyled } from './AppBar.styled';
import { Button } from '../Button/Button';

export const AppBar = () => {

    return (
        <Wrap> 
            <ListStyled>
                <ListItem key="Home">
                    <NavLinkStyled to={'/'} title="Home page"><Button text={'Home'} place={'btn__nav'}></Button></NavLinkStyled>
                </ListItem>
                <ListItem key="Tweets">
                    <NavLinkStyled to={'tweets'} title="Tweets"><Button text={'Tweets'} place={'btn__nav'}></Button></NavLinkStyled>
                </ListItem>
            </ListStyled>
        </Wrap>
    )
};

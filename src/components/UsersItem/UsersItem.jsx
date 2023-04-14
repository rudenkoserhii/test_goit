import { UsersItemStyled, Logo, Picture, Line, Circle, CircleBorder, Avatar, Name, Tweets, Followers } from "./UsersItem.styled";
import { Button } from "../Button/Button";
import logo from '../../assets/images/logo_goit.png';
import picture from '../../assets/images/card_picture.png;';
import defaultAvatar from '../../assets/images/default_photo.png';

export const UsersItem = ({ id, name, followers, tweets, avatar }) => {

  return (
      <UsersItemStyled key={id}>
<Logo src={logo} alt='logo'/>
<Picture src={picture} alt='displays'/>
<Line/>
<Circle/>
<CircleBorder/>
<Avatar src={avatar ? avatar : defaultAvatar} alt='avatar'/>
<Name>{name}</Name>
<Tweets><span>{tweets}</span><span>tweets</span></Tweets>
<Followers><span>{followers.toString().split('').reverse().map((e, i) => (i + 1) % 3 === 0 ? `,${e}` : e).reverse().join('')}</span><span>followers</span></Followers>
<Button style={{marginRight: 'auto', marginLeft: 'auto'}} text={'follow'}/>
</UsersItemStyled>
  );
};

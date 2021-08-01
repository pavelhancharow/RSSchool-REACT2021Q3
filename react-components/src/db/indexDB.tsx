import like from '../assets/image/like.svg';
import eye from '../assets/image/eye.svg';
import cart from '../assets/image/cart.svg';
import react from '../assets/image/react.png';

type CardType = {
  titleImg: string;
  likeIcon: string;
  eyeIcon: string;
  cartIcon: string;
};

const cardsDB: CardType[] = [
  {
    titleImg: react,
    likeIcon: like,
    eyeIcon: eye,
    cartIcon: cart
  },
  {
    titleImg: react,
    likeIcon: like,
    eyeIcon: eye,
    cartIcon: cart
  },
  {
    titleImg: react,
    likeIcon: like,
    eyeIcon: eye,
    cartIcon: cart
  },
  {
    titleImg: react,
    likeIcon: like,
    eyeIcon: eye,
    cartIcon: cart
  },
  {
    titleImg: react,
    likeIcon: like,
    eyeIcon: eye,
    cartIcon: cart
  },
  {
    titleImg: react,
    likeIcon: like,
    eyeIcon: eye,
    cartIcon: cart
  }
];

export default cardsDB;

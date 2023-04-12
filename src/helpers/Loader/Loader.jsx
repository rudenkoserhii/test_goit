import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { baseColor } from '../../utils/variables';

const onLoading = () => {
  return Loading.circle('Loading...', {
    backgroundColor: 'transparent',
    svgSize: '160px',
    svgColor: `${baseColor.colors.black}`,
    messageFontSize: '20px',
  });
};

const onLoaded = () => {
  return Loading.remove();
};

export { onLoading, onLoaded };
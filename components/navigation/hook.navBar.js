import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as routes from '../../constants/routePaths';

/* reducer / actions */
import { activeNavItem } from '../../modules/reducer.nav';

const Hook = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { current } = useSelector((state) => state.navActivate);

    const handleNavActivate = (item) => {
        dispatch(activeNavItem(item));
    }

    const navigateToHome = () => {
        router.push('/');
        dispatch(activeNavItem('home'));
    }


    const isHome = router.asPath === routes.HOME;

    return [
        isHome,
        current,

        /* actions */

        handleNavActivate,
        navigateToHome
    ]
}

export default Hook;
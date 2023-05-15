import {BsFillBookmarkHeartFill} from 'react-icons/bs'
import styles from './Header.module.scss'
import { useFavorites } from './../../hooks/useFavorites';

const Header = () => {

	const { favorites } = useFavorites() 
	return (
		<header className={styles.header}>
			<BsFillBookmarkHeartFill fontSize={'25px'}/>
			<span>{favorites.length}</span>
		</header>
	)
}

export default Header
import Nav from './Nav'
import layoutStyles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <div className={layoutStyles.contain}>
                {children}
            </div>
        </>
    )
}

export default Layout

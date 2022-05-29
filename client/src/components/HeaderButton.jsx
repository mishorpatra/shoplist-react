import { makeStyles, Typography } from "@material-ui/core"
import {Link} from 'react-router-dom'

const useStyle = makeStyles((theme) => ({
    link: {
        color: '#fff',
        textDecoration: 'none',
        [theme.breakpoints.down('sm')]: {
            color: 'orange'
        }
    },
    items: {
        [theme.breakpoints.down('sm')]: {
            textAlign: 'left',
            fontSize: 14
        }
    }

}))


const HeaderButton = ({handleClose}) => {
    const classes = useStyle()
    return (
        <>
            <Link className={classes.link} to='/' onClick={handleClose} ><Typography className={classes.items}>All</Typography></Link>
            <Link className={classes.link} to='/?Grocery' onClick={handleClose}><Typography className={classes.items}>Grocery</Typography></Link>
            <Link className={classes.link} to='/?Butcher' onClick={handleClose} ><Typography className={classes.items}>Butcher</Typography></Link>
            <Link className={classes.link} to='/?Baker' onClick={handleClose} ><Typography className={classes.items}>Baker</Typography></Link>
            <Link className={classes.link} to='/?Chemist' onClick={handleClose} ><Typography className={classes.items}>Chemist</Typography></Link>
            <Link className={classes.link} to='/?Stationery' onClick={handleClose} ><Typography className={classes.items}>Stationery</Typography></Link>
        </>
    )
}

export default HeaderButton
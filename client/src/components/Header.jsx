import {Box, AppBar, Toolbar, makeStyles, Typography, Button, Drawer, ListItem, List} from '@material-ui/core'
import { Add } from '@material-ui/icons'
import {Link} from 'react-router-dom'
import { useState } from 'react'

//components
import HeaderButton from './HeaderButton'

const useStyle = makeStyles((theme) => ({
    navbar: {
        background: 'orange'
    },
    menubar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    categories: {
        display: 'flex',
        width: '60%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            display: 'none',
            position: 'absolute',
            background: '#fff',
            top: 60,
            width: '30%',
            paddingLeft: 20,
            borderRadius: 5
        }
    },
    options: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '10%',
    },
    link: {
        color: 'inherit',
        textDecoration: 'inherit',
        [theme.breakpoints.down('sm')]: {
            color: '#333'
        }
    },
    catBtn: {
        display: 'none',
        color: '#fff',
        textTransform: 'lowercase',
        fontSize: 16,
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    list: {
        width: 250
    }
}))

const Header = () => {
    const classes = useStyle()

    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }
  
    const list = () => {
        <Box className={classes.list} onClick={handleClose}>
            <List>
                <ListItem Button>
                    <HeaderButton />
                </ListItem>
            </List>
        </Box>
    }
    return (
        <AppBar className={classes.navbar}>
            <Toolbar className={classes.menubar}>
                <Button className={classes.catBtn} onClick={handleOpen}>Categories</Button>
                <Drawer open={open} onClose={handleClose} anchor='left'>
                    <Box p={2} width='80px' textAlign='center' role='presentation' >
                        <Typography style={{color: '#787878', textAlign: 'left', fontSize: 18}}>Explore!</Typography>
                        <HeaderButton handleClose={handleClose} />
                    </Box>
                </Drawer>
                <Box className={classes.categories}>
                    <HeaderButton />
                </Box>
                <Box className={classes.options}>
                    <Link style={{color: 'inherit'}} to='/add'><Add /></Link>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header
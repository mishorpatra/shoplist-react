import {Typography, Card, makeStyles, Box, Menu, MenuItem, Button, CircularProgress} from '@material-ui/core'
import { LocationOn, FavoriteBorder, Favorite } from '@material-ui/icons'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
//import { deleteShop } from '../services/api'
import { deleteShop } from '../redux/Shops'

const useStyle = makeStyles({
    root: {
        minWidth: 200,
        minHeight: 300,
        margin: 15,
    },
    name: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 600
    },
    location: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        '&>*': {
            color: '#333',
            fontSize: 12
        }
    },
    titleBx: {
        background: 'orange',
        padding: '12px 10px'
    },
    category: {
        color: '#fff',
        fontSize: 14
    },
    dates: {
        padding: '0 10px',
        color: '787878',
        fontStyle: 'italic',
        fontSize: 14
    },
    footer: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    menu: {
        fontWeight: '600',
        fontSize: 18,
    },
    link: {
        color: 'inherit',
        textDecoration: 'inherit'
    },
    mid: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    heartOff: {
        '&:hover': {
            cursor: 'pointer'
        }
    },
    heartOn: {
        '&:hover': {
            cursor: 'pointer'
        },
        color: 'red'
    }
})

const Shop = ({data}) => {
    const classes = useStyle()
    const [anchorE1, setAnchorE1] = useState(null)
    const [loading, setLoading] = useState(false)
    const [favorite, setFavorite] = useState(false)
    const dispatch = useDispatch()

    const handleClose = () => {
        setAnchorE1(null)
    }

    const handleClick = (event) => {
        setAnchorE1(event.currentTarget)
    }

    const handleDelete = async () => {
        setLoading(true)
        dispatch(deleteShop({id: data.id}))
        handleClose()
        setLoading(false)
    }

    const handleFavorite = () => {
        setFavorite(!favorite)
    }

    return (
        <Card className={classes.root}>
            <Box className={classes.titleBx} >
                <Typography className={classes.name} >{data.shop_name}</Typography>
                <Typography className={classes.category}>{data.category}</Typography>
                <Box className={classes.location}>
                    <LocationOn />
                    <Typography>{data.area}</Typography>
                </Box>
            </Box>
            <Box className={classes.mid}>
                <Box style={{padding: 10}}>
                    {!favorite && <FavoriteBorder className={classes.heartOff} onClick={() => handleFavorite()} />}
                    {favorite && <Favorite className={classes.heartOn} onClick={() => handleFavorite()} />}
                </Box>
                <img src='data:image/jpeg;base64,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' />
            </Box>
            <Box className={classes.footer}>
                <Box>
                    <Typography className={classes.dates}><span>Since</span> {data.opening_date}</Typography>
                    <Typography className={classes.dates}><span>Until</span> {data.closing_date}</Typography>
                </Box>
                <Box>
                    <Button onClick={handleClick} className={classes.menu}>...</Button>
                    <Menu
                        id='simple-menu'
                        anchorEl={anchorE1}
                        keepMounted
                        open={Boolean(anchorE1)}
                        onClose={handleClose} >
                            <Link className={classes.link} to={`/edit/${data.id}`}><MenuItem onClick={handleClose}>Edit</MenuItem></Link>
                            {!loading && <MenuItem onClick={() => handleDelete()}>Remove</MenuItem>}
                            {loading && <MenuItem><CircularProgress size={20} color='#333' /></MenuItem>}
                        </Menu>
                </Box>
            </Box>
        </Card>
    )
}

export default Shop
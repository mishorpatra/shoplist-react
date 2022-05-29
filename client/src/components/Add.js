import { Box, InputLabel, FormControl, Select, MenuItem, TextField, makeStyles, Typography, Button, CircularProgress } from '@material-ui/core'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import {postShop} from '../services/api'
import { addShop } from '../redux/Shops'
import { useNavigate } from 'react-router-dom'


const useStyle = makeStyles(theme => ({
    
    component: {
        width: '100%',
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '60%',
        width: '30%',
        border: '1px solid #dedede',
        borderRadius: 8,
        padding: '10px 10px 20px 10px',
        [theme.breakpoints.down('sm')]: {
            width: '90%'
        }
    },
    dropdowns: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-around'

    },
    form: {
        width: '40%',
        marginRight: '0 10px'
    },
    name: {
        width: '90%'
    },
    date: {
        width: '90%'
    },
    title: {
        fontSize: 25,
        color: 'orange',
        alignSelf: 'flex-start',
        marginLeft: 20
    },
    button: {
        alignSelf: 'flex-start',
        marginLeft: 20,
        color: '#fff'
    }
}))


const Add = () => {

    const shopList = useSelector((state) => state.shops.value)
    const [shop, setShop] = useState({
        shop_name: '',
        area: '',
        category: '',
        opening_date: '',
        closing_date: '',
        id: shopList[shopList.length-1].id + 1
    }) 
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    
    const handleChange = (e) => {
        setShop({...shop, [e.target.name]: e.target.value})
    }
    const submit = async () => {
        const { shop_name, area, category, opening_date, closing_date } = shop
        if(!shop_name || !area || !category || !opening_date || !closing_date) {
            alert('Please enter all the values')
            return
        }
        setLoading(true)
        dispatch(addShop(shop))
        navigate('/')
        
    }

    const classes = useStyle()
    return (
        <Box className={classes.component} >
            <Box className={classes.container}>
                <Typography className={classes.title}>Add a new shop!</Typography>
                <TextField className={classes.name} name='shop_name' onChange={(e) => handleChange(e)} label='Shop Name'/>
                <Box className={classes.dropdowns}>
                <FormControl className={classes.form}>
                    <InputLabel id='demo-controlled-open-select-label'>Area</InputLabel>
                    <Select labelId='demo-controlled-open-select-label' id='demo-controlled-open-select' name='area' onChange={(e) => handleChange(e)}>
                        <MenuItem value='Thane'>Thane</MenuItem>
                        <MenuItem value='Pune'>Pune</MenuItem>
                        <MenuItem value='Mumbai Suburban'>Mumbai Suburban</MenuItem>
                        <MenuItem value='Nashik'>Nashik</MenuItem>
                        <MenuItem value='Nagpur'>Nagpur</MenuItem>
                        <MenuItem value='Ahmednagar' >Ahmednagar</MenuItem>
                        <MenuItem value='Solapur'>Solapur</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className={classes.form}>
                    <InputLabel id='demo-controlled-open-select-label'>Category</InputLabel>
                    <Select labelId='demo-controlled-open-select-label' id='demo-controlled-open-select' name='category' onChange={(e) => handleChange(e)}>
                        <MenuItem value='Grocery'>Grocery</MenuItem>
                        <MenuItem value='Butcher'>Butcher</MenuItem>
                        <MenuItem value='Baker' >Baker</MenuItem>
                        <MenuItem value='Chemist' >Chemist</MenuItem>
                        <MenuItem value='Stationery' >Stationery</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <TextField className={classes.date} label="Opening date" type='date' InputLabelProps={{shrink: 'true'}} name='opening_date' onChange={(e) => handleChange(e)}/>
            {shop.opening_date && <TextField className={classes.date} label="closing date" type='date' InputLabelProps={{shrink: 'true'}} inputProps={{min: shop.opening_date}}  name='closing_date' onChange={(e) => handleChange(e)}/>}
            {!loading && <Button variant='contained' style={{backgroundColor: 'orange'}} className={classes.button} onClick={() => submit()}>Add</Button>}
            {loading && <Button variant='contained' style={{backgroundColor: 'orange'}} className={classes.button} ><CircularProgress color='#fff' size={20}/></Button>}
            </Box>
        </Box>
    )
}

export default Add
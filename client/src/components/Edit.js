import { Box, InputLabel, FormControl, Select, MenuItem, TextField, makeStyles, Typography, Button, CircularProgress } from '@material-ui/core'
import { useState,  useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateShop } from '../redux/Shops'


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

const Edit = () => {
    const { id } = useParams()
    const shopList = useSelector(state => state.shops.value)
    let initialData = {}
    shopList.map(shopData => {
        if(shopData.id == id) {
            initialData = shopData
        }
    })

    const [shop, setShop] = useState({
        shop_name: initialData.shop_name,
        area: initialData.area,
        category: initialData.category,
        opening_date: initialData.opening_date,
        closing_date: initialData.closing_date,
        id: initialData.id
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
        dispatch(updateShop(shop))
        navigate('/')
        
    }
    const classes = useStyle()
    return (
        <Box className={classes.component} >
            <Box className={classes.container}>
                <Typography className={classes.title}>Update Shop Details!</Typography>
                <TextField className={classes.name} name='shop_name' value={shop.shop_name} onChange={(e) => handleChange(e)} label='Shop Name'/>
                <Box className={classes.dropdowns}>
                <FormControl className={classes.form}>
                    <InputLabel id='demo-controlled-open-select-label'>Area</InputLabel>
                    <Select labelId='demo-controlled-open-select-label' id='demo-controlled-open-select' value={shop.area} name='area' onChange={(e) => handleChange(e)}>
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
                    <Select labelId='demo-controlled-open-select-label' id='demo-controlled-open-select' value={shop.category} name='category' onChange={(e) => handleChange(e)}>
                        <MenuItem value='Grocery'>Grocery</MenuItem>
                        <MenuItem value='Butcher'>Butcher</MenuItem>
                        <MenuItem value='Baker' >Baker</MenuItem>
                        <MenuItem value='Chemist' >Chemist</MenuItem>
                        <MenuItem value='Stationery' >Stationery</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <TextField className={classes.date} label="Opening date" type='date' InputLabelProps={{shrink: 'true'}} defaultValue={shop.opening_date} value={shop.opening_date} name='opening_date' onChange={(e) => handleChange(e)}/>
            <TextField className={classes.date} label="closing date" type='date' InputLabelProps={{shrink: 'true'}} inputProps={{min: shop.opening_date}} defaultValue={shop.closing_date} value={shop.closing_date}  name='closing_date' onChange={(e) => handleChange(e)}/>
            {!loading && <Button variant='contained' style={{backgroundColor: 'orange'}} className={classes.button} onClick={() => submit()}>Update</Button>}
            {loading && <Button variant='contained' style={{backgroundColor: 'orange'}} className={classes.button} ><CircularProgress color='#fff' size={20}/></Button>}
            </Box>
        </Box>
    )
}

export default Edit
import { Box, makeStyles, CircularProgress, Typography } from '@material-ui/core'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
//import { getShops } from '../services/api'
import { useSelector } from 'react-redux'

//components
import Shop from './Shop'

const useStyle = makeStyles((theme) => ({
    component: {
        padding: 50,
        [theme.breakpoints.down('sm')]: {
            padding: 5
        }
    },
    container: {
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'center'
        }
    },
    progress: {
        height: '90vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    
}))

const Home = () => {
    const classes = useStyle()
    const { search } = useLocation()
    let shops = []
    const shopList  = useSelector((state) => state.shops.value)

    if(!search) {
        shops = shopList
    }
    else {
        let query = search.trim().substring(1)
        shopList.map(data => {
            if(data.category === query) shops.push(data)
        })
    }

  

    if(shops.length === 0) return <Box className={classes.progress}><Typography style={{color: '#333', fontSize: 12}}>No shop Found</Typography></Box>
    return (
        <Box className={classes.component}>
            <Box className={classes.container}>
                {
                    shops.map(data => (
                        <Shop data={data}  />
                    ))
                }
            </Box>
        </Box>
    )
}

export default Home
import React from 'react'
import { useNavbarStyles } from '../../styles'
import { AppBar, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const classes = useNavbarStyles()
    return (
        <AppBar className={classes.appBar}>
            <section className={classes.section}>
                <Logo />
            </section>
        </AppBar>
    )
}

function Logo() {
    const classes = useNavbarStyles()
    return (
        <div className={classes.logoContainer}>

            <div className={classes.logoWrapper}>
                <Button component={Link} to='/'>
                    njamnjam
                </Button>
            </div>

        </div>
    )
}

export default Navbar

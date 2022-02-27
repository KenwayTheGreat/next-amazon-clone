import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'
import Head from 'next/head'
import React from 'react'
import useStyles from '../Utils/styles'

type Props = {
    children: JSX.Element
}

const Layout: React.FC<Props> = ({ children }) => {
    const classes = useStyles();
    return (
        <div>
            <Head>
                <title>Next Amazonas</title>
            </Head>
            <AppBar position='static' className={classes.navbar}>
                <Toolbar>
                    <Typography>amazonas</Typography>
                </Toolbar>
            </AppBar>
            <Container className={classes.main}>
                {children}
            </Container>
            <footer className={classes.footer}>
                <Typography>All rights reserved. Next Amazonas.</Typography>
            </footer>
        </div>
    )
}

export default Layout

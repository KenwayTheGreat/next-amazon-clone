import { AppBar, Container, Link, List, Toolbar, Typography } from '@material-ui/core'
import Head from 'next/head'
import NextLink from 'next/link'
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
                    <NextLink href="/" passHref>
                        <Link>
                            <Typography className={classes.brand}>amazonas</Typography>
                        </Link>
                    </NextLink>
                    <div className={classes.grow}></div>
                    <div>
                        <NextLink href="/cart" passHref>
                            <Link>Cart</Link>
                        </NextLink>
                        <NextLink href="/login" passHref>
                            <Link>Login</Link>
                        </NextLink>
                    </div>
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

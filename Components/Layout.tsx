import {
    AppBar,
    Container,
    createTheme,
    CssBaseline,
    Link,
    Switch,
    ThemeProvider,
    Toolbar,
    Typography
} from '@material-ui/core'
import Head from 'next/head'
import NextLink from 'next/link'
import React, { useContext } from 'react'
import useStyles from '../Utils/styles'
import { Store } from "../Utils/store";
import Cookies from 'js-cookie';

type Props = {
    // eslint-disable-next-line no-undef
    children: JSX.Element
    title?: string
    description?: string
}

const Layout: React.FC<Props> = ({ children, title, description }) => {


    const { state, dispatch } = useContext(Store);
    const { darkMode } = state;
    const theme = createTheme({
        typography: {
            h1: {
                fontSize: '1.6rem',
                fontWeight: 600,
                margin: '1rem 0'
            },
            h2: {
                fontSize: '1.4rem',
                fontWeight: 400,
                margin: '1rem 0'
            },
            h3: {
                fontSize: '1.6rem',
                fontWeight: 400,
                margin: '1rem 0'
            },
            h4: {
                fontSize: '1.6rem',
                fontWeight: 400,
                margin: '1rem 0'
            },
            h5: {
                fontSize: '1.6rem',
                fontWeight: 400,
                margin: '1rem 0'
            },
            body1: {
                fontWeight: 'normal'
            }
        },

        palette: {
            type: darkMode ? 'dark' : 'light',
            primary: {
                main: '#f0c000',
            },
            secondary: {
                main: '#208080'
            }
        }

    });
    const classes = useStyles();
    const darkModeChangeHandler = () => {
        dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
        const newDarkMode = !darkMode;
        Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF')
    }
    return (
        <div>
            <Head>
                <title>{title ? `${title} | Next Amazona` : "Next Amazona"}</title>
                {description && <meta name="description" content={description} />}
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar position='static' className={classes.navbar}>
                    <Toolbar>
                        <NextLink href="/" passHref>
                            <Link>
                                <Typography className={classes.brand}>amazonas</Typography>
                            </Link>
                        </NextLink>
                        <div className={classes.grow}></div>
                        <div>
                            <Switch
                                checked={darkMode}
                                onChange={darkModeChangeHandler}
                            ></Switch>
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
            </ThemeProvider>
        </div>
    )
}

export default Layout

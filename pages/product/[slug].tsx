import React from 'react'
import { useRouter } from 'next/router'
import data from '../../Utils/data';
import Layout from '../../Components/Layout';
import NextLink from 'next/link';
import Image from 'next/image';
import { Button, Card, Grid, Link, List, ListItem, Typography } from '@material-ui/core';
import useStyles from '../../Utils/styles';


function ProductScreen() {
    const classes = useStyles();
    const router = useRouter();
    const { slug } = router.query;
    const product = data.products.find(p => p.slug === slug)

    if (!product) {
        return <div>Product Not Found !</div>
    }
    return (
        <Layout title={product.name} description={product.description}>
            <>
                <div className={classes.section}>
                    <NextLink href="/" passHref>
                        <Link>
                            <Typography>
                                Back to Products
                            </Typography>
                        </Link>
                    </NextLink>
                </div>
                <Grid container spacing={1}>
                    <Grid item md={6} xs={12} >
                        <Image src={product.image} alt={product.name} width={642} height={642} layout="responsive" />
                    </Grid>
                    <Grid item md={3} xs={12} >
                        <List>
                            <ListItem>
                                <Typography component="h1" variant='h1'>
                                    {product.name}
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography>
                                    Category: {product.category}
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography>
                                    Brand: {product.brand}
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography>
                                    Rating: {product.rating} Stars ({product.numReviews} Reviews)
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography>
                                    Description: {product.description}
                                </Typography>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item md={3} xs={12} >
                        <Card>
                            <List>
                                <ListItem>
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <Typography>Price </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography>$ {product.price} </Typography>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                                <ListItem>
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <Typography>Status </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography> {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}  </Typography>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                                <ListItem>
                                    <Button fullWidth variant="contained" color="primary">
                                        <Typography>Add to Cart </Typography>
                                    </Button>
                                </ListItem>
                            </List>
                        </Card>
                    </Grid>
                </Grid>
            </>
        </Layout>
    )
}

export default ProductScreen

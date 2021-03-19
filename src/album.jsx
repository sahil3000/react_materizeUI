import React from 'react';
import {Typography, AppBar,Toolbar, CssBaseline, Container, Button, Grid, Card, CardMedia, CardContent, CardActions} from '@material-ui/core';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import useStyles from './styles';

const cardLoop=[1,2,3,4,5,6,7,8,9];

const Album = ()=>{
    const classes = useStyles();
    return(
        <>
            <CssBaseline/>
            <AppBar position="relative" color="primary">
                <Toolbar>
                    <CameraIcon className={classes.icon} />
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            
            <main>
                <div className={classes.container} >
                   <Container maxWidth="sm">
                       <Typography variant="h2" align="center" color="textPrimary" gutterBottom >
                            Photo Album
                       </Typography>
                       <Typography variant="h6" align="center" color="textSecondary" paragraph >
                            Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
                       </Typography>
                       
                       <div className={classes.button}>
                            <Grid container spacing={2} justify="center" >
                                <Grid item>
                                    <Button variant="contained" color="primary" >See my Photo</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary" >Secondary actions</Button>
                                </Grid>
                            </Grid>
                        </div>                       

                    </Container>
                </div>

                {/* card */}
                <Container className={classes.cardGrid} maxWidth="md" >
                    <Grid container spacing={4} >
                        {cardLoop.map((card)=>(
                            <Grid item xs={12} sm={6} md={4}  key={card} >
                                <Card>
                                    {/* image css is mandatory i.e their height */}
                                    <CardMedia className={classes.image} image="https://source.unsplash.com/random" title="Image"/>
                                    
                                    <CardContent>
                                        <Typography variant="h5" gutterBottom >Heading</Typography>
                                        <Typography>This is a media card. You can use this section to describe the content.</Typography>
                                    </CardContent>

                                    <CardActions>
                                        <Button size="small" color="primary" >View</Button>
                                        <Button size="small" color="primary" >Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))};
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>Footer</Typography>
                <Typography  align="center" color="textSecondary" >Something here to give the footer a purpose!</Typography>
                <Typography align="center" color="textSecondary" >Copyright @ Your Website 2021</Typography>
            </footer>
        </>
    );
}
export default Album;
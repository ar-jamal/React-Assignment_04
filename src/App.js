import React, { useState } from 'react';
import classNames from 'classnames';
import {
  AppBar,
  Grid,
  Button,
  Toolbar,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CssBaseline,
} from '@mui/material';
import { Star as StarIcon } from '@mui/icons-material';
import { withStyles } from '@mui/styles';
import { useNavigate, useNavigation } from 'react-router-dom';
import DATA from './Utils/Data'

const styles = theme => {
  console.log(theme);
  return ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },

    appBar: {
      position: 'relative',
    },
    toolbarTitle: {
      flex: 1,
    },
    layout: {
      width: 'auto',
      paddingX: '20%',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
        width: 900,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    header: {
      maxWidth: 600,
      margin: '0 auto',
      padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    cardHeader: {
      backgroundColor: theme.palette.grey[200],
    },
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing.unit * 2,
    },
    cardActions: {
      [theme.breakpoints.up('sm')]: {
        paddingBottom: theme.spacing.unit * 2,
        display: 'flex',
        alignItems: 'center'
      },
    },
    footer: {
      marginTop: theme.spacing.unit * 8,
      borderTop: `1px solid ${theme.palette.divider}`,
      padding: '30px'
    },
  })
};


const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

function Pricing(props) {
  const { classes } = props;
  const navigate = useNavigate();
  const [data, setData] = useState(DATA);

  return (
    <div className={classes.mainDiv}>
      <CssBaseline />
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Company name
          </Typography>
          <Button onClick={() => navigate("/")}>Home</Button>
          <Button onClick={() => navigate("/contacts")}>Contacts</Button>
          <Button onClick={() => navigate("/services")}>Services</Button>
          <Button onClick={() => navigate("/profiles")}>Plumber's Profile</Button>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <div className={classes.header}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Plumbing All in One
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" component="p">
            We Provide all Plumbing solutions, Professional Plumbers at your doorstep , hardware and Accessories,
            repairing and installations.
          </Typography>
        </div>

        <Grid container spacing={5} justifyContent="center" paddingX='20%' paddingY='5%' >
          {data.map(e => (
            <Grid item key={e.Title} xs={12} md={4}>
              <Card style={{ height: '400px' }}>
                <CardHeader
                  title={e.Title}
                  titleTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h4" color="textPrimary">
                      ${e.Price}
                    </Typography>
                    {/* <img src= {require("./Utils/Images/Accessories-1.jpeg")}/> */}
                  </div>
                  {e.Description.map(line => (
                    <Typography variant="subtitle1" align="center" key={line}>
                      {line}
                    </Typography>
                  ))}
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <Button fullWidth variant={e.ButtonVariant} color="primary">
                    {e.ButtonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </main>
      <footer className={classNames(classes.footer, classes.layout)}>
        <Grid container spacing={32} justify="space-evenly">
          {footers.map(footer => (
            <Grid item xs key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              {footer.description.map(item => (
                <Typography key={item} variant="subtitle1" color="textSecondary">
                  {item}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </footer>
    </div>
  );
}

// Pricing.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(Pricing);



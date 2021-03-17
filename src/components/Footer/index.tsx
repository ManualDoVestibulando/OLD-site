import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.primary.main,
        // marginTop: theme.spacing(8),
        padding: theme.spacing(6, 0),
        color: theme.palette.common.white
    },
}));

export default function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    Manual do Vestibulando
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Tudo que você já quis saber sobre o ingresso na USP, em um só lugar
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                    <Link color="inherit" href="https://github.com/ManualDoVestibulando/site-v0">
                        {'Somos opensource <3'}
                    </Link>
                </Typography>
            </Container>
        </footer>
    );
}
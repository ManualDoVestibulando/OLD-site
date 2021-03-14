import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "../Logo";
import NextLink from "next/link";
import Link from "@material-ui/core/Link";
import AppBar from "@material-ui/core/AppBar";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    cursor: "pointer",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar elevation={0} color="default" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Logo className={classes.toolbarTitle} />
        <nav>
          <NextLink href="#">
            <Link variant="button" color="textPrimary" className={classes.link}>
              Pesquisar Cursos
            </Link>
          </NextLink>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

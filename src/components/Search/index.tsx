import {makeStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {useRouter} from "next/router";

const useStyles = makeStyles((theme) => ({
    search: {
        width: "90vw",
        maxWidth: 600,
    },
}));

export type SearchOption = {
    title: string;
    href: string;
};

type SearchType = {
    options: SearchOption[];
};

const Search = ({options}: SearchType) => {
    const router = useRouter();
    const classes = useStyles();
    return (
        <Autocomplete
            className={classes.search}
            options={options}
            onChange={(event: any, newValue: SearchOption | null) => {
                if (newValue != null) {
                    router.push(newValue.href);
                }
            }}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => <TextField {...params} variant="outlined"/>}
        />
    );
};

export default Search;

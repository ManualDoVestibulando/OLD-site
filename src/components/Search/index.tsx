import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useRouter } from "next/router";

export type SearchOption = {
  title: string;
  href: string;
};

type SearchType = {
  options: SearchOption[];
};

const Search = ({ options }: SearchType) => {
  const router = useRouter();
  return (
    <Autocomplete
      style={{ width: 600 }}
      options={options}
      onChange={(event: any, newValue: SearchOption | null) => {
        if (newValue != null) {
          router.push(newValue.href);
        }
      }}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => <TextField {...params} variant="outlined" />}
    />
  );
};

export default Search;

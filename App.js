import { Form, Field } from "react-final-form";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import SearchTextField from "./components/SearchTextField";


function App() {
  const onValidate = (value) => {
    const errors = {};
    if (value.searchInput === undefined) {
      errors.searchInput = 'Введите значние'
    }
    return errors;

  };

  const onSubmit = (formValue,form) => {
    console.log(formValue)
    form.reset()
  };

  return (
      <Form
          onSubmit={onSubmit}
          validate={onValidate}
          initialValues ={{
            searchInput : "test"
          }}
          render={(formProps) => {
            const { handleSubmit, valid} = formProps
            return (
                <Paper
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{ width: "25%", margin: "0 auto", padding: "2px" }}
                    autoComplete="off"
                >
                  <Box component='div' sx={{ display: "flex", alignItems: "flex-end", mb: "20px" }}>
                    <Field
                        component={SearchTextField}
                        name="searchInput"
                        id="standard-search"
                        label="Search field"
                        type="search"
                        variant="standard"
                    />
                    <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                  </Box>
                  <Button
                      disabled={!valid}
                      type="submit"
                      variant="contained">
                    Find
                  </Button>
                </Paper>
            );
          }}
      />
  );
}

export default App;

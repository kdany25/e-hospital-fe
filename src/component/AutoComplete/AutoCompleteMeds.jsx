import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

// Dummy data array
const medicines = [
  { name: "Ibuprofen", price: 10, expiration: "2023-06-01" },
  { name: "Acetaminophen", price: 8, expiration: "2024-01-15" },
  { name: "Aspirin", price: 5, expiration: "2022-11-30" },
  { name: "Naproxen", price: 12, expiration: "2023-08-10" },
  { name: "Benadryl", price: 7, expiration: "2022-12-31" },
];

const AutocompleteMui = () => {
  // State to keep track of selected values
  const [selectedValues, setSelectedValues] = React.useState([]);

  return (
    <Autocomplete
      multiple
      id="medicine-selection"
      options={medicines}
      getOptionLabel={(option) => option.name}
      value={selectedValues}
      onChange={(event, newValue) => {
        setSelectedValues(newValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Medicine"
          placeholder="Select"
        />
      )}
      renderOption={(option) => (
        <div>
          <div>{option.name}</div>
          <div>Price: ${option.price}</div>
          <div>Expiration: {option.expiration}</div>
        </div>
      )}
    />
  );
};

export default AutocompleteMui;

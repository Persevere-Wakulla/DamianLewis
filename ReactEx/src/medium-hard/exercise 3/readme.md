# Form Input Validation with useEffect
## Create a ValidatedInput component that validates user input and shows an error message if the input is invalid. Use the useEffect hook to perform validation whenever the input value changes, simulating componentDidUpdate behavior. This exercise will help you understand how to use the useEffect hook for performing validation based on changes in state and the importance of the dependency array.
### Expectations

* Validate user input based on a provided validation function.
``` 
const validateLength = (value) => value.length >= 5;
```

* Display an error message if the input is invalid.

* Perform validation whenever the input value changes.
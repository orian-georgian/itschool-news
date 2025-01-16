import { Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import debounce from "lodash.debounce";
import { updateQuery } from "../../redux/searchSlice";
import { useState, useCallback } from "react";

export function Search() {
  const query = useSelector((state) => state.search.query);
  const [text, setText] = useState(query);
  const dispatch = useDispatch();

  const debouncedOnChange = useCallback(
    debounce((inputValue) => {
      dispatch(updateQuery(inputValue));
    }, 500),
    [dispatch]
  );

  const handleSearch = (e) => {
    const value = e.target.value;

    setText(value);
    debouncedOnChange(value);
  };

  return (
    <Form.Control
      value={text}
      size="lg"
      type="text"
      placeholder="Search..."
      onChange={handleSearch}
    />
  );
}

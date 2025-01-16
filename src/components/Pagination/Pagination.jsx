import { Button, Form, InputGroup, Stack, Container } from "react-bootstrap";
import {
  FiChevronsLeft,
  FiChevronLeft,
  FiChevronRight,
  FiChevronsRight,
} from "react-icons/fi";

const pageSizeOptions = [10, 20, 30, 40, 50];

export function Pagination({
  totalPages,
  page,
  pageSize,
  onNext,
  onPrevious,
  onPage,
  onPageSizeChange,
}) {
  function handleNext(e) {
    e.preventDefault();

    onNext?.();
  }

  function handlePrevious(e) {
    e.preventDefault();

    onPrevious?.();
  }

  function handleFirst(e) {
    e.preventDefault();

    onPage?.(1);
  }

  function handleLast(e) {
    e.preventDefault();

    onPage?.(totalPages);
  }

  function handleCurrentPageChange(e) {
    onPage?.(e.target.value);
  }

  function handlePageSizeChange(e) {
    onPageSizeChange?.(e.target.value);
  }

  return (
    <Container>
      <Stack
        direction="horizontal"
        className="justify-content-center align-items-center gap-3"
      >
        <InputGroup className="w-auto">
          <Button
            variant="outline-secondary"
            disabled={page === 1}
            onClick={handleFirst}
          >
            <FiChevronsLeft />
          </Button>
          <Button
            variant="outline-secondary"
            disabled={page === 1}
            onClick={handlePrevious}
          >
            <FiChevronLeft />
          </Button>
          <Form.Control
            width="75px"
            aria-label="Example text with two button addons"
            value={page}
            type="number"
            min={0}
            max={totalPages}
            onChange={handleCurrentPageChange}
          />
          <InputGroup.Text id="basic-addon1">{totalPages}</InputGroup.Text>
          <Button
            variant="outline-secondary"
            disabled={page === totalPages}
            onClick={handleNext}
          >
            <FiChevronRight />
          </Button>
          <Button
            variant="outline-secondary"
            disabled={page === totalPages}
            onClick={handleLast}
          >
            <FiChevronsRight />
          </Button>
        </InputGroup>
        <Form.Select
          className="w-auto"
          value={pageSize}
          aria-label="Default select example"
          onChange={handlePageSizeChange}
        >
          {pageSizeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Form.Select>
      </Stack>
    </Container>
  );
}

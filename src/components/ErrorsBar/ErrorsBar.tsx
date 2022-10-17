import Alert from "react-bootstrap/Alert";
import ListGroup from "react-bootstrap/ListGroup";

interface ErrorMessageBarProps {
  errors: string[];
  title?: string;
}

export const ErrorsBar: React.FC<ErrorMessageBarProps> = ({
  errors,
  title = "Errors",
}): JSX.Element => (
  <Alert variant="danger">
    <Alert.Heading>{title}</Alert.Heading>
    <ListGroup>
      {errors.map((error: string) => (
        <ListGroup.Item key={error} variant="danger">
          {error}
        </ListGroup.Item>
      ))}
    </ListGroup>
  </Alert>
);

export function Contact(props) {
  return (
    <li onClick={props.onClick}>
      {props.name}: {props.number} <button type="button">Delete</button>
    </li>
  );
}

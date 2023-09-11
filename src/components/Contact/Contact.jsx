export function Contact(props) {
  return (
    <li>
      {props.name}: {props.number}
      <button id={props.id} type="button" onClick={props.onClick}>
        Delete
      </button>
    </li>
  );
}

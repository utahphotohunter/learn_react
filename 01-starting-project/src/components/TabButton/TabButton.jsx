/* ******************************************
 * The 'children' property is built into
 * react and passes anything between the
 * opening and closing tags of the
 * component to the function. The name
 * 'children' is not optional.
 *
 * 'onSelect' is a custom name and can be
 * called whatever is preferred
 * **************************************** */
export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>{children}</button>
    </li>
  );
}

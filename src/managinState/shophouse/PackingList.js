const PackingList = ({ items, onChangeItem, onDeleteItem }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} style={{ listStyle: "none" }}>
          <label>
            <input
              type="checkbox"
              checked={item.packed}
              onChange={(e) => {
                onChangeItem({
                  ...item,
                  packed: e.target.checked,
                });
              }}
            />
            {item.title}
          </label>
          <button onClick={() => onDeleteItem(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
export default PackingList;

const QuantityItem = ({ value, isActive, handleClick }) => {
  return (
    <p
      role="button"
      tabIndex={0}
      className={`wallet-quantity-item ${isActive ? "active" : ""}`}
      onClick={handleClick}
    >
      {value}
    </p>
  );
};

export default QuantityItem;

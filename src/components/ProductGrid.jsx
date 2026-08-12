import PropTypes from "prop-types";
import { sortProductsByName } from "../lib/theme";

export default function ProductGrid({ products }) {
  return (
    <ul>
      {sortProductsByName(products).map((p) => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  );
}

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, name: PropTypes.string })).isRequired,
};

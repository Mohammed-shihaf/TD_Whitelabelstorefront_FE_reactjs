import PropTypes from "prop-types";
import { themeStyles } from "../lib/theme";

export default function TenantBanner({ tenant }) {
  return (
    <div style={themeStyles(tenant)}>
      <h1>{tenant.brand} storefront (React, self-serve)</h1>
    </div>
  );
}

TenantBanner.propTypes = {
  tenant: PropTypes.shape({ brand: PropTypes.string, primaryColor: PropTypes.string }).isRequired,
};

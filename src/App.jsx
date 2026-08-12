import { useEffect, useState } from "react";
import TenantBanner from "./components/TenantBanner";
import ProductGrid from "./components/ProductGrid";

// White-Label Storefront: React serves SELF-SERVE tenants only.
// Enterprise tenants get the Angular storefront instead.
export default function App() {
  const [tenant, setTenant] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/tenant-config", { headers: { "x-tenant-id": "acme" } })
      .then((r) => r.json())
      .then(setTenant)
      .catch(() => {});
    fetch("/api/tenant-products", { headers: { "x-tenant-id": "acme" } })
      .then((r) => r.json())
      .then((d) => setProducts(d.products))
      .catch(() => {});
  }, []);

  if (!tenant) return <p>Loading tenant…</p>;

  return (
    <div>
      <TenantBanner tenant={tenant} />
      <ProductGrid products={products} />
    </div>
  );
}

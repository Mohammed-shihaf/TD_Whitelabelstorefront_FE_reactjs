// Pure tenant-theming logic - real business rules.
export function themeStyles(tenant) {
  return { background: tenant.primaryColor, color: "#ffffff" };
}

export function sortProductsByName(products) {
  return [...products].sort((a, b) => a.name.localeCompare(b.name));
}

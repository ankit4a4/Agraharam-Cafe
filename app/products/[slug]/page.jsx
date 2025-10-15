import products from "../../data/products";
import ProductDetail from "./ProductDetail";

// Required for static export: predefine all product slugs
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Server component
export default function ProductPage({ params }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl text-gray-600">
        Product not found
      </div>
    );
  }

  return <ProductDetail product={product} />;
}

import { createFileRoute } from '@tanstack/react-router';
import ProductSubcategoryPage from '../components/space/ProductSubcategoryPage';

export const Route = createFileRoute('/interior/$subcategory')({
  component: InteriorSubcategoryRoute,
});

function InteriorSubcategoryRoute() {
  const { subcategory } = Route.useParams();
  return <ProductSubcategoryPage category="Interior" slug={subcategory} />;
}

import { createFileRoute } from '@tanstack/react-router';
import Seo from '../components/seo/Seo';
import SpaceLanding from '../components/space/SpaceLanding';

export const Route = createFileRoute('/interior')({
  component: InteriorPage,
});

function InteriorPage() {
  return (
    <>
      <Seo
        title="Interior marble & stone solutions"
        description="Marble flooring, cladding, kitchens, mandirs, and staircases by Niket Marble & Interior."
        path="/interior"
      />
      <SpaceLanding
        space="interior"
        title="Interior solutions"
        intro="Floors that hold chandelier light, kitchens that work hard, and sacred rooms carved in Makrana white."
        heroImage="/Image/Interior/PG12012-1.png"
      />
    </>
  );
}

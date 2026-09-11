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
        description="Marble flooring, cladding, kitchens, mandirs, and staircases by Niket Marble & Stone."
        path="/interior"
      />
      <SpaceLanding
        space="interior"
        title="Interior solutions"
        intro="Floors that hold chandelier light, kitchens that work hard, and sacred rooms carved in Makrana white."
        heroImage="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=2000&q=80"
      />
    </>
  );
}

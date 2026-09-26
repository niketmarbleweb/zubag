import { createFileRoute } from '@tanstack/react-router';
import Seo from '../components/seo/Seo';
import SpaceLanding from '../components/space/SpaceLanding';

export const Route = createFileRoute('/exterior')({
  component: ExteriorPage,
});

function ExteriorPage() {
  return (
    <>
      <Seo
        title="Tile facades & landscape"
        description="Makrana, Dholpur, Jaisalmer, Kota, granite facades, driveways, and landscape tiles from Niket Tiles & Interior."
        path="/exterior"
      />
      <SpaceLanding
        space="exterior"
        title="Tile facades"
        intro="Elevations, courts, and gardens specified for Indian sun, dust, and monsoon — crafted in premium tiles and stone."
        heroImage="/Image/Marble/RAIN-FOREST-GOLD-PG-059.jpg"
      />
    </>
  );
}

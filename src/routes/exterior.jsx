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
        title="Marble facades & landscape"
        description="Makrana, Dholpur, Jaisalmer, Kota, granite facades, driveways, and landscape marble from Niket Marble & Interior."
        path="/exterior"
      />
      <SpaceLanding
        space="exterior"
        title="Marble facades"
        intro="Elevations, courts, and gardens specified for Indian sun, dust, and monsoon — crafted in premium marble and stone."
        heroImage="/Image/Marble/RAIN-FOREST-GOLD-PG-059.jpg"
      />
    </>
  );
}

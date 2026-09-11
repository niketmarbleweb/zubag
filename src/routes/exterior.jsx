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
        title="Exterior stone facades & landscape"
        description="Dholpur, Jaisalmer, Kota, granite facades, driveways, and landscape stone from Niket Marble & Stone."
        path="/exterior"
      />
      <SpaceLanding
        space="exterior"
        title="Exterior solutions"
        intro="Elevations, courts, and gardens specified for Indian sun, dust, and monsoon — not just a mood board."
        heroImage="https://images.unsplash.com/photo-1487956382158-bb926046304a?auto=format&fit=crop&w=2000&q=80"
      />
    </>
  );
}

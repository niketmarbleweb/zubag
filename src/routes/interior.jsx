import { createFileRoute, Outlet, useRouterState } from '@tanstack/react-router';
import Seo from '../components/seo/Seo';
import SpaceLanding from '../components/space/SpaceLanding';

export const Route = createFileRoute('/interior')({
  component: InteriorPage,
});

function InteriorPage() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  if (pathname !== '/interior') return <Outlet />;

  return (
    <>
      <Seo
        title="Interior tile & stone solutions"
        description="Tile flooring, cladding, kitchens, mandirs, and staircases by Niket Tiles & Interior."
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

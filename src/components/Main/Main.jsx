import { Outlet } from 'react-router-dom';
import { SectionStyled, MainStyled } from './Main.styled';
import { Suspense } from 'react';

export const Main = () => {
  return (
<MainStyled>
    <SectionStyled>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </SectionStyled>
</MainStyled>
  );
};
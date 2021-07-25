import { SNavList, SNavListItem, SHintSpan, SSpecialButton } from './styled';

const Menu = ({ isMobile = false }: { isMobile?: boolean }) => {
  const MenuItem: React.FC<{ hint: string }> = ({ children, hint }) => (
    <SNavListItem>
      {children} {isMobile && <SHintSpan>{hint}</SHintSpan>}
    </SNavListItem>
  );

  return (
    <SNavList>
      <MenuItem hint="...frontend">/www/public</MenuItem>
      <MenuItem hint="...backend">/api</MenuItem>
      <MenuItem hint="...everything else">/dev/null</MenuItem>
      {isMobile ? (
        <SNavListItem>logout</SNavListItem>
      ) : (
        <SSpecialButton>logout</SSpecialButton>
      )}
    </SNavList>
  );
};

export default Menu;

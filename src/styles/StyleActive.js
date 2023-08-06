export const activeStyle = isActive => ({
  color: isActive ? 'black' : '',
  fontWeight: isActive ? 600 : '',
  borderRadius: isActive ? '3px' : '',
  boxShadow: isActive
    ? 'rgba(0, 0, 0, 0.4) 1px 1px 4px, rgba(0, 0, 0, 0.3) 3px 3px 4px, rgba(0, 0, 0, 0.2) -5px -4px 0px inset'
    : '',
  transform: isActive ? 'scale(1.1)' : '',
});

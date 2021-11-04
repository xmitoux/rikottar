import AppBar from '../../components/hide-appbar';
import BottomNavigation from '../../components/bottom-navigation';

export default function MuiTest() {
  return (
    <div>
      <AppBar title="Rikotter"></AppBar>
      <div>
        {[...new Array(12)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
          )
          .join('\n')}
      </div>
      <BottomNavigation />
    </div>
  );
}

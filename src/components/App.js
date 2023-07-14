import Header from './ui/Header';

function App() {
  return (
    <div className="App">
      <Header />
      {[...new Array(120)]
        .map(() => {
          return `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut tellus elementum sagittis vitae et leo duis. Magna fringilla urna porttitor rhoncus dolor purus non. Nisl pretium fusce id velit. Ullamcorper eget nulla facilisi etiam dignissim diam quis. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Pellentesque massa placerat duis ultricies lacus sed. Dictum non consectetur a erat nam. Dictum varius duis at consectetur lorem donec. Et leo duis ut diam quam nulla porttitor massa id. Senectus et netus et malesuada fames ac turpis egestas. Pharetra magna ac placerat vestibulum lectus. Scelerisque varius morbi enim nunc faucibus a pellentesque. Varius duis at consectetur lorem donec massa. Diam ut venenatis tellus in metus vulputate. Eget nulla facilisi etiam dignissim diam quis enim. Aliquam ut porttitor leo a diam. Lobortis feugiat vivamus at augue.`;
        })
        .join('\n')}
    </div>
  );
}

export default App;

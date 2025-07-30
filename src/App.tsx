import { TableView } from './components/TableView';

function App() {
  return (
    <div className="p-4 max-w-6xl mx-auto w-full">
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">
        Artworks Table
      </h1>
      <TableView />
    </div>
  );
}

export default App;

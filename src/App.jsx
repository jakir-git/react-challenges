import ConditionalRender from "./components/Conditional";
import PackingList from "./components/PackingList";

export default function App() {
  return (
    <div>
      <div>
        <PackingList />
        <ConditionalRender />
      </div>
    </div>
  );
}

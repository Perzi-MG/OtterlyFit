import "./global.css";
import Main from './components/Main';
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Main />
    </>
  );
}
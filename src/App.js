import "./App.css";
import ClassMount from "./components/LifecycleMethods/ClassMount";
import ClassUpdate from "./components/LifecycleMethods/ClassUpdate";
import ClassUnmount from "./components/LifecycleMethods/ClassUnmount";
import FunctionLifecycle from "./components/LifecycleMethods/FunctionLifecycle";
import UseStateEg1 from "./components/Hooks/UseState/UseStateEg1";
import UseStateEg2 from "./components/Hooks/UseState/UseStateEg2";
import UseEffectEg1 from "./components/Hooks/UseEffect/UseEffectEg1";
import UseEffectEg2 from "./components/Hooks/UseEffect/UseEffectEg2";
import UseContext from "./components/Hooks/UseContext/UseContext";
import UseReducer from "./components/Hooks/UseReducer/UseReducer";
import UseRef from "./components/Hooks/UseRef/UseRef";

function App() {
  return (
    <>
      {/* <h1>Using Class Lifecycle Method</h1>

      <h5>1. Class Mounting</h5>
      <ClassMount />
      <h5>2. Class Updating</h5>
      <ClassUpdate />
      <h5>3. Class Unmounting</h5>
      <ClassUnmount /> */}

{/* 
      <h1>Using Functional Lifecycle Method</h1>
      <FunctionLifecycle /> */}

     {/* Hooks */}

     <UseStateEg1/>
     <UseStateEg2/>

     <UseEffectEg1/>
     <UseEffectEg2/>


     <UseContext/>


     <UseReducer/>

      <UseRef/>
    </>
  );
}

export default App;

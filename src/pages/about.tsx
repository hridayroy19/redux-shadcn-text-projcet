import { Button } from "@/components/ui/button";
import { decrement, increment } from "@/redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

const Counter = () => {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const handeleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };

  const handeleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className=" w-full mt-9 mx-auto justify-center flex">
      <div>
        <Button onClick={() => handeleIncrement(1)}> increment</Button>
        <Button className=" ml-9" onClick={() => handeleIncrement(5)}> increment 5 </Button>
        <div className=" mt-2 mb-2 ml-9 text-xl"> {count} </div>
        <Button onClick={handeleDecrement}> decrement</Button>
      </div>
    </div>
  );
};

export default Counter;

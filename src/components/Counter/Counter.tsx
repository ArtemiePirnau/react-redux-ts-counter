import { increment, decrement } from '../../actions/action';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import './Counter.scss';
const Counter = () => {
   const num = useAppSelector((state: any) => state.counter.count);
   const dispatch = useAppDispatch();
   return (
      <div className="counter">
         <div className="inc" onClick={() => dispatch(increment())}>
            +
         </div>
         <div className="value">{num}</div>
         <div className="dec" onClick={() => dispatch(decrement())}>
            -
         </div>
      </div>
   );
};
export default Counter;

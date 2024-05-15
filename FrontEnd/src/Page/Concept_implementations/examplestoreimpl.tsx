
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../data/redux/store' 
import { decrement, increment,incrementByAmount } from '../../data/redux/slice/counterSlice'

const Examplestoreimpl = () => {
    const count = useSelector((state:RootState) => state.counter.value)
    const dispatch = useDispatch()
    return (
    <div>
         <h2>{count}</h2>
         <div>
            <button onClick={()=>dispatch(increment())}>increment</button>
            <button onClick={()=>dispatch(decrement())}>decrement</button>
            <button onClick={()=>dispatch(incrementByAmount(10))}>incrementByAmount</button>

         </div>
    </div>
  )
}

export default Examplestoreimpl

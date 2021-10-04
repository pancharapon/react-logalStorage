import { useAppContext } from '../../context/appContext';

const TestContextState = () => {
  const { state, dispatch } = useAppContext();

  return (
    <div>
      <div>{state.number}</div>
      <button
        onClick={() => {
          dispatch({
            type: 'add_number',
            value: 2,
          });
        }}>
        increase + 2
      </button>
      {/* <button>decrease</button> */}
    </div>
  );
};

export default TestContextState;

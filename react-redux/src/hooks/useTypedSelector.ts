import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from 'src/store/reducers';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTypedSelector;

import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { AppDispatch, RootState } from '../store/index';

// Cream useDispatch personal
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Cream useSelector personal
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

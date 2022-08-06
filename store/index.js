import { configureStore} from '@reduxjs/toolkit';
import { todosApi } from './apis';
// importamos el reducer


export default configureStore({
    reducer: {
        [todosApi.reducerPath]: todosApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware)
});
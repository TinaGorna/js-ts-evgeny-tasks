import { IGlobalState} from "./state";

interface IRootState extends IGlobalState { }
export const selectAllValues = (state:IRootState ) => state.currency;

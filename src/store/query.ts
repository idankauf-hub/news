import { createSlice } from "@reduxjs/toolkit";

interface IQuery {
  input: {query:string,endpoint:string};
  sort?: string;
  filters?: {
    country: string
    catagory: string
    sources: string
  };
}
const querySlice = createSlice({
  name: "query",
  initialState: {
    input: {query:"",endpoint:""} ,
    sort: "",
    filters: {
      country: "",
      catagory: "",
      sources: "",
    },
  } as IQuery,
  reducers: {
    addInput:(state,action)=>{
        state.input.query = action.payload.query
        state.input.endpoint = action.payload.endpoint

    }
  },
});
export const addInput = querySlice.actions.addInput;
export default querySlice.reducer;
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";
export const getgames=createAsyncThunk("game/get",async()=>{
  try {
    let result=axios.get("http://localhost:5000/game/");
    return result;
  } catch (error) {
    console.log(error)
  }
})
export const addgames=createAsyncThunk("game/add",async(game)=>{
  try {
    let result=axios.post("http://localhost:5000/game/add",game);
    return result;
  } catch (error) {
    console.log(error)
  }
})
export const deletegames=createAsyncThunk("game/delete",async(id)=>{
  try {
    let result=axios.delete(`http://localhost:5000/game/${id}`);
    return result;
  } catch (error) {
    console.log(error)
  }
})
export const updategames=createAsyncThunk("game/update",async({id,game})=>{
  try {
    let result=axios.put(`http://localhost:5000/game/${id}`,game);
    return result;
  } catch (error) {
    console.log(error)
  }
})
const initialState = {
 games:null,
 status:null,
}

export const GameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
  extraReducers:{
    [getgames.pending]:(state)=>{
      state.status="pending";
    },
    [getgames.fulfilled]:(state,action)=>{
      state.status="fullfilled";
      state.games=action.payload.data.games;
    },
    [getgames.rejected]:(state)=>{
      state.status="rejected";
    },
    [addgames.pending]:(state)=>{
      state.status="pending";
    },
    [addgames.fulfilled]:(state)=>{
      state.status="fullfilled";
     
    },
    [addgames.rejected]:(state)=>{
      state.status="rejected";
    },
    [deletegames.pending]:(state)=>{
      state.status="pending";
    },
    [deletegames.fulfilled]:(state)=>{
      state.status="fullfilled";
     
    },
    [deletegames.rejected]:(state)=>{
      state.status="rejected";
    },
    [updategames.pending]:(state)=>{
      state.status="pending";
    },
    [updategames.fulfilled]:(state)=>{
      state.status="fullfilled";
     
    },
    [updategames.rejected]:(state)=>{
      state.status="rejected";
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = GameSlice.actions

export default GameSlice.reducer
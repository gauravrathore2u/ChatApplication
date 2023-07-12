import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    activeUsers: []
}

export const activeUsersSlice = createSlice({
  name: 'activeUsers',
  initialState,
  reducers: {
    setActiveUsers: (state, action) => {
        const arr1 = action.payload;
        const arr2 = state.activeUsers;
        

        arr1.forEach((user)=>{
            if(user.email !== ''){
                let isPresent = false;
                for(let i=0; i<arr2.length; i++){
                    if(arr2[i].email === user.email){
                        isPresent = true;
                    }
                }
                if(!isPresent){
                    state.activeUsers = [...state.activeUsers, user]
                }
            }
        })
        
    }
  },
})

// Action creators are generated for each case reducer function
export const { setActiveUsers } = activeUsersSlice.actions

export default activeUsersSlice.reducer
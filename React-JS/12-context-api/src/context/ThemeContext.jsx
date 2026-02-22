import React, { createContext } from 'react'

export const PostDataContext = createContext()

const ThemeContext = (props) => {
  return (
    <div>
        <PostDataContext.Provider value='Yuvraj'>
            {props.children}
        </PostDataContext.Provider>
    </div>
  )
}

export default ThemeContext
import React from 'react'
import ComponentC from './ComponentC'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
    return (
        <div className='App' style={{ color: 'white' }}>
            <UserContext.Provider value={'Newen7'}>
                <ChannelContext.Provider value={'EvolveU'}>
                    <ComponentC />
                </ChannelContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default App

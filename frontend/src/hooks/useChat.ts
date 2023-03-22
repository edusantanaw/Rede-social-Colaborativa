import {useContext} from 'react'
import { ChatContext } from '../context/Chat'

export function useChat(){
    const context = useContext(ChatContext)
    return context;
}
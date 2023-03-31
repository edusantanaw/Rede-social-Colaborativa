import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../../../../shared/hooks/useFetching'
import { IUser } from '../../../../shared/types/user'
import { formatImage } from '../../../../shared/utils/formatImage'
import { CollabContainer } from './styles'

const Collabs = () => {
  const {id} = useParams<{id: string}>()
  const {data, error} = useFetching<IUser[]>({url: `/project/collabs/${id}`})
  return (
    <CollabContainer>
      <ul>
          {data && data.map((item, i)=>(
            <li key={i}>
              <img src={formatImage(item.perfilPhoto)} alt="user_photo" />
              <span>{item.name}</span>
            </li>
          ))}
      </ul>
    </CollabContainer>
  )
}

export default Collabs
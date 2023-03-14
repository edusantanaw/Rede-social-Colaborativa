import React, { useRef } from 'react'

const Feed = () => {

    const intersectRef = useRef<HTMLDivElement | null>(null)

  return (
    <div>
        <div className="intersect" ref={intersectRef} />
    </div>
  )
}

export default Feed
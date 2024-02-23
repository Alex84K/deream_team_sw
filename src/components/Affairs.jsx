import React from 'react'
import { useState } from 'react'
import { friends } from '../utils/constans'

const Affairs = () => {

    const [img, setImg] = useState(friends.map((friend, i) => <img className='row col-sm-4' src={friend} i={i} key={i} onClick={() => toggle(i)} />))

    const toggle = (i) => { setImg(<img className='sizeHard mybox' key={i} src={friends[i]} onClick={() => k()} />) }

    const k = () => { setImg(friends.map((friend, i) => <img className='row col-sm-4' src={friend} i={i} key={i} onClick={() => toggle(i)} />)) }

    return (
        <div className='row justify-content-center mt-5'>
            <h2>Dream team</h2>
            <div className='row col-sm-6 justify-content-around'>
                {img}
            </div>
        </div>
    )
}

export default Affairs
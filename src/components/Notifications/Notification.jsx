import { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Avatar from './Avatar'
import UserName from './UserName'
import Subject from './Subject'
import PrivateMessage from './PrivateMessage'
import Picture from './Picture'
import ReactLoading from 'react-loading'

const Container = styled.section`
  min-height: 70px;
  border-radius: 5px;

  display: flex;
  gap: 10px;

  padding: 10px 5px;
`

const Alert = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
`

const Notification = ({ info, user }) => {
  const totalImages = info.picture ? 2 : 1
  const [imagesLoaded, setImagesLoaded] = useState(0)

  const handleLoaded = () => setImagesLoaded(prevImagesLoaded =>  prevImagesLoaded + 1)

  const class_names = {
    'bg-light-grayish-blue-1': !info.seen,
    'flex gap-2': imagesLoaded === totalImages,
    'none': imagesLoaded < totalImages
  }

  return (
    <>
      { imagesLoaded !== totalImages && 
        <ReactLoading className='m-auto' type='bars' color='#147af4' width='30px' height='30px' 
      /> }
      <Container classNames={classNames(class_names)}>
        <Avatar avatar={user.avatar} handleLoaded={handleLoaded} />
        <div className='flex-1'>
          <UserName firstName={user.firstName} lastName={user.lastName} />
          <Subject typeNotification={info.type} messageNotification={info.message} />
                    
          { !info.seen && <Alert className='bg-red ml-1' /> }
          
          <p className='fs-xsmall fw-normal grayish-blue mt-1'>{ info.timeAgo }</p>
          
          { info.type === 'private_message' && <PrivateMessage message={info.privateMessage} /> }
        </div>
          
        { info.picture && <Picture picture={info.picture} handleLoaded={handleLoaded} /> }
      </Container>
    </>
  )
}

Notification.propTypes = {
  info: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
}

export default Notification
import React from 'react'
import Container from '@/components/Container'
import Achievements from '@/pages/Profile/components/Achievements'
import ProfileContent from '@/pages/Profile/components/ProfileContent'

function ProfilePage() {
  return (
    <Container>
      <ProfileContent/>
      <Achievements />
    </Container>
  )
}

export default ProfilePage

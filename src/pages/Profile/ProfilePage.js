import React from 'react'
import Container from '@/components/Container'
import Achievements from '@/pages/Profile/components/Achievements'
import ProfileContent from '@/pages/Profile/components/ProfileContent'
import ProfileHeader from '@/pages/Profile/components/ProfileHeader'

function ProfilePage() {
  return (
    <Container>
      <ProfileHeader />
      <ProfileContent />
      <Achievements />
    </Container>
  )
}

export default ProfilePage

import React from 'react'
import Container from '@/components/Container'
import ProfileContent from '@/pages/Profile/components/ProfileContent'
import ProfileHeader from '@/pages/Profile/components/ProfileHeader'

function ProfilePage() {
  return (
    <Container>
      <ProfileHeader />
      <ProfileContent />
    </Container>
  )
}

export default ProfilePage

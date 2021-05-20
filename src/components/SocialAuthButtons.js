import React from 'react'
import Button from '@/components/Button'
import socialButtons from '@/data/socialButtons'

/**
 * Список кнопок авторизации церез соц. сети
 * @returns {JSX.Element} Элемент списка кнопок
 */
function SocialAuthButtons() {
  return (
    <div className='grid grid-cols-3 gap-4'>
      {socialButtons.map((social, idx) => (
        <a
          href={social.link}
          key={idx}
        >
          <Button className='w-full h-full'>
            <social.component className='text-gray-500' />
          </Button>
        </a>
      ))}
    </div>
  )
}

export default SocialAuthButtons

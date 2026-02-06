import background from '@/assets/background.jpg'
import Image from 'next/image'
import React, { memo } from 'react'

const RootBackground: React.FC = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-full overflow-hidden bg-white dark:bg-black">
      <Image src={background} alt={process.env.NEXT_PUBLIC_HOST + ' background image.'} className={'block h-full w-full object-cover'} />
    </div>
  )
}

export default memo(RootBackground)

import React from 'react'

type TTypography = {
  text: string
}

export default function Typography({ text }: TTypography) {
  return (
    <div>
      <p className="tracking-tight text-gray-500 md:text-lg dark:text-gray-400">{text}</p>
    </div>
  )
}

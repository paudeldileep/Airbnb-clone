import React from 'react'

const Section = (props) => {
    const {headingClassNames,sectionClassNames,headingText,children}=props
  return (
    <section className={`${sectionClassNames} w-full pt-5`}>
        {headingText && <h2 className={`${headingClassNames} text-gray-700 font-semibold mb-2 ml-2`}>
            {headingText}   
        </h2>}
        {children}
    </section>
  )
}

export default Section
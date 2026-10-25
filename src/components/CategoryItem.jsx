import React from 'react'

const CategoryItem = ({title,children}) => {
    return (
        <div className='categoryItem w-42.5 h-36.25 p-6.25 border text-center mt-15 group hover:bg-primary hover:border-none'>
            <div className='icon'>
                {children}
            </div>

            <h3 className='group-hover:text-white'>{title}</h3>
        </div>
    )
}

export default CategoryItem
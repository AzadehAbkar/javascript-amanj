import React from 'react';

const BlogLayout = ({children}) => {
    return (
        <div>
            <main className='flex justify-between items-start container mx-auto'>
              {children}  
            </main>
            <aside></aside>
        </div>
    );
};

export default BlogLayout;
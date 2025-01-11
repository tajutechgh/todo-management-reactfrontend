import React from 'react'

const HeaderComponent = () => {
  return (
    <nav className="navbar bg-primary border-bottom border-body" data-bs-theme="dark">
        <div className="container">
            <a className="navbar-brand" href="http://localhost:3000/todos">
              Todo Management System
            </a>  
        </div>
    </nav>
  )
}

export default HeaderComponent
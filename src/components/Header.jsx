import React from 'react'

const header = () => {
  return (
    <>
      <header className='fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0'>
        <div className="max-w-screen-2xl w-full mx-auto px-4">
          <h1>
            <a href="/"
              className='logo'
            >
              <img src="/images/pn-logo.png" alt="Puspalal Newar"
                width={40}
                height={40}
              />

            </a>
          </h1>
        </div>
      </header>

      <div className="">
        <button
        className=''
        onClick={null}
        >
          <span className='material-symbols-rounded'>menu</span>
        </button>
      </div>
    </>
  )
}

export default header

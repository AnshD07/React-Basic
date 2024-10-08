import React from 'react'
import { Container, LogoutBtn, Logo } from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Header() {

	const authStatus = useSelector((state) => state.auth.status)  //! here auth is file name
	const navigate = useNavigate()

	const navItems = [
		{
			name: 'Home',
			slug: "/",
			active: true
		},
		{
			name: "Login",
			slug: "/login",
			active: !authStatus,
		},
		{
			name: "Signup",
			slug: "/signup",
			active: !authStatus,
		},
		{
			name: "All Posts",
			slug: "/all-posts",
			active: authStatus,
		},
		{
			name: "Add Post",
			slug: "/add-post",
			active: authStatus,
		},
	]

	return (
		<header className='py-3 shadow bg-gray-500'>
			<Container>
				<nav className='flex'>
					<div className='mr-4'>
						<Link to='/'>
							<Logo width='70px' />
						</Link>
					</div>

					<ul className='flex ml-auto'>
						{navItems.map((item) =>
							item.active ? ( //! if active then show	
								<li key={item.name}>  //* key is important for repeting HTML Tag
									<button
										className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
										onClick={() => navigate(item.slug)}  //! navigating to link
									>{item.name}</button>
								</li>
							) : null
						)}

						{authStatus && (  //* if authStatus is true then LogoutBtn will shown
							<li>
								<LogoutBtn />
							</li>
						)}
					</ul>

				</nav>
			</Container>
		</header>
	)
}

export default Header
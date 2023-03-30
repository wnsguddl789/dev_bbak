import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import { Navigation } from '@/components'
import { metadata } from '@/constants'

type Props = { children: React.ReactNode; title?: string }

const GlobalLayout = ({ children, title }: Props) => (
	<div className={`w-full flex flex-col items-center p-3`}>
		<Head>
			<title>{title ? title : metadata.title}</title>
		</Head>
		<header className={`w-full max-w-3xl flex flex-row justify-between items-center my-1`}>
			<div className={`flex flex-row items-center`}>
				<span className={`mx-2 font-extralight text-lg`}>
					{title ? title : metadata.title}
				</span>
			</div>
			<Navigation />
		</header>
		<main className={`w-full max-w-3xl`}>{children}</main>
	</div>
)

export default GlobalLayout

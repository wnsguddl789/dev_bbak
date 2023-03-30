import { allPosts } from 'contentlayer/generated'
import { InferGetStaticPropsType } from 'next'

import { GlobalLayout, BlogPost } from '@/components'
import Link from 'next/link'
import Image from 'next/image'

import { metadata } from '@/constants'

const MainPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<GlobalLayout>
			<div className={`my-5 w-full`}>
				<div className={`relative`}>
					<Image
						src={`/home.jpeg`}
						alt="대표 이미지"
						height={45}
						width={100}
						layout={`responsive`}
						objectFit="cover"
						className={`rounded-3xl`}
					/>
					<span
						className={`absolute top-12 font-extrabold italic text-black text-5xl md:text-9xl text flex justify-center w-full drop-shadow-lg`}>
						{metadata.title}
					</span>
				</div>
				<section className={`mt-10`}>
					<h1 className={`text-3xl font-extrabold`}>최근 게시물</h1>
					<div className={`flex flex-col`}>
						{posts.slice(0, 5).map((post) => (
							<BlogPost
								date={post.date}
								title={post.title}
								des={post.description}
								slug={post._raw.flattenedPath}
								key={post._id}
							/>
						))}
					</div>
				</section>
			</div>
		</GlobalLayout>
	)
}

export const getStaticProps = async () => {
	const posts = allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
	return {
		props: {
			posts,
		},
	}
}

export default MainPage

import { allPosts } from 'contentlayer/generated'
import { InferGetStaticPropsType } from 'next'

import { GlobalLayout, BlogPost } from '@/components'

const BlogListPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => (
	<GlobalLayout>
		<div className="flex flex-col">
			{posts.map((post) => (
				<BlogPost
					date={post.date}
					title={post.title}
					des={post.description}
					slug={post._raw.flattenedPath}
					key={post._id}
				/>
			))}
		</div>
	</GlobalLayout>
)
export const getStaticProps = async () => {
	const posts = allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))

	return {
		props: {
			posts,
		},
	}
}

export default BlogListPage

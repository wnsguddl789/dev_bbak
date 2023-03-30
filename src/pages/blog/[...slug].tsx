import { GlobalLayout } from '@/components'
import { allPosts, Post } from 'contentlayer/generated'
import { InferGetStaticPropsType, GetStaticPropsContext } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'

const PostDetailPage = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const MDXComponent = useMDXComponent(post?.body.code)
	return (
		<GlobalLayout>
			<div className="mt-10 prose">
				<h1 className="text-sky-700">{post?.title}</h1>
				<MDXComponent />
			</div>
		</GlobalLayout>
	)
}

export const getStaticPaths = async () => {
	return {
		paths: allPosts.map((p) => ({ params: { slug: p._raw.flattenedPath } })),
		fallback: false,
	}
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
	console.log(params)
	const post = allPosts.find((p) => p._raw.flattenedPath === params?.slug) as Post

	return {
		props: {
			post,
		},
	}
}

export default PostDetailPage

import { navigationLinks } from '@/constants'
import Link from 'next/link'

const Navigation = () => (
	<nav>
		{navigationLinks.map((navigationLink) => (
			<Link href={navigationLink.link} key={navigationLink.title} className="mr-5">
				{navigationLink.title}
			</Link>
		))}
	</nav>
)

export default Navigation

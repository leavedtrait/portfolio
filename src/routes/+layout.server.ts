import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	const session = await event.locals.auth();

	return {
		user: {
			name: session?.user?.name,
			email: session?.user?.email,
			image: session?.user?.image
		},
		session
	};
};

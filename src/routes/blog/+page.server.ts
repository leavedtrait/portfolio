import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const session = await event.locals.auth();
	console.log(session);
	return {
		user: {
			name: session!.user?.name,
			email: session!.user?.email,
			image: session!.user?.image
		}
	};
};

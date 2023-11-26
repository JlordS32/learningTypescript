// --------------------
// Intersection Type
// --------------------

interface HasID {
	id: number;
}

function addIdToValue<T>(val: T): T & HasID {
	return {
		id: Math.random(),
		...val,
	};
}

interface Post {
	title: string;
	thumbsUp: number;
}

const post = addIdToValue<Post>({
	title: 'My Post',
	thumbsUp: 69,
});

console.log(Object.entries(post).map(([_, value]) => value).join('\n'));

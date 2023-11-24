// -------------------
// interfaces
// -------------------

interface Author {
	name: string;
	avatar: string;
}

const authorOne: Author[] = [
	{
		name: 'Jen',
		avatar: 'https://joeschmoe.io/api/v1/random',
	},
	{
		name: 'John',
		avatar: 'https://joeschmoe.io/api/v1/random',
	},
];

interface Post {
	title: string;
	body: string;
	tags: string[];
	createAt: Date;
	author: Author;
}

const newPost: Post = {
	title: 'My dog ate my homework',
	body: 'Jesus what the fuck',
	tags: ['dogs', 'newme', 'wtf'],
	createAt: new Date(),
	author: {
		name: 'Jen',
		avatar: 'https://joeschmoe.io/api/v1/random',
	},
};

console.log(newPost);

// -------------------
// as function argument types
// -------------------

function createPost(post: Post): void {
	console.log(`Created Post: ${post.title} by ${post.author.name}`);
}

createPost(newPost);

// -------------------
// with arrays
// -------------------

const posts: Post[] = [
	{
		title: 'My dog ate my homework',
		body: 'Jesus what the fuck',
		tags: ['dogs', 'newme', 'wtf'],
		createAt: new Date(),
		author: {
			name: 'Jen',
			avatar: 'https://joeschmoe.io/api/v1/random',
		},
	},
	{
		title: 'Good day today',
		body: "Yesterday, I've seen a flying butterfly. Weather was beautiful. A very beautiful day. It's FRIDAY!",
		tags: ['newdaynewme', 'beautiful', 'FRIDAY!'],
		createAt: new Date(),
		author: {
			name: 'Jane',
			avatar: 'https://joeschmoe.io/api/v1/random',
		},
	},
];

console.log('---------------')
posts.forEach((post) => {
   createPost(post);
});

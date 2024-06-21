const baseUrl = 'https://jsonplaceholder.typicode.com';

const urls = {
    users: {
        base: '/users',
        userById:(userId:number):string => urls.users.base + '/' + userId
    },
    posts: {
        base: '/posts',
        postById: (postId: number): string => urls.posts.base + '/' + postId
    }
}


export {
    baseUrl,
    urls
}

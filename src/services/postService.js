import axios from 'axios';

import UserService from './userService';

export const PostService = {
    async readAll() {
        try {
            const responsePosts = await axios.get('https://jsonplaceholder.typicode.com/posts');
            const users = await UserService.readAll();
            const posts = responsePosts.data;

            // for(let i = 0, l = posts.length; i < l; i++) {
            //     const post = posts[i];
            //     for(let j = 0, l2 = users.length; j < l2;  j++) {
            //         if(users[j].id === post.userId) {
            //             post.authorFullName = users[j].name;
            //             break;
            //         }
            //     }
            // }
            // return posts;

            return posts.map(post => {
                post.authorFullName = users.find(user => user.id === post.userId).name;
                return post;
            });


          } catch (error) {
            console.error(error);
          }
    },
    
    async readOne(postId) {
      try {
          const responsePost = await axios.get('https://jsonplaceholder.typicode.com/posts/' + postId);
          const users = await UserService.readAll();
          const post = responsePost.data;
          const user = users.find(user => user.id === post.userId);
          post.authorFullName = user.name;
          if(user.imageUrl) {
            post.authorImageUrl = user.imageUrl
          } else {
            post.authorInitials = user.name.split(/[\- ]/).map(part => part[0].toUpperCase()).join(" ");
          }
         
          return post;

        } catch (error) {
          console.error(error);
        }
  }
}
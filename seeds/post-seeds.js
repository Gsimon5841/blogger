const { Post } = require('../models');

const postdata = [
    {
        title: 'Jimmy Neutron discovers " Brain Petroleum "',
        post_text: 'Carefull around fire it might cause a brain blast lol',
        user_id: 10
    },
    {
        title: 'Sheen is caught cheating!',
        post_text: 'Libby is furious',
        user_id: 8
    },
    {
        title: "Carl is in love with Jimmy's mom",
        post_text: "Jimmy's dad is suprisingly ok with is",
        user_id: 1
    },
    {
        title: 'Jimmy Neutron discovers " Brain Petroleum "',
        post_text: 'Carefull around fire it might cause a brain blast lol',
        user_id: 4
    },
    {
        title: 'Sheen is caught cheating!',
        post_text: 'Libby is furious',
        user_id: 7
    },
    {
        title: 'Jimmy Neutron discovers " Brain Petroleum "',
        post_text: 'Carefull around fire it might cause a brain blast lol',
        user_id: 4
    },
    {
        title: "Carl is in love with Jimmy's mom",
        post_text: "Jimmy's dad is suprisingly ok with is",
        user_id: 1
    },
    {
        title: 'Jimmy Neutron discovers " Brain Petroleum "',
        post_text: 'Carefull around fire it might cause a brain blast lol',
        user_id: 1
    },
    {
        title: 'Sheen is caught cheating!',
        post_text: 'Libby is furious',
        user_id: 9
    },
    {
        title: 'Jimmy Neutron discovers " Brain Petroleum "',
        post_text: 'Carefull around fire it might cause a brain blast lol',
        user_id: 5
    },
    {
        title: 'Sheen is caught cheating!',
        post_text: 'Libby is furious',
        user_id: 3
    },
    {
        
        title: 'Jimmy Neutron discovers " Brain Petroleum "',
        post_text: 'Carefull around fire it might cause a brain blast lol',
        user_id: 10
    },
    {
        title: 'Sheen is caught cheating!',
        post_text: 'Libby is furious',
        user_id: 8
    },
    {
        title: 'Jimmy Neutron discovers " Brain Petroleum "',
        post_text: 'Carefull around fire it might cause a brain blast lol',
        user_id: 3
    },
    {
        title: 'Jimmy Neutron discovers " Brain Petroleum "',
        post_text: 'Carefull around fire it might cause a brain blast lol',
        user_id: 3
    },
    {
        title: 'Sheen is caught cheating!',
        post_text: 'Libby is furious',
        user_id: 7
    },
    {
        title: 'Jimmy Neutron discovers " Brain Petroleum "',
        post_text: 'Carefull around fire it might cause a brain blast lol',
        user_id: 6
    },
    {
        title: 'Sheen is caught cheating!',
        post_text: 'Libby is furious',
        user_id: 4
    },
    {
        title: "Carl is in love with Jimmy's mom",
        post_text: "Jimmy's dad is suprisingly ok with is",
        user_id: 6
    },
    {
        title: 'Sheen is caught cheating!',
        post_text: 'Libby is furious',
        user_id: 7
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
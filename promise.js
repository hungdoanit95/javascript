var users = [{
        id: 1,
        name: "Hung Dona"
    },
    {
        id: 2,
        name: "Ty Anh"
    }
]
var comments = [{
        id: 1,
        user_id: 1,
        content: "Binh luan 1"
    },
    {
        id: 2,
        user_id: 2,
        content: "Binh luan 2"
    },
    {
        id: 3,
        user_id: 1,
        content: "Binh luan 3"
    },
    {
        id: 4,
        user_id: 2,
        content: "Binh luan 4"
    }
]

function getComments() {
    return new Promise(function(resolve, reject) {
        setInterval(function() {
            resolve(comments);
        }, 1000);
    });

}
// function getNameUser(){
//     return 
// }
getComments().then(function(comments) {
    var userIds = comments.map(function(comment) {
        return comment.user_id;
    });
    console.log(userIds);
});
// promise
//     .then(function(courses){
//         console.log(courses);
//     })
//     .catch(function(){
//         console.log('Failure!');
//     })
//     .finally(function(){
//         console.log('Done!');
//     });
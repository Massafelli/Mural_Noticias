module.exports = {
    posts: [
        {id:'fdwe23',title: 'teste do mural', description:'descricao teste'}
    ],

    getAll(){
        return this.posts;
    },

    newPost(title,description){
        this.posts.push({id:this.generateId(),title,description})
    },

    generateId(){
        return Math.random().toString(36).substr(2,9)
    }
}
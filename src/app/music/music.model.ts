export interface IMusic{
    _id: String,
    artists: {
        id: Number,
        name: String,
        cover: String,
        bio: String,
        albums: {
            albumId: String,
            title: String,
            year: Number,
            cover: String,
            price: Number
        },
        genre: String
    }
}


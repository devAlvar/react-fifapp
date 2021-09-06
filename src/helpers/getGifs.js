export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(category)}&api_key=Rgt2ZIU22vXujtT0w7qFHDvIvXveBHpl`;

    const resp =  await fetch( url );

    const {data} = await resp.json();

    const gifs = data.map( img => {

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_large.url
        }

    })

    console.log(gifs);

    return gifs;

    // setImages(gifs);

}
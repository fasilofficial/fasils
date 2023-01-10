import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
    projectId: "de2ktupk",
    dataset: 'production',
    apiVersion: '2023-01-09',
    useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
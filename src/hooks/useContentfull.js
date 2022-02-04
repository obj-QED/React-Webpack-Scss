import { createClient } from 'contentful';

const useContentfull = () => {
    createClient({
        space: 'na3y4142qh9d',
        accessToken: 'xi3jOfLzUCLGE6HyVnu4rv1Etdj0L3Te7AFqJzcZ-7Y',
        host: 'cdn.contentful.com',
    });
    const getBanner = async() => {
        try {
            const entries = await client.getEntries({
                content_type: 'banner',
                select: 'fields',
                order: 'fields.name',
            });
            return entries;
         } catch (error) {
                console.log(`Print error ${error}`);
            }
    };
    return { getBanner };
};

export default useContentfull;
import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "na3y4142qh9d",
    accessToken: "AUMO_LlCqb84DDfyW3lOb3Wt896QYwq2tSeo8JeLr5Y",
    host: "cdn.contentful.com"
  });

  const getBanner = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "banner",
        select: "fields"
      });
      const sanitizedEntries = entries.items.map((item) => {
          const logoUrl = item.fields.logoImage.fields.file.url;
          const bannerImage = item.fields.bannerImage.fields.file.url;

        return {
            ...item.fields,
            logoUrl,
            bannerImage
        };
    });
    
      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching authors ${error}`);
    }
  };

  return { getBanner };
};

export default useContentful;
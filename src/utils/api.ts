import axios from 'axios';

export const fetcher = async ({
  url,
  query,
}: {
  url: string;
  query: string;
}) => {
  try {
    const options = {
      method: 'GET',
      url,
      params: {
        query,
        page: '1',
        num_pages: '1',
        date_posted: 'all',
      },
      headers: {
        'x-rapidapi-key': '2fc07fecaamsh74317c880c38622p11850djsn046cfa97427e',
        'x-rapidapi-host': 'jsearch.p.rapidapi.com',
      },
    };

    const response = await axios.request(options);
    console.log(response.data.data);

    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

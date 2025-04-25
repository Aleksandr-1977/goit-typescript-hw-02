import axios from 'axios';

const API_KEY = 'fgIsut-yOcySJ4AQr0LqvBin1Il4Sp0cn95PcIbLVBA';
axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.headers.common = {
  Authorization: `Client-ID ${API_KEY}`,
  'Accept-Version': 'v1',
};

axios.defaults.params = {
  orientation: 'landscape',
  per_page: 12,
};
interface ApiPhoto {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description?: string;
}
interface ApiResponse {
  total: number;
  total_pages: number;
  results: ApiPhoto[];
}

export const getImages = async (
  query: string,
  page: number
): Promise<ApiResponse> => {
  const response = await axios.get<ApiResponse>('/search/photos', {
    params: {
      query,
      page,
    },
  });
  return response.data;
};

import { AxiosWrapper } from "./AxiosWrapper";

export const fetchCountryCodeandFlags = async () =>
    AxiosWrapper({
      method: 'GET',
      url: `https://flagcdn.com/en/codes.json`,
      defaultHeaders: true,
    });
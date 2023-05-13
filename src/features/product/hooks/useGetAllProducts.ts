import {useQuery, UseQueryOptions} from '@tanstack/react-query';
import {AxiosError} from 'axios';
import {api} from '../../../services/axios.instance';
import {Product} from '../../../types';

export const getAllProducts = async () => {
  return (await api.get<Array<Product>>('/products')).data;
};

export const useGetAllProducts = (
  options?: UseQueryOptions<
    Array<Product>,
    AxiosError,
    Array<Product>,
    readonly [string]
  >,
) => {
  return useQuery({
    queryKey: ['all-products'],
    queryFn: getAllProducts,
    ...options,
  });
};

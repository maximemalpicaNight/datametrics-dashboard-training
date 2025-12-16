import { useQuery } from '@tanstack/react-query';
import { apolloClient } from '@/lib/apollo-client';
import { gql } from '@apollo/client';

const GET_METRICS = gql`
  query GetMetrics($startDate: String, $endDate: String, $organizationId: ID!) {
    metrics(startDate: $startDate, endDate: $endDate, organizationId: $organizationId) {
      id
      date
      revenue
      users
      conversion
      growth
    }
  }
`;

// Custom hook using React Query
export default function useMetrics(startDate: string, endDate: string, organizationId: string) {
  return useQuery({
    queryKey: ['metrics', startDate, endDate, organizationId],
    queryFn: async () => {
      const { data } = await apolloClient.query({
        query: GET_METRICS,
        variables: { startDate, endDate, organizationId },
      });
      return data.metrics;
    },
    staleTime: 5 * 60 * 1000, 
    retry: 1,
  });
}
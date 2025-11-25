import { supabase } from '@/lib/supabase';

/**
 * API service for making requests to the backend
 */

export const api = {
  /**
   * Health check endpoint
   */
  health: async () => {
    try {
      const response = await fetch('/api/health');
      return response.json();
    } catch (error) {
      console.error('Health check failed:', error);
      throw error;
    }
  },

  /**
   * Example function to fetch data from Supabase
   *
   * @example
   * // Replace 'your_table_name' with your actual table name
   * const { data, error } = await supabase
   *   .from('your_table_name')
   *   .select('*')
   *   .limit(10);
   *
   * @see https://supabase.com/docs/reference/javascript/select
   */
  // supabaseExample: async () => {
  //   try {
  //     const { data, error } = await supabase
  //       .from('your_table_name') // TODO: Replace with your actual table name
  //       .select('*')
  //       .limit(10);
  //
  //     if (error) throw error;
  //     return data;
  //   } catch (error) {
  //     console.error('Failed to fetch from Supabase:', error);
  //     throw error;
  //   }
  // },
};

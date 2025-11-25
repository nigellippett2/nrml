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
   */
  supabaseExample: async () => {
    try {
      const { data, error } = await supabase
        .from('example_table')
        .select('*')
        .limit(10);

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Failed to fetch from Supabase:', error);
      throw error;
    }
  },
};

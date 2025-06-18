export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          id: string;
          name: string;
          icon: string;
          description: string | null;
          created_at: string | null;
          updated_at: string | null;
        };
        Insert: {
          id?: string;
          name: string;
          icon: string;
          description?: string | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
        Update: {
          id?: string;
          name?: string;
          icon?: string;
          description?: string | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
      };
      tools: {
        Row: {
          id: string;
          name: string;
          description: string;
          category_id: string | null;
          developer: string;
          pricing_type: string;
          pricing_amount: number | null;
          features: string[];
          screenshots: string[];
          video_url: string | null;
          website_url: string;
          rating: number | null;
          review_count: number | null;
          last_updated: string | null;
          release_date: string;
          created_at: string | null;
          updated_at: string | null;
        };
        Insert: {
          id?: string;
          name: string;
          description: string;
          category_id?: string | null;
          developer: string;
          pricing_type: string;
          pricing_amount?: number | null;
          features?: string[];
          screenshots?: string[];
          video_url?: string | null;
          website_url: string;
          rating?: number | null;
          review_count?: number | null;
          last_updated?: string | null;
          release_date: string;
          created_at?: string | null;
          updated_at?: string | null;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string;
          category_id?: string | null;
          developer?: string;
          pricing_type?: string;
          pricing_amount?: number | null;
          features?: string[];
          screenshots?: string[];
          video_url?: string | null;
          website_url?: string;
          rating?: number | null;
          review_count?: number | null;
          last_updated?: string | null;
          release_date?: string;
          created_at?: string | null;
          updated_at?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
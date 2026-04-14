export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      blog_posts: {
        Row: {
          id: string;
          slug: string;
          title: string;
          excerpt: string | null;
          content: string | null;
          date: string | null;
          read_time: string | null;
          tags: string | null;
          image: string | null;
          author_name: string | null;
          author_avatar: string | null;
          related_posts: string | null;
          created_at: string;
          updated_at: string;
        }
        Insert: {
          id?: string;
          slug: string;
          title: string;
          excerpt?: string;
          content?: string;
          date?: string;
          read_time?: string;
          tags?: string;
          image?: string;
          author_name?: string;
          author_avatar?: string;
          related_posts?: string;
        }
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          excerpt?: string;
          content?: string;
          date?: string;
          read_time?: string;
          tags?: string;
          image?: string;
          author_name?: string;
          author_avatar?: string;
          related_posts?: string;
        }
      }
      projects: {
        Row: {
          id: string;
          slug: string;
          title: string;
          short_description: string | null;
          full_description: string | null;
          tech: string | null;
          image: string | null;
          github_url: string | null;
          live_url: string | null;
          featured: boolean;
          category: string;
          date: string | null;
          created_at: string;
          updated_at: string;
        }
        Insert: {
          id?: string;
          slug: string;
          title: string;
          short_description?: string;
          full_description?: string;
          tech?: string;
          image?: string;
          github_url?: string;
          live_url?: string;
          featured?: boolean;
          category?: string;
          date?: string;
        }
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          short_description?: string;
          full_description?: string;
          tech?: string;
          image?: string;
          github_url?: string;
          live_url?: string;
          featured?: boolean;
          category?: string;
          date?: string;
        }
      }
      skills: {
        Row: {
          id: string;
          category: string;
          name: string;
          icon: string | null;
          display_order: number;
          created_at: string;
          updated_at: string;
        }
        Insert: {
          id?: string;
          category: string;
          name: string;
          icon?: string;
          display_order?: number;
        }
        Update: {
          id?: string;
          category?: string;
          name?: string;
          icon?: string;
          display_order?: number;
        }
      }
      certifications: {
        Row: {
          id: string;
          name: string;
          institution: string;
          logo: string | null;
          date: string | null;
          credential_url: string | null;
          description: string | null;
          created_at: string;
          updated_at: string;
        }
        Insert: {
          id?: string;
          name: string;
          institution: string;
          logo?: string;
          date?: string;
          credential_url?: string;
          description?: string;
        }
        Update: {
          id?: string;
          name?: string;
          institution?: string;
          logo?: string;
          date?: string;
          credential_url?: string;
          description?: string;
        }
      }
    }
  }
}
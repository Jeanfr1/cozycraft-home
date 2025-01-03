export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      crypto_wallets: {
        Row: {
          balance: number | null
          created_at: string
          id: string
          wallet_address: string | null
        }
        Insert: {
          balance?: number | null
          created_at?: string
          id: string
          wallet_address?: string | null
        }
        Update: {
          balance?: number | null
          created_at?: string
          id?: string
          wallet_address?: string | null
        }
        Relationships: []
      }
      custom_orders: {
        Row: {
          budget: string
          created_at: string
          description: string
          dimensions: string
          email: string
          full_name: string
          id: string
          phone: string
          project_type: string
          status: string
          wood_type: string
        }
        Insert: {
          budget: string
          created_at?: string
          description: string
          dimensions: string
          email: string
          full_name: string
          id?: string
          phone: string
          project_type: string
          status?: string
          wood_type: string
        }
        Update: {
          budget?: string
          created_at?: string
          description?: string
          dimensions?: string
          email?: string
          full_name?: string
          id?: string
          phone?: string
          project_type?: string
          status?: string
          wood_type?: string
        }
        Relationships: []
      }
      mood_entries: {
        Row: {
          created_at: string
          id: string
          mood: string
          spotify_artist_name: string | null
          spotify_track_id: string | null
          spotify_track_name: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          mood: string
          spotify_artist_name?: string | null
          spotify_track_id?: string | null
          spotify_track_name?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          mood?: string
          spotify_artist_name?: string | null
          spotify_track_id?: string | null
          spotify_track_name?: string | null
          user_id?: string
        }
        Relationships: []
      }
      order_items: {
        Row: {
          created_at: string
          id: string
          order_id: string
          price_at_time: number
          product_id: string
          quantity: number
        }
        Insert: {
          created_at?: string
          id?: string
          order_id: string
          price_at_time: number
          product_id: string
          quantity: number
        }
        Update: {
          created_at?: string
          id?: string
          order_id?: string
          price_at_time?: number
          product_id?: string
          quantity?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          created_at: string
          id: string
          shipping_address: string
          status: string
          total_amount: number
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          shipping_address: string
          status?: string
          total_amount: number
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          shipping_address?: string
          status?: string
          total_amount?: number
          user_id?: string
        }
        Relationships: []
      }
      portfolio: {
        Row: {
          created_at: string
          id: number
        }
        Insert: {
          created_at?: string
          id?: number
        }
        Update: {
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          id: string
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          id: string
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          id?: string
          username?: string | null
        }
        Relationships: []
      }
      project_inquiries: {
        Row: {
          budget_range: string
          company_name: string | null
          created_at: string
          email: string
          full_name: string
          id: string
          project_description: string
          project_type: string
          timeline: string
        }
        Insert: {
          budget_range: string
          company_name?: string | null
          created_at?: string
          email: string
          full_name: string
          id?: string
          project_description: string
          project_type: string
          timeline: string
        }
        Update: {
          budget_range?: string
          company_name?: string | null
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          project_description?: string
          project_type?: string
          timeline?: string
        }
        Relationships: []
      }
      santa_letters: {
        Row: {
          age: number
          child_name: string
          created_at: string
          generated_letter: string
          id: string
          wish_list: string
        }
        Insert: {
          age: number
          child_name: string
          created_at?: string
          generated_letter: string
          id?: string
          wish_list: string
        }
        Update: {
          age?: number
          child_name?: string
          created_at?: string
          generated_letter?: string
          id?: string
          wish_list?: string
        }
        Relationships: []
      }
      tasks: {
        Row: {
          completed: boolean | null
          created_at: string | null
          date: string | null
          description: string | null
          id: string
          priority: string
          scheduled_time: string | null
          title: string
          user_id: string
        }
        Insert: {
          completed?: boolean | null
          created_at?: string | null
          date?: string | null
          description?: string | null
          id?: string
          priority?: string
          scheduled_time?: string | null
          title: string
          user_id: string
        }
        Update: {
          completed?: boolean | null
          created_at?: string | null
          date?: string | null
          description?: string | null
          id?: string
          priority?: string
          scheduled_time?: string | null
          title?: string
          user_id?: string
        }
        Relationships: []
      }
      transactions: {
        Row: {
          amount: number
          created_at: string
          icon: string | null
          id: string
          name: string
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          icon?: string | null
          id?: string
          name: string
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          icon?: string | null
          id?: string
          name?: string
          user_id?: string
        }
        Relationships: []
      }
      user_cart: {
        Row: {
          created_at: string
          id: string
          product_id: string
          quantity: number
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          product_id: string
          quantity?: number
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          product_id?: string
          quantity?: number
          user_id?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      itr_submissions: {
        Row: {
          id: string
          created_at: string
          name: string
          phone: string
          email: string
          pan_card_url: string
          aadhaar_card_url: string
          status: 'pending' | 'processing' | 'completed'
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          phone: string
          email: string
          pan_card_url: string
          aadhaar_card_url: string
          status?: 'pending' | 'processing' | 'completed'
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          phone?: string
          email?: string
          pan_card_url?: string
          aadhaar_card_url?: string
          status?: 'pending' | 'processing' | 'completed'
        }
      }
    }
  }
}
// src/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseKey)

// Auth helper functions
export const verifySupabaseToken = async (token: string) => {
  try {
    const { data: { user }, error } = await supabase.auth.getUser(token)
    
    if (error || !user) {
      return null
    }
    
    return user
  } catch (error) {
    return null
  }
}

//Initialize other Supabase services as needed
export async function Initialize() {
  console.log('Supabase client initialized')
}